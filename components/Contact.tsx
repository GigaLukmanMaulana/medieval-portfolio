'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Mail } from 'lucide-react';

const Github = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.3 5.3 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 2.5 5 2.9 5 2.9a5.3 5.3 0 0 0-.1 3.8A5.4 5.4 0 0 0 3 10.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const Linkedin = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Contact() {
  return (
    <section id="kontak" className="py-24 px-4">
      <div className="max-w-lg mx-auto text-center">
        <div className="text-gold text-2xl mb-4">⚜</div>
        <h2 className="font-cinzel-deco text-4xl text-leather dark:text-parchment mb-12">Kirim Pesan</h2>

        <motion.div 
          className="flex justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a href="#" className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-stone dark:text-parchment/60 hover:text-gold hover:border-gold hover:scale-110 transition-all">
            <Github size={20} />
          </a>
          <a href="#" className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-stone dark:text-parchment/60 hover:text-gold hover:border-gold hover:scale-110 transition-all">
            <Linkedin size={20} />
          </a>
          <a href="#" className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-stone dark:text-parchment/60 hover:text-gold hover:border-gold hover:scale-110 transition-all">
            <MessageCircle size={20} />
          </a>
          <a href="#" className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-stone dark:text-parchment/60 hover:text-gold hover:border-gold hover:scale-110 transition-all">
            <Mail size={20} />
          </a>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-crimson text-parchment font-cinzel px-8 py-4 border border-gold hover:bg-crimson-light animate-float tracking-widest text-lg shadow-lg rounded"
        >
          Kirim Surat ✉
        </motion.button>
      </div>
    </section>
  );
}
