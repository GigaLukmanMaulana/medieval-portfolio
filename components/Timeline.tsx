'use client';

import { motion } from 'framer-motion';

export default function Timeline() {
  const events = [
    {
      year: "2026",
      semester: "Semester 6 (Sekarang)",
      role: "UI/UX Designer, Backend & Machine Learning Specialist",
      org: "Pengembangan Integrasi Sistem Cerdas",
      description: "Fokus pada perancangan UI/UX yang intuitif, arsitektur backend yang tangguh, serta pengembangan model Machine Learning dan integrasi IoT untuk menghadirkan solusi teknologi cerdas generasi baru.",
      skills: ["UI/UX Design", "Backend Development", "Machine Learning", "IoT System"]
    },
    {
      year: "2025",
      semester: "Semester 5",
      role: "Web & Mobile Developer",
      org: "Sistem Tombol Darurat Pemadam Kebakaran (Damkar)",
      description: "Merancang dan mengembangkan aplikasi mobile serta dashboard monitoring web untuk Damkar, mengintegrasikan fitur tombol darurat instan guna mempercepat respons penanggulangan kebakaran.",
      skills: ["React Native", "Web Dashboard", "Realtime DB", "Emergency System"]
    },
    {
      year: "2025",
      semester: "Semester 4",
      role: "External Project Developer",
      org: "PT TAPPP",
      description: "Terjun ke proyek eksternal skala industri bersama PT TAPPP untuk mendapatkan pengalaman langsung dalam kolaborasi tim profesional dan perancangan arsitektur perangkat lunak komersial.",
      skills: ["External Project", "PT TAPPP", "Software Architecture", "Team Collaboration"]
    },
    {
      year: "2024",
      semester: "Semester 3",
      role: "Frontend Developer (Client UMKM)",
      org: "Platform Jasa Pesanan Seni Tari",
      description: "Mendigitalisasi UMKM lokal dengan membangun platform pemesanan jasa seni tari tradisional secara online, merancang antarmuka pengguna yang menarik, responsif, dan mudah digunakan.",
      skills: ["Frontend Client", "Next.js / React", "Tailwind CSS", "UMKM Digitalization"]
    },
    {
      year: "2024",
      semester: "Semester 2",
      role: "IoT & Web Developer",
      org: "Sistem Pengukur Tinggi Badan & Deteksi Stunting",
      description: "Mengembangkan perangkat keras IoT pengukur tinggi badan otomatis terintegrasi dengan platform web monitoring untuk menganalisis dan mendeteksi risiko stunting pada anak.",
      skills: ["IoT Device", "Hardware Integration", "Web Monitoring", "Stunting Analysis"]
    },
    {
      year: "2023",
      semester: "Semester 1",
      role: "Awal Perjalanan Akademik",
      org: "Teknologi Rekayasa Perangkat Lunak",
      description: "Memulai studi formal di bidang Rekayasa Perangkat Lunak, membangun dasar-dasar logika, algoritma, pemrograman terstruktur, serta fondasi rekayasa sistem.",
      skills: ["Algoritma", "Logika Pemrograman", "Dasar Rekayasa Perangkat Lunak"]
    }
  ];

  return (
    <section id="perjalanan" className="py-12 px-4 bg-parchment/10 dark:bg-obsidian/30">
      <div className="max-w-5xl mx-auto manuscript-frame">
        <div className="text-center mb-12">
          <h2 className="font-cinzel-deco text-4xl text-leather dark:text-parchment">Kronik Perjalanan</h2>
          <div className="text-gold mt-4 text-2xl">❧</div>
          <p className="font-garamond text-leather/70 dark:text-parchment/70 italic max-w-xl mx-auto mt-2">
            Catatan tonggak sejarah akademis dan profesional dari tahun 2023 hingga saat ini.
          </p>
        </div>

        <div className="relative">
          {/* Center line desktop / Left line mobile */}
          <div className="absolute left-6 md:left-1/2 md:-ml-px top-0 bottom-0 w-0.5 bg-gold/50"></div>

          <div className="space-y-10">
            {events.map((event, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`relative flex md:justify-between items-center ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                >
                  {/* Mobile spacer to align with line */}
                  <div className="hidden md:block md:w-5/12"></div>
                  
                  {/* Year & Semester Badge */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2 z-10 ml-1.5 md:ml-0">
                    <div className="flex flex-col items-center justify-center rounded-full bg-gold text-leather font-cinzel font-bold w-12 h-12 shadow-lg border-2 border-parchment dark:border-obsidian text-xs leading-none">
                      <span className="text-[10px] opacity-80">{event.year}</span>
                      <span className="font-extrabold text-[12px]">S{event.semester.match(/\d+/)?.[0]}</span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="w-full md:w-5/12 pl-16 md:pl-0">
                    <div className={`bg-parchment-dark dark:bg-ember border border-gold/40 dark:border-gold/30 rounded-xl p-5 shadow-lg hover:shadow-gold/10 transition-shadow ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                      <span className="inline-block text-xs font-cinzel font-semibold text-gold mb-1">
                        {event.semester}
                      </span>
                      <h3 className="font-cinzel text-crimson dark:text-gold text-lg font-bold mb-1">
                        {event.role}
                      </h3>
                      <div className="font-garamond text-leather/95 dark:text-parchment/90 text-sm font-semibold mb-3">
                        {event.org}
                      </div>
                      <p className="font-garamond text-leather/80 dark:text-parchment/80 text-sm leading-relaxed">
                        {event.description}
                      </p>
                      
                      {/* Skills/Tags */}
                      <div className={`mt-4 flex flex-wrap gap-1.5 justify-start ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                        {event.skills.map((skill, sIdx) => (
                          <span 
                            key={sIdx} 
                            className="text-[11px] font-garamond font-medium border border-gold/35 bg-gold/10 text-leather dark:text-parchment px-2 py-0.5 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
