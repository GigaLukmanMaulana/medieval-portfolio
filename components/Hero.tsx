'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: ["Penjelajah Kode...", "Pembuat Karya Digital...", "Sang Pengembang..."],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      cursorChar: '🖋',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const name = "SANG PENGEMBARA";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 text-center">
      <div className="z-10 flex flex-col items-center">
        <div className="text-gold opacity-60 text-2xl mb-6 tracking-widest">
          ✦ ⚜ ✦
        </div>
        
        <motion.h1 
          className="font-cinzel-deco text-5xl md:text-7xl lg:text-8xl text-leather dark:text-parchment font-bold tracking-wider text-center mb-6 drop-shadow-sm flex flex-wrap justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {name.split('').map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        <div className="font-cinzel text-xl md:text-2xl text-leather/80 dark:text-parchment/80 italic mb-12 h-8">
          <span ref={typedRef}></span>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 mt-4">
          <a 
            href="#proyek" 
            onClick={(e) => handleScrollTo(e, '#proyek')}
            className="bg-crimson text-parchment border-2 border-gold hover:bg-crimson-light font-cinzel px-8 py-3 rounded transition-all"
          >
            Lihat Proyek
          </a>
          <a 
            href="#" 
            className="bg-transparent text-leather dark:text-parchment border-2 border-leather dark:border-parchment hover:bg-leather hover:text-parchment dark:hover:bg-parchment dark:hover:text-obsidian font-cinzel px-8 py-3 rounded transition-all"
          >
            Unduh CV
          </a>
        </div>
      </div>
    </section>
  );
}
