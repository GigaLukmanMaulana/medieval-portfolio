'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="tentang" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-48 h-48 rounded-full bg-stone/30 dark:bg-parchment/10 border-4 border-gold flex items-center justify-center mb-8 overflow-hidden relative shadow-xl">
            <span className="font-cinzel text-leather dark:text-parchment opacity-50">Gambar</span>
          </div>
          
          <div className="flex gap-4 w-full justify-center">
            <div className="bg-parchment-dark dark:bg-ember border border-gold/40 rounded-lg p-4 text-center w-28">
              <div className="font-cinzel text-crimson text-2xl font-bold">12</div>
              <div className="font-garamond text-sm text-leather dark:text-parchment font-bold">Proyek</div>
            </div>
            <div className="bg-parchment-dark dark:bg-ember border border-gold/40 rounded-lg p-4 text-center w-28">
              <div className="font-cinzel text-crimson text-2xl font-bold">2</div>
              <div className="font-garamond text-sm text-leather dark:text-parchment font-bold">Tahun</div>
            </div>
            <div className="bg-parchment-dark dark:bg-ember border border-gold/40 rounded-lg p-4 text-center w-28">
              <div className="font-cinzel text-crimson text-2xl font-bold">8</div>
              <div className="font-garamond text-sm text-leather dark:text-parchment font-bold">Klien</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="font-cinzel text-gold tracking-widest text-sm mb-4">⚜ TENTANG SAYA ⚜</div>
          <h2 className="font-cinzel-deco text-4xl text-leather dark:text-parchment mb-6">Sang Penjelajah Digital</h2>
          
          <div className="font-garamond text-lg leading-relaxed text-leather/90 dark:text-parchment/90 space-y-6">
            <p className="drop-cap">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
