import { motion } from 'motion/react';

const BRANDS = [
  "Madrasatus Sunnah",
  "Bangladesh Handwriting Academy",
  "CIE",
  "Good Luck World",
  "Dhaka University",
];

export function TrustBadges() {
  return (
    <section className="py-12 border-y border-gray-100 dark:border-gray-800/50 bg-gray-50/50 dark:bg-gray-900/20">
      <div className="text-center mb-8">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">
          Trusted by institutions & academies worldwide
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale">
        {BRANDS.map((brand, i) => (
          <motion.div
            key={brand}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-xl md:text-2xl font-display font-bold text-gray-800 dark:text-gray-200"
          >
            {brand}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
