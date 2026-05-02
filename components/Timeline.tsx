'use client';

import { motion } from 'framer-motion';

export default function Timeline() {
  const events = [
    { year: "2024", role: "Freelance Developer", org: "Independent" },
    { year: "2023", role: "Junior Developer", org: "Perusahaan ABC" },
    { year: "2022", role: "Mahasiswa Aktif", org: "Universitas XYZ" },
  ];

  return (
    <section id="perjalanan" className="py-24 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-cinzel-deco text-4xl text-leather dark:text-parchment">Kronik Perjalanan</h2>
        <div className="text-gold mt-4 text-2xl">❧</div>
      </div>

      <div className="relative">
        {/* Center line desktop / Left line mobile */}
        <div className="absolute left-6 md:left-1/2 md:-ml-px top-0 bottom-0 w-0.5 bg-gold/50"></div>

        <div className="space-y-12">
          {events.map((event, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex md:justify-between items-center ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                {/* Mobile spacer to align with line */}
                <div className="hidden md:block md:w-5/12"></div>
                
                {/* Year Badge */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2 z-10 ml-1.5 md:ml-0">
                  <div className="rounded-full bg-gold text-leather font-cinzel font-bold px-4 py-1 shadow-md border-2 border-parchment dark:border-obsidian text-sm">
                    {event.year}
                  </div>
                </div>

                {/* Card */}
                <div className="w-full md:w-5/12 pl-16 md:pl-0">
                  <div className={`bg-parchment-dark dark:bg-ember border border-gold/40 dark:border-gold/30 rounded-lg p-6 shadow-md ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="font-cinzel text-crimson text-xl mb-2">{event.role}</h3>
                    <div className="font-garamond text-leather/80 dark:text-parchment/80 text-lg italic">{event.org}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
