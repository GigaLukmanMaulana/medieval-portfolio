'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation?: number;
  rotationSpeed?: number;
  opacity: number;
  baseOpacity: number; // opacity asli
  color: string;
  phase?: number;
  amplitude?: number;
}

const LEAF_COLORS = ['#4a7c59', '#5a9e6f', '#3d6b4a', '#6ab187', '#2d5a3d', '#7bc47f', '#4e8b5f', '#38724a'];

function randomRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function createLeaf(width: number, height: number, initial: boolean): Particle {
  const op = randomRange(0.55, 0.92);
  return {
    x: initial ? randomRange(0, width) : randomRange(-50, width * 0.3),
    y: initial ? randomRange(-200, height) : randomRange(-200, -20),
    size: randomRange(12, 26),
    speedY: randomRange(0.4, 1.0),
    speedX: randomRange(0.1, 0.5),
    rotation: randomRange(0, Math.PI * 2),
    rotationSpeed: randomRange(-0.025, 0.025),
    opacity: initial ? op : 0, // mulai dari 0 jika baru spawn
    baseOpacity: op,
    color: LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)],
    phase: randomRange(0, Math.PI * 2),
    amplitude: randomRange(1.5, 3.5),
  };
}

function createRainDrop(width: number, height: number, initial: boolean): Particle {
  const op = randomRange(0.4, 0.9);
  return {
    x: randomRange(-200, width + 200),
    y: initial ? randomRange(-100, height) : randomRange(-200, -20),
    size: randomRange(20, 45), 
    speedY: randomRange(15, 28), 
    speedX: randomRange(2, 6), 
    opacity: initial ? op : 0, // mulai dari 0
    baseOpacity: op,
    color: 'rgba(210, 230, 255, 0.9)', 
  };
}

function updateParticle(p: Particle, width: number, height: number, time: number, type: 'leaf' | 'rain', isActive: boolean): void {
  p.y += p.speedY;
  
  if (type === 'leaf') {
    p.x += p.speedX + Math.sin(time * 0.5 + (p.phase || 0)) * (p.amplitude || 2) * 0.08;
    if (p.rotation !== undefined && p.rotationSpeed !== undefined) {
      p.rotation += p.rotationSpeed;
    }
  } else {
    p.x += p.speedX;
  }

  // Fade in / Fade out super lambat (4-6 detik)
  if (isActive) {
    if (p.opacity < p.baseOpacity) {
      p.opacity += (type === 'rain' ? 0.01 : 0.005); // Hujan datang lebih cepat dari daun
    }
    if (p.opacity > p.baseOpacity) p.opacity = p.baseOpacity;
  } else {
    // Reda perlahan
    p.opacity -= (type === 'rain' ? 0.003 : 0.01); // Hujan reda SANGAT lambat, daun cepat hilang saat hujan
    if (p.opacity < 0) p.opacity = 0;
  }

  if (p.y > height + 40 || p.x > width + 100 || p.x < -200) {
    if (isActive) { // Hanya respawn jika cuaca ini masih aktif
      const next = type === 'leaf' ? createLeaf(width, height, false) : createRainDrop(width, height, false);
      Object.assign(p, next);
    } else {
      // Jika tidak aktif, biarkan menghilang di bawah (nggak direset ke atas)
      // supaya hujannya benar-benar terasa "berhenti turun"
    }
  }
}

function drawParticle(ctx: CanvasRenderingContext2D, p: Particle, type: 'leaf' | 'rain'): void {
  if (p.opacity <= 0.01) return; // jangan gambar yang tidak terlihat
  
  ctx.save();
  ctx.globalAlpha = p.opacity;

  if (type === 'leaf') {
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation || 0);
    ctx.scale(p.size / 20, p.size / 20);

    ctx.beginPath();
    ctx.moveTo(0, -10);
    ctx.bezierCurveTo(8, -8, 10, 0, 0, 10);
    ctx.bezierCurveTo(-10, 0, -8, -8, 0, -10);
    ctx.closePath();
    ctx.fillStyle = p.color;
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(0, -9);
    ctx.lineTo(0, 9);
    ctx.strokeStyle = 'rgba(0,0,0,0.18)';
    ctx.lineWidth = 0.6;
    ctx.stroke();
  } else {
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    ctx.lineTo(p.x - p.speedX * 2, p.y - p.size);
    ctx.strokeStyle = p.color;
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.stroke();
  }
  ctx.restore();
}

export default function FallingLeaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Gunakan ref agar animasi tidak perlu direstart saat cuaca ganti
  const weatherModeRef = useRef<'clear' | 'rain'>('clear');


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setSize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
    };
    setSize();
    window.addEventListener('resize', setSize);

    const isMobile = window.innerWidth < 768;
    
    // Buat dua pasukan partikel sekaligus (hujan dikosongkan karena selalu cerah)
    const leaves: Particle[] = Array.from({ length: isMobile ? 10 : 22 }, () => createLeaf(canvas.width, canvas.height, true));
    const rainDrops: Particle[] = [];

    let animId: number;
    let time = 0;
    let running = true;

    const animate = () => {
      if (!running) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.016;

      const currentMode = weatherModeRef.current;

      // Update & Draw Daun
      for (const leaf of leaves) {
        updateParticle(leaf, canvas.width, canvas.height, time, 'leaf', currentMode === 'clear');
        drawParticle(ctx, leaf, 'leaf');
      }

      // Update & Draw Hujan
      for (const drop of rainDrops) {
        updateParticle(drop, canvas.width, canvas.height, time, 'rain', currentMode === 'rain');
        drawParticle(ctx, drop, 'rain');
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      running = false;
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', setSize);
    };
  }, []); // Cukup jalankan canvas sekali

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9,
          display: 'block',
          transition: 'none',
          animation: 'none',
          willChange: 'contents',
        }}
      />
    </>
  );
}
