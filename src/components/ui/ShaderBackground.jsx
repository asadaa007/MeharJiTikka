import { useEffect, useRef } from "react";

// Lightweight raw-WebGL animated flame/ember shader.
// Brand-colored (night -> maroon -> fire -> gold) domain-warped FBM noise
// that rises like charcoal heat. No external 3D libraries.

const VERT = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

const FRAG = `
precision highp float;
uniform float u_time;
uniform vec2 u_resolution;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 6; i++) {
    v += a * noise(p);
    p *= 2.0;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 p = uv;
  p.x *= u_resolution.x / u_resolution.y;

  float t = u_time * 0.16;

  // Rising, domain-warped flame field
  vec2 q = vec2(p.x * 2.6, p.y * 2.4 - t * 2.2);
  float warp = fbm(q + vec2(0.0, t * 1.2));
  float f = fbm(q + warp * 1.6 + vec2(t * 0.2, 0.0));

  // Stronger toward the bottom (the "coals")
  float grad = smoothstep(1.05, -0.15, uv.y);
  float flame = f * grad * 1.35;

  // Flicker
  flame *= 0.85 + 0.15 * sin(u_time * 3.0 + uv.x * 6.0);

  // Brand palette
  vec3 night  = vec3(0.055, 0.055, 0.06);
  vec3 maroon = vec3(0.478, 0.122, 0.122);
  vec3 fire   = vec3(1.0, 0.42, 0.0);
  vec3 gold   = vec3(0.831, 0.686, 0.215);

  vec3 col = night;
  col = mix(col, maroon, smoothstep(0.18, 0.55, flame));
  col = mix(col, fire,   smoothstep(0.5, 0.92, flame));
  col = mix(col, gold,   smoothstep(0.85, 1.15, flame) * 0.55);

  // Subtle ambient maroon glow rising from the base
  col += maroon * 0.18 * smoothstep(1.0, 0.2, uv.y);

  // Vignette for cinematic focus
  float vig = smoothstep(1.25, 0.25, length(uv - 0.5));
  col *= 0.55 + 0.45 * vig;

  gl_FragColor = vec4(col, 1.0);
}
`;

function compile(gl, type, src) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export default function ShaderBackground({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext("webgl", { antialias: true, alpha: false }) ||
      canvas.getContext("experimental-webgl");
    if (!gl) {
      // WebGL unavailable — leave the CSS fallback gradient visible.
      canvas.style.display = "none";
      return;
    }

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    );
    const aPos = gl.getAttribLocation(program, "a_pos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "u_time");
    const uRes = gl.getUniformLocation(program, "u_resolution");

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.floor(canvas.clientWidth * dpr);
      const h = Math.floor(canvas.clientHeight * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };

    let raf;
    const start = performance.now();
    const render = (now) => {
      resize();
      const t = prefersReduced ? 0 : (now - start) / 1000;
      gl.uniform1f(uTime, t);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (!prefersReduced) raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buffer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`h-full w-full ${className}`}
      // CSS fallback if WebGL fails / before first frame
      style={{
        background:
          "radial-gradient(60% 80% at 50% 100%, #7A1F1F 0%, #1A1A1A 55%, #0F0F0F 100%)",
      }}
    />
  );
}
