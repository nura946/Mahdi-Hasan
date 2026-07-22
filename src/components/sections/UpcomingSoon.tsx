import { SectionHeading } from '../ui/SectionHeading';
import { motion } from 'motion/react';
import { Clock } from 'lucide-react';

export function UpcomingSoon() {
  return (
    <section id="upcoming-soon" className="py-24 bg-gray-50/50 dark:bg-gray-900/20 rounded-3xl mt-12 mb-24">
      <div className="px-6">
        <a 
          href="#"
          className="inline-flex items-center text-brand hover:text-green-700 dark:hover:text-green-400 font-medium mb-8 transition-colors"
        >
          ← Back to Home
        </a>
      </div>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <SectionHeading title="Upcoming Soon.." />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-12 bg-white dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col items-center justify-center gap-6"
        >
          <Clock size={48} className="text-brand animate-pulse" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Exciting Things Are Coming</h3>
          <p className="text-gray-500 dark:text-gray-400 max-w-lg">
            Stay tuned! I am working on some exciting new projects, courses, and resources that will be available very soon. 
          </p>
        </motion.div>
      </div>
    </section>
  );
}
