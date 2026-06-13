'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GithubLink {
  label: string;
  url: string;
}

interface Project {
  num: string;
  title: string;
  desc: string;
  techs: string[];
  github: string | GithubLink[] | null;
  images: string[];
}

function ProjectCard({ proj }: { proj: Project }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [imageError, setImageError] = useState(false);

  const images = proj.images || [];
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    setImageError(false);
  }, [currentIdx]);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-parchment-dark dark:bg-ember border border-gold/40 dark:border-gold/30 rounded-lg overflow-visible shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 h-full flex flex-col group/card relative">

      {/* Wax Seal */}
      <div className="absolute -top-4 -right-4 rounded-full w-10 h-10 bg-crimson text-parchment text-sm font-cinzel flex items-center justify-center shadow-md border-2 border-crimson-light z-20">
        {proj.num}
      </div>

      {/* Image Bukti Tampilan / Carousel / Lock Screen */}
      {proj.github === null ? (
        <div className="w-full h-48 bg-leather dark:bg-black/60 rounded-t-lg relative border-b border-gold/30 flex flex-col items-center justify-center p-4 overflow-hidden">
          {/* Metal/Gold grid lines or chains pattern */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(201,162,39,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(201,162,39,0.3)_1px,transparent_1px)] bg-[size:16px_16px]"></div>

          {/* Padlock Icon */}
          <div className="w-14 h-14 rounded-full border border-gold/50 flex items-center justify-center bg-ember text-gold shadow-md z-10 animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>

          {/* Locked Text */}
          <div className="mt-3 font-cinzel text-[10px] text-gold/80 tracking-widest text-center z-10">
            SEALED ARCHIVE
          </div>
          <div className="font-garamond text-[9px] text-parchment/60 italic text-center z-10">
            Protected by Merchant Pact (NDA)
          </div>
        </div>
      ) : (
        <div className="w-full h-48 bg-stone/25 dark:bg-parchment/10 rounded-t-lg overflow-hidden relative border-b border-gold/20 flex items-center justify-center group/slider">
          {images.length > 0 && !imageError ? (
            <>
              <AnimatePresence mode="wait">
                <div key={images[currentIdx]} className="absolute inset-0 w-full h-full">
                  {/* Background blurred image for filling portrait empty spaces */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={images[currentIdx]}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-md opacity-35 z-0"
                  />
                  {/* Main front contained image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <motion.img
                    src={images[currentIdx]}
                    alt={`Bukti Tampilan ${proj.title} ${currentIdx + 1}`}
                    className="w-full h-full object-contain z-10 relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onError={() => {
                      setImageError(true);
                    }}
                  />
                </div>
              </AnimatePresence>

              {/* Slider Controls */}
              {hasMultipleImages && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-leather/60 text-parchment w-7 h-7 rounded-full flex items-center justify-center hover:bg-leather text-xs transition-opacity opacity-0 group-hover/slider:opacity-100 cursor-pointer border border-gold/20"
                    aria-label="Previous image"
                  >
                    ◀
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-leather/60 text-parchment w-7 h-7 rounded-full flex items-center justify-center hover:bg-leather text-xs transition-opacity opacity-0 group-hover/slider:opacity-100 cursor-pointer border border-gold/20"
                    aria-label="Next image"
                  >
                    ▶
                  </button>

                  {/* Dot Indicators */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex gap-1 bg-leather/45 px-2 py-0.5 rounded-full">
                    {images.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setCurrentIdx(dotIdx);
                        }}
                        className={`w-1.5 h-1.5 rounded-full transition-colors cursor-pointer ${dotIdx === currentIdx ? 'bg-gold' : 'bg-parchment/50 hover:bg-parchment'
                          }`}
                        aria-label={`Go to image ${dotIdx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Current Image Indicator Text */}
                  <div className="absolute top-2 left-2 z-20 bg-leather/70 text-parchment text-[9px] font-cinzel px-2 py-0.5 rounded border border-gold/20">
                    {currentIdx + 1} / {images.length}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center p-4 text-center bg-stone/20 dark:bg-parchment/5">
              <span className="text-stone/60 dark:text-parchment/40 font-garamond italic text-sm">
                📜 Menunggu Gulungan Bukti...
              </span>
            </div>
          )}
        </div>
      )}

      {/* Card Body */}
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="font-cinzel text-leather dark:text-parchment text-lg mb-2 font-bold">{proj.title}</h3>
        <p className="font-garamond text-stone dark:text-parchment/60 mb-4 flex-grow text-xs leading-relaxed">{proj.desc}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {proj.techs.map((tech, tIdx) => (
            <span key={tIdx} className="bg-forest text-parchment dark:bg-parchment/10 dark:text-parchment border border-forest/30 dark:border-parchment/30 text-[10px] px-2 py-1 rounded font-garamond">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          {proj.github ? (
            Array.isArray(proj.github) ? (
              <div className="flex gap-2">
                {proj.github.map((link, lIdx) => (
                  <a
                    key={lIdx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-crimson text-crimson font-cinzel py-2 text-[10px] hover:bg-crimson hover:text-parchment transition-colors rounded font-bold"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            ) : (
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center border border-crimson text-crimson font-cinzel py-2 text-xs hover:bg-crimson hover:text-parchment transition-colors rounded font-bold"
              >
                Gulungan GitHub ↗
              </a>
            )
          ) : (
            <span
              className="block text-center border border-stone/40 text-stone/60 dark:border-parchment/30 dark:text-parchment/50 font-cinzel py-2 text-xs rounded select-none bg-stone/5 dark:bg-parchment/5 cursor-not-allowed"
            >
              Misi Privat (NDA) 🔒
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [showPrivate, setShowPrivate] = useState(false);

  const projects: Project[] = [
    {
      num: "I",
      title: "Gembala Pintar (SmartBovine)",
      desc: "Sistem pemantauan dan pelacakan hewan ternak berbasis IoT dan AI secara real-time. Membantu memantau lokasi serta kesehatan ternak secara presisi.",
      techs: ["Flutter", "Laravel", "Python", "IoT"],
      github: "https://github.com/GigaLukmanMaulana/frontend-smartbovine",
      images: [
        "/smartbovine-dashboard.jpg",
        "/smarbovine- loginpage.jpg",
        "/smartbovine- sidebar.jpg",
        "/smartbovine-map tracking.jpg",
        "/smartbovine- kelola sapi.jpg",
        "/smartbovine-profil sapi.jpg",
        "/smartbovine- kelola perangkat.jpg",
        "/smartbovine- kelola nomor dokter.jpg",
        "/smartbovine- riwayat&laporan.jpg"
      ]
    },
    {
      num: "II",
      title: "Pemberantas Api (Damkar App)",
      desc: "Sistem informasi pemadam kebakaran terintegrasi. Terdiri dari Portal Web untuk manajemen laporan & peta rawan, serta Aplikasi Mobile untuk pelacakan status laporan & riwayat tugas petugas.",
      techs: ["Node.js", "Express", "MySQL", "Flutter", "Google Maps API"],
      github: [
        { label: "GitHub Web", url: "https://github.com/jamilah1504/Web-Damkar" },
        { label: "GitHub Mobile", url: "https://github.com/jamilah1504/Mobile-Damkar" }
      ],
      images: [
        "/damkar- manajemen laporan masuk.png",
        "/damkar- manajemen peta lokasi rawan.png",
        "/damkar-detail tugas.png",
        "/damkar-pelacakan status laporan web.png",
        "/damkar-pelacakan status laporan.png",
        "/damkar-riwayat tugas.png"
      ]
    },
    {
      num: "III",
      title: "Slicing Figma: Portal Kemitraan (PT Tapp)",
      desc: "Misi pra-magang yang berfokus pada implementasi desain UI Figma menjadi kode Frontend (React) yang modular, pixel-perfect, responsif, dan siap produksi.",
      techs: ["React", "TypeScript", "Tailwind CSS", "Figma Slicing"],
      github: null,
      images: ["/projects/tapp.png"]
    },
    {
      num: "IV",
      title: "Portal Ksatria (EVOS Member Portal)",
      desc: "Proyek pengembangan halaman web keanggotaan (membership) untuk organisasi eSports EVOS, menerjemahkan desain Figma interaktif menjadi kode web yang responsif.",
      techs: ["React", "CSS Grid/Flexbox", "Responsive UI"],
      github: null,
      images: ["/projects/evos.png"]
    },
    {
      num: "V",
      title: "Serikat Dagang (Kongsinisaga)",
      desc: "Platform kolaboratif kemitraan niaga digital lokal untuk digitalisasi UMKM secara aman, dikembangkan untuk salah satu klien PT Tapp.",
      techs: ["React", "REST API", "Tailwind CSS"],
      github: null,
      images: ["/projects/kongsinisaga.png"]
    },
    {
      num: "VI",
      title: "Menara Hubitat (HubitatVercel)",
      desc: "Dashboard integrasi monitoring Smart Home Hubitat untuk mengontrol perangkat rumah tangga pintar klien PT Tapp, dideploy pada platform Vercel.",
      techs: ["Next.js", "Vercel", "Smart Home API"],
      github: null,
      images: ["/projects/hubitat.png"]
    }
  ];

  const publicProjects = projects.filter(proj => proj.github !== null);
  const privateProjects = projects.filter(proj => proj.github === null);

  return (
    <section id="proyek" className="py-8 px-4">
      <div className="max-w-7xl mx-auto manuscript-frame">
        <div className="text-center mb-12">
          <h2 className="font-cinzel-deco text-4xl text-leather dark:text-parchment">Gulungan Misi</h2>
          <div className="text-gold mt-4 text-2xl animate-float">❧</div>
        </div>

        {/* Public Projects Grid (2 columns centered) */}
        <div className="grid md:grid-cols-2 max-w-5xl mx-auto gap-8">
          {publicProjects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              <ProjectCard proj={proj} />
            </motion.div>
          ))}
        </div>

        {/* Accordion Toggle for Private Projects */}
        <div className="flex flex-col items-center mt-12">
          <button
            onClick={() => setShowPrivate(!showPrivate)}
            className="flex items-center gap-2 bg-transparent border-2 border-gold/60 hover:border-gold text-leather dark:text-parchment font-cinzel px-8 py-3 rounded cursor-pointer transition-all tracking-wider text-sm font-bold shadow-md hover:scale-105"
          >
            {showPrivate ? "Sembunyikan Misi Privat 🔒 ▲" : "Tampilkan Misi Privat 🔒 ▼"}
          </button>
        </div>

        {/* Private Projects Grid with Collapsible Animation */}
        <AnimatePresence initial={false}>
          {showPrivate && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden w-full"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
                {privateProjects.map((proj, idx) => (
                  <motion.div
                    key={proj.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="relative group"
                  >
                    <ProjectCard proj={proj} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
