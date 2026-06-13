'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="tentang" className="py-8 px-4">
      <div className="max-w-7xl mx-auto manuscript-frame">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-48 h-48 rounded-full border-4 border-gold flex items-center justify-center mb-8 overflow-hidden relative shadow-xl bg-parchment-dark dark:bg-ember">
              <Image 
                src="/profile.jpeg" 
                alt="Giga Lukman Maulana" 
                width={192} 
                height={192} 
                className="w-full h-full object-cover"
                priority
              />
            </div>
            
            <div className="flex gap-4 w-full justify-center">
              <div className="bg-parchment-dark dark:bg-ember border border-gold/40 rounded-lg p-4 text-center w-28">
                <div className="font-cinzel text-crimson text-2xl font-bold">6</div>
                <div className="font-garamond text-sm text-leather dark:text-parchment font-bold">Proyek</div>
              </div>
              <div className="bg-parchment-dark dark:bg-ember border border-gold/40 rounded-lg p-4 text-center w-28">
                <div className="font-cinzel text-crimson text-2xl font-bold">3</div>
                <div className="font-garamond text-sm text-leather dark:text-parchment font-bold">Tahun</div>
              </div>
              <div className="bg-parchment-dark dark:bg-ember border border-gold/40 rounded-lg p-4 text-center w-28">
                <div className="font-cinzel text-crimson text-2xl font-bold">6</div>
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
            
            <div className="font-garamond text-lg leading-relaxed text-leather/90 dark:text-parchment/90 space-y-6">
              <p className="drop-cap">
                Saya adalah mahasiswa Teknologi Rekayasa Perangkat Lunak (D4) yang berfokus pada pembangunan solusi digital terintegrasi. Dengan ketertarikan yang mendalam di bidang kecerdasan buatan (AI) serta pengembangan Web dan Mobile, saya berdedikasi untuk menciptakan aplikasi modern yang cerdas, dinamis, dan intuitif.
              </p>
              <p>
                Selain itu, saya memiliki minat besar dalam menjembatani perangkat keras (IoT) dengan ekosistem perangkat lunak yang efisien. Melalui keahlian dalam merancang arsitektur web, aplikasi mobile, dan integrasi kecerdasan buatan, saya berkomitmen untuk menghadirkan solusi teknologi mutakhir yang dapat memecahkan masalah secara praktis dan berdampak luas.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
