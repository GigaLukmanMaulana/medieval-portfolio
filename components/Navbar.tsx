'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Tentang', href: '#tentang' },
    { name: 'Keahlian', href: '#keahlian' },
    { name: 'Proyek', href: '#proyek' },
    { name: 'Perjalanan', href: '#perjalanan' },
    { name: 'Kontak', href: '#kontak' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-leather/90 dark:bg-obsidian/95 backdrop-blur-md shadow-lg border-b border-gold/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="font-cinzel text-gold text-2xl font-bold tracking-widest">
              ⚜ CHRONICLES
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`font-cinzel text-sm uppercase tracking-wider transition-colors ${scrolled ? 'text-parchment hover:text-gold dark:text-parchment/80 dark:hover:text-gold' : 'text-leather hover:text-crimson dark:text-parchment/80 dark:hover:text-gold'}`}
              >
                {link.name}
              </a>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="text-gold focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-leather/95 dark:bg-obsidian/95 backdrop-blur-md border-b border-gold/20 shadow-xl">
          <div className="px-4 pt-4 pb-8 space-y-6 flex flex-col items-center">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="block font-cinzel text-parchment dark:text-parchment/80 text-lg uppercase tracking-wider hover:text-gold dark:hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
