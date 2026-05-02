'use client';

import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    { name: "Raja Arthur", role: "Penguasa Camelot", quote: "Penyihir kode ini berhasil membangun sistem pertahanan kastil dalam waktu singkat. Sangat direkomendasikan!" },
    { name: "Merlin", role: "Arsitek Utama", quote: "Logikanya tajam bagaikan pedang Excalibur. Struktur kodenya indah seperti puisi kuno." },
    { name: "Sir Lancelot", role: "Ksatria Terhormat", quote: "Kecepatannya dalam menyelesaikan fitur baru sangat luar biasa. Rekan seperjuangan yang hebat." }
  ];

  return (
    <section id="testimoni" className="py-24 px-4 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="font-cinzel-deco text-4xl text-ink dark:text-parchment">Surat Pujian</h2>
        <div className="text-gold mt-4 text-2xl">❧</div>
      </div>

      <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
        {testimonials.map((testi, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-parchment-dark dark:bg-ember border border-gold/40 dark:border-gold/30 rounded-lg p-6 min-w-[300px] md:min-w-0 snap-center flex flex-col justify-between"
          >
            <div>
              <div className="font-cinzel text-gold text-5xl leading-none mb-2">❝</div>
              <p className="font-garamond italic text-stone dark:text-parchment/60 text-lg mb-6 leading-relaxed">
                "{testi.quote}"
              </p>
            </div>
            
            <div>
              <div className="w-full h-px bg-gold/30 mb-4"></div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/30 flex items-center justify-center font-cinzel text-ink dark:text-parchment font-bold border border-gold/50">
                  {testi.name.charAt(0)}
                </div>
                <div>
                  <div className="font-cinzel text-ink dark:text-parchment">{testi.name}</div>
                  <div className="font-garamond text-sm text-stone dark:text-parchment/60">{testi.role}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
