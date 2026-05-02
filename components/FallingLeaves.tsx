'use client';

import { useEffect, useRef } from 'react';

export default function FallingLeaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const leaves: any[] = [];
    
    const colors = ['#c0392b', '#e67e22', '#d4ac0d', '#a04000', '#8b1a1a'];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const maxLeaves = window.innerWidth > 768 ? 12 : 7;

    const createLeaf = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 12 + 12,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.04,
      speedY: Math.random() * 0.5 + 0.4,
      phase: Math.random() * Math.PI * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.35 + 0.5
    });

    for (let i = 0; i < maxLeaves; i++) {
      leaves.push(createLeaf());
    }

    const drawLeaf = (leaf: any) => {
      ctx.save();
      ctx.translate(leaf.x, leaf.y);
      ctx.rotate(leaf.rotation);
      ctx.globalAlpha = leaf.opacity;
      ctx.fillStyle = leaf.color;

      ctx.beginPath();
      // Simple organic leaf shape
      ctx.moveTo(0, -leaf.size / 2);
      ctx.bezierCurveTo(leaf.size / 2, -leaf.size / 4, leaf.size / 2, leaf.size / 4, 0, leaf.size / 2);
      ctx.bezierCurveTo(-leaf.size / 2, leaf.size / 4, -leaf.size / 2, -leaf.size / 4, 0, -leaf.size / 2);
      ctx.fill();
      ctx.restore();
    };

    let time = 0;
    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      leaves.forEach(leaf => {
        leaf.y += leaf.speedY;
        leaf.x += Math.sin(time + leaf.phase) * 1.5;
        leaf.rotation += leaf.rotationSpeed;

        if (leaf.y > canvas.height + 30) {
          leaf.y = -30;
          leaf.x = Math.random() * canvas.width;
        }

        drawLeaf(leaf);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
