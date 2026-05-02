'use client';

import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    { num: "I", title: "Katalog Alkimia", desc: "Sistem inventaris ramuan dengan dashboard interaktif.", techs: ["Next.js", "Tailwind"] },
    { num: "II", title: "Peta Kerajaan", desc: "Aplikasi pemetaan wilayah real-time menggunakan data geospasial.", techs: ["React", "Leaflet"] },
    { num: "III", title: "Buku Besar", desc: "Pencatatan transaksi pedagang menggunakan arsitektur aman.", techs: ["Node.js", "Postgres"] }
  ];

  return (
    <section id="proyek" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-cinzel-deco text-4xl text-ink dark:text-parchment">Gulungan Misi</h2>
        <div className="text-gold mt-4 text-2xl">❧</div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="relative group mt-4"
          >
            <div className="bg-parchment-dark dark:bg-ember border border-gold/40 dark:border-gold/30 rounded-lg overflow-visible shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-full flex flex-col">
              
              {/* Wax Seal */}
              <div className="absolute -top-4 -right-4 rounded-full w-12 h-12 bg-crimson text-parchment text-sm font-cinzel flex items-center justify-center shadow-md border-2 border-crimson-light z-10">
                {proj.num}
              </div>

              {/* Image Placeholder */}
              <div className="w-full h-40 bg-stone/20 dark:bg-parchment/10 rounded-t-lg flex items-center justify-center border-b border-gold/20">
                <span className="text-stone dark:text-parchment/60 font-garamond italic">[ Gambar Bukti ]</span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-cinzel text-ink dark:text-parchment text-xl mb-3">{proj.title}</h3>
                <p className="font-garamond text-stone dark:text-parchment/60 mb-6 line-clamp-2 flex-grow">{proj.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {proj.techs.map((tech, tIdx) => (
                    <span key={tIdx} className="bg-forest/10 dark:bg-parchment/10 text-forest dark:text-parchment border border-forest/30 dark:border-parchment/30 px-3 py-1 rounded-full text-xs font-garamond">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  <button className="flex-1 border border-crimson text-crimson font-cinzel py-2 text-sm hover:bg-crimson hover:text-parchment transition-colors">
                    Demo ↗
                  </button>
                  <button className="flex-1 border border-crimson text-crimson font-cinzel py-2 text-sm hover:bg-crimson hover:text-parchment transition-colors">
                    GitHub ↗
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
