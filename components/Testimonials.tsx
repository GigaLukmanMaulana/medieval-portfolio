'use client';

import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    { 
      name: "Dr. Ahmad Fauzi", 
      role: "Dosen Pembimbing Akademik", 
      quote: "Sistem IoT pengukur tinggi badan dan deteksi stunting yang dikembangkan sangat inovatif. Integrasi antara perangkat keras dan platform web berjalan dengan sangat baik dan aplikatif." 
    },
    { 
      name: "Siti Rahma", 
      role: "Pemilik Sanggar Tari (Klien UMKM)", 
      quote: "Sangat membantu digitalisasi sanggar kami! Platform pemesanan tari yang dibuat sangat intuitif, responsif, dan memudahkan klien kami melakukan reservasi pertunjukan." 
    },
    { 
      name: "Budi Santoso", 
      role: "Project Manager PT TAPPP", 
      quote: "Dedikasi dan keahlian teknis selama proyek eksternal sangat luar biasa. Kemampuan memahami arsitektur software dan kolaborasi timnya memberikan kontribusi besar bagi kesuksesan proyek." 
    }
  ];

  return (
    <section id="testimoni" className="py-12 px-4 overflow-hidden bg-parchment/5 dark:bg-obsidian/20">
      <div className="max-w-7xl mx-auto manuscript-frame">
        <div className="text-center mb-12">
          <h2 className="font-cinzel-deco text-4xl text-leather dark:text-parchment">Surat Pujian</h2>
          <div className="text-gold mt-4 text-2xl">❧</div>
          <p className="font-garamond text-leather/70 dark:text-parchment/70 italic max-w-xl mx-auto mt-2">
            Apresiasi dan umpan balik dari para akademisi, klien UMKM, dan mitra industri.
          </p>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-parchment-dark dark:bg-ember border border-gold/40 dark:border-gold/30 rounded-xl p-6 min-w-[300px] md:min-w-0 snap-center flex flex-col justify-between shadow-md hover:shadow-gold/5 transition-all"
            >
              <div>
                <div className="font-cinzel text-gold text-5xl leading-none mb-2">❝</div>
                <p className="font-garamond italic text-leather/85 dark:text-parchment/85 text-base mb-6 leading-relaxed">
                  {testi.quote}
                </p>
              </div>
              
              <div>
                <div className="w-full h-px bg-gold/20 mb-4"></div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/15 text-gold flex items-center justify-center font-cinzel font-bold border border-gold/40">
                    {testi.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-cinzel text-sm text-leather dark:text-parchment font-bold">{testi.name}</div>
                    <div className="font-garamond text-xs text-leather/70 dark:text-parchment/60 font-semibold">{testi.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
