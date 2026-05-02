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
    x: initial ? randomRange(-50, width) : randomRange(-50, width * 0.3),
    y: initial ? randomRange(-200, height) : randomRange(-200, -20),
    size: randomRange(12, 26),
    speedY: randomRange(0.3, 0.8),
    speedX: randomRange(0.1, 0.4),
    rotation: randomRange(0, Math.PI * 2),
    rotationSpeed: randomRange(-0.02, 0.02),
    opacity: randomRange(0.5, 0.9),
    color: randomColor(),
    phase: randomRange(0, Math.PI * 2),
    amplitude: randomRange(1.5, 3.5),
  };
}

function updateLeaf(leaf: Leaf, width: number, height: number, time: number): void {
  leaf.y += leaf.speedY;
  leaf.x += leaf.speedX + Math.sin(time * 0.5 + leaf.phase) * leaf.amplitude * 0.08;
  leaf.rotation += leaf.rotationSpeed;

  if (leaf.y > height + 30 || leaf.x > width + 30) {
    const newLeaf = createLeaf(width, height, false);
    leaf.x = newLeaf.x;
    leaf.y = newLeaf.y;
    leaf.size = newLeaf.size;
    leaf.speedY = newLeaf.speedY;
    leaf.speedX = newLeaf.speedX;
    leaf.rotation = newLeaf.rotation;
    leaf.rotationSpeed = newLeaf.rotationSpeed;
    leaf.opacity = newLeaf.opacity;
    leaf.color = newLeaf.color;
    leaf.phase = newLeaf.phase;
    leaf.amplitude = newLeaf.amplitude;
  }
}

function drawLeaf(ctx: CanvasRenderingContext2D, leaf: Leaf): void {
  ctx.save();
  ctx.translate(leaf.x, leaf.y);
  ctx.rotate(leaf.rotation);
  ctx.scale(leaf.size / 20, leaf.size / 20);

  // Leaf body
  ctx.beginPath();
  ctx.moveTo(0, -10);
  ctx.bezierCurveTo(8, -8, 10, 0, 0, 10);
  ctx.bezierCurveTo(-10, 0, -8, -8, 0, -10);
  ctx.closePath();
  ctx.fillStyle = leaf.color;
  ctx.globalAlpha = leaf.opacity;
  ctx.fill();

  // Center vein
  ctx.beginPath();
  ctx.moveTo(0, -9);
  ctx.lineTo(0, 9);
  ctx.strokeStyle = 'rgba(0,0,0,0.15)';
  ctx.lineWidth = 0.5;
  ctx.stroke();

  ctx.restore();
}

export default function FallingLeaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener('resize', setSize);

    const isMobile = window.innerWidth < 768;
    const maxLeaves = isMobile ? 8 : 18;
    const leaves: Leaf[] = Array.from({ length: maxLeaves }, () =>
      createLeaf(canvas.width, canvas.height, true)
    );

    let animId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.016;

      leaves.forEach((leaf) => {
        updateLeaf(leaf, canvas.width, canvas.height, time);
        drawLeaf(ctx, leaf);
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', setSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1,
        display: 'block',
      }}
    />
  );
}
