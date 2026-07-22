import { motion } from 'motion/react';
import { Award, Medal } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

const AWARDS = [
  {
    title: '1st Place — Handwriting Competition (Calligraphy & Cursive)',
    org: 'Nepal Penmanship Society · International',
    year: '2026',
  },
  {
    title: '1st Place — Handwriting Competition (All Language)',
    org: 'DUCSU · Dhaka University · National',
    year: '2026',
  },
  {
    title: '1st Place — Offline Handwriting (Bangla & English)',
    org: 'Dhoniakandi Hamidia Fazil Madrasah · National',
    year: '2018',
  }
];

export function AwardsHonours() {
  return (
    <section id="awards-honours" className="py-24 bg-gray-50/50 dark:bg-gray-900/20 rounded-3xl mt-12 mb-24">
      <div className="px-6">
        <a 
          href="#"
          className="inline-flex items-center text-brand hover:text-green-700 dark:hover:text-green-400 font-medium mb-8 transition-colors"
        >
          ← Back to Home
        </a>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Awards & Honours" subtitle="Recognition for my work in handwriting." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {AWARDS.map((award, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-[#0a0a0a] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 text-amber-500">
                  <Medal size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2 leading-tight">{award.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{award.org}</p>
                  <span className="inline-block px-2.5 py-1 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 text-xs font-bold rounded-full">
                    {award.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
