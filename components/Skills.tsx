'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const guilds = [
    {
      title: "Serikat Front-End",
      skills: ["React", "Flutter", "TypeScript", "Tailwind CSS", "HTML", "CSS"]
    },
    {
      title: "Serikat Back-End",
      skills: ["Node.js", "Python", "Firebase", "MySQL"]
    },
    {
      title: "Serikat Perkakas",
      skills: ["Git", "GitHub", "Figma", "VS Code"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="keahlian" className="py-8 px-4">
      <div className="max-w-7xl mx-auto manuscript-frame">
      <div className="text-center mb-16">
        <h2 className="font-cinzel-deco text-4xl text-leather dark:text-parchment">Perkumpulan Keahlian</h2>
        <div className="text-gold mt-4 text-2xl">❧</div>
      </div>

      <motion.div 
        className="grid md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {guilds.map((guild, idx) => (
          <motion.div key={idx} variants={itemVariants} className="bg-parchment-dark dark:bg-ember border border-gold/40 dark:border-gold/30 rounded-lg p-6 shadow-md relative overflow-hidden group hover:border-gold transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>
            
            <h3 className="font-cinzel text-crimson text-xl mb-6 text-center border-b border-gold/20 pb-4">
              {guild.title}
            </h3>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {guild.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="bg-parchment-dark dark:bg-parchment/10 border border-gold/40 text-leather dark:text-parchment font-garamond px-4 py-1.5 rounded-full text-sm hover:bg-gold hover:text-leather transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
      </div>
    </section>
  );
}
