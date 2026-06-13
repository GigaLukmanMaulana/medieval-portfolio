export default function Footer() {
  return (
    <footer className="bg-leather text-parchment text-center py-12 relative border-t-4 border-gold z-10">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-leather px-4 rounded-full border border-gold">
        <span className="text-gold text-2xl">⚜</span>
      </div>
      
      <div className="mt-6">
        <p className="font-garamond italic text-parchment/60 mb-2">
          © 2026 Giga Lukman Maulana. Hak cipta dilindungi.
        </p>
        <p className="font-cinzel text-gold/60 text-sm tracking-widest mt-1 uppercase">
          Ars longa, vita brevis
        </p>
      </div>
    </footer>
  );
}
