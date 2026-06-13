'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mail, Copy, Check } from 'lucide-react';

const Github = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.3 5.3 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 2.5 5 2.9 5 2.9a5.3 5.3 0 0 0-.1 3.8A5.4 5.4 0 0 0 3 10.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

export default function Contact() {
  const email = "giga.lukman@gmail.com";
  const whatsappUrl = "https://wa.me/6282130508550";
  const githubUrl = "https://github.com/GigaLukmanMaulana";

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }).catch(() => {
      // Fallback: try opening mailto directly if clipboard copy fails
      window.location.href = `mailto:${email}`;
    });
  };

  return (
    <section id="kontak" className="py-8 px-4">
      <div className="max-w-2xl mx-auto manuscript-frame">
        <div className="text-center relative">
          <div className="text-gold text-2xl mb-4">⚜</div>
          <h2 className="font-cinzel-deco text-4xl text-leather dark:text-parchment mb-4">Hubungi Saya</h2>
          
          <p className="font-garamond text-leather/85 dark:text-parchment/80 mb-8 max-w-md mx-auto">
            Silakan hubungi saya melalui platform di bawah ini atau klik tombol kirim surat untuk menyalin alamat email saya.
          </p>

          <motion.div 
            className="flex justify-center gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-stone dark:text-parchment/60 hover:text-gold hover:border-gold hover:scale-110 transition-all"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-stone dark:text-parchment/60 hover:text-gold hover:border-gold hover:scale-110 transition-all"
              title="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
            <button 
              onClick={handleCopyEmail}
              className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-stone dark:text-parchment/60 hover:text-gold hover:border-gold hover:scale-110 transition-all"
              title="Klik untuk menyalin Email"
            >
              <Mail size={20} />
            </button>
          </motion.div>

          <div className="flex flex-col items-center gap-4">
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 bg-crimson text-parchment font-cinzel px-8 py-4 border border-gold hover:bg-crimson-light animate-float tracking-widest text-lg shadow-lg rounded transition-colors"
            >
              <span>{email}</span>
              <Copy size={18} className="opacity-80" />
            </button>

            {/* Notification Toast */}
            <AnimatePresence>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="bg-gold/90 text-leather px-4 py-2 rounded-md font-garamond text-sm font-semibold flex items-center gap-2 border border-parchment shadow-md"
                >
                  <Check size={16} />
                  <span>Email disalin ke papan klip!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
