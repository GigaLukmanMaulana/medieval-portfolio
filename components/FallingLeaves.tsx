'use client';

import { useEffect, useRef } from 'react';

interface Leaf {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
  phase: number;
  amplitude: number;
}

const COLORS = [
  '#4a7c59', '#5a9e6f', '#3d6b4a', '#6ab187',
  '#2d5a3d', '#7bc47f', '#4e8b5f', '#38724a',
];

function randomRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function randomColor(): string {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function createLeaf(width: number, height: number, initial: boolean): Leaf {
  return {
    x: initial ? randomRange(0, width) : randomRange(-50, width * 0.3),
    y: initial ? randomRange(-200, height) : randomRange(-200, -20),
    size: randomRange(12, 26),
    speedY: randomRange(0.4, 1.0),
    speedX: randomRange(0.1, 0.5),
    rotation: randomRange(0, Math.PI * 2),
    rotationSpeed: randomRange(-0.025, 0.025),
    opacity: randomRange(0.55, 0.92),
    color: randomColor(),
    phase: randomRange(0, Math.PI * 2),
    amplitude: randomRange(1.5, 3.5),
  };
}

function updateLeaf(leaf: Leaf, width: number, height: number, time: number): void {
  leaf.y += leaf.speedY;
  leaf.x += leaf.speedX + Math.sin(time * 0.5 + leaf.phase) * leaf.amplitude * 0.08;
  leaf.rotation += leaf.rotationSpeed;

  if (leaf.y > height + 40 || leaf.x > width + 40) {
    const next = createLeaf(width, height, false);
    Object.assign(leaf, next);
  }
}

function drawLeaf(ctx: CanvasRenderingContext2D, leaf: Leaf): void {
  ctx.save();
  ctx.globalAlpha = leaf.opacity;
  ctx.translate(leaf.x, leaf.y);
  ctx.rotate(leaf.rotation);
  ctx.scale(leaf.size / 20, leaf.size / 20);

  // Body daun
  ctx.beginPath();
  ctx.moveTo(0, -10);
  ctx.bezierCurveTo(8, -8, 10, 0, 0, 10);
  ctx.bezierCurveTo(-10, 0, -8, -8, 0, -10);
  ctx.closePath();
  ctx.fillStyle = leaf.color;
  ctx.fill();

  // Tulang tengah
  ctx.beginPath();
  ctx.moveTo(0, -9);
  ctx.lineTo(0, 9);
  ctx.strokeStyle = 'rgba(0,0,0,0.18)';
  ctx.lineWidth = 0.6;
  ctx.stroke();

  ctx.restore();
}

export default function FallingLeaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set ukuran canvas ke pixel nyata (bukan CSS size)
    const setSize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      // Pastikan style juga sinkron
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
    };
    setSize();
    window.addEventListener('resize', setSize);

    const isMobile = window.innerWidth < 768;
    const maxLeaves = isMobile ? 10 : 22;

    const leaves: Leaf[] = Array.from({ length: maxLeaves }, () =>
      createLeaf(canvas.width, canvas.height, true)
    );

    let animId: number;
    let time = 0;
    let running = true;

    const animate = () => {
      if (!running) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.016;

      for (const leaf of leaves) {
        updateLeaf(leaf, canvas.width, canvas.height, time);
        drawLeaf(ctx, leaf);
      }

      animId = requestAnimationFrame(animate);
    };

    // Mulai setelah satu frame agar DOM sudah stabil
    animId = requestAnimationFrame(animate);

    return () => {
      running = false;
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', setSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9,           // di atas konten biasa, di bawah modal/nav
        display: 'block',
        // Isolasi dari CSS transition global di globals.css
        transition: 'none',
        animation: 'none',
        // Hint GPU untuk performa canvas
        willChange: 'contents',
      }}
    />
  );
}
