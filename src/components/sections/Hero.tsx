import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { LiveTimeAndDate } from '../ui/LiveTimeAndDate';
import { useLanguage } from '../../lib/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  return (
    <section id="home" className="min-h-screen pt-28 pb-12 overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full mb-16 relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800"
        >
          {/* Replace this src with your actual uploaded banner image path */}
          <img 
            src="/banner.png.png" 
            alt="Mahdi Handwriting Academy Banner" 
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <div className="flex flex-col items-center text-center space-y-8 relative z-10 max-w-5xl mx-auto">
          <LiveTimeAndDate />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-6">
              {t("Learn Beautiful", "সুন্দর লেখা")} <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-emerald-400">
                {t("HANDWRITING.", "শিখুন।")}
              </span>
            </h1>
            <p className="font-medium text-xl md:text-2xl text-gray-900 dark:text-gray-200">
              {t("Write Better. Think Better. Grow Better.", "ভালো লিখুন। ভালো চিন্তা করুন। উন্নতি করুন।")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm"
          >
            <span className="flex items-center gap-2"><span className="text-brand text-lg">✓</span> {t("Improve Handwriting", "হাতের লেখা উন্নত করুন")}</span>
            <span className="flex items-center gap-2"><span className="text-brand text-lg">✓</span> {t("Boost Confidence", "আত্মবিশ্বাস বৃদ্ধি করুন")}</span>
            <span className="flex items-center gap-2"><span className="text-brand text-lg">✓</span> {t("Better Presentation", "উন্নত উপস্থাপন")}</span>
            <span className="flex items-center gap-2"><span className="text-brand text-lg">✓</span> {t("Bright Future", "উজ্জ্বল ভবিষ্যৎ")}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <a 
              href="#projects" 
              className="inline-flex items-center px-8 py-4 rounded-full bg-brand text-white font-bold hover:bg-brand/90 transition-all shadow-lg shadow-brand/25 hover:shadow-xl hover:shadow-brand/20 hover:-translate-y-0.5"
            >
              {t("JOIN OUR COURSE", "কোর্সে যুক্ত হোন")}
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 rounded-full border-2 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white font-bold hover:border-gray-300 dark:hover:border-gray-700 transition-all gap-2 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
            >
              {t("Practice Materials", "অনুশীলন সামগ্রী")} <ArrowRight size={18} />
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="pt-8 flex flex-col items-center gap-4"
          >
             <div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-gray-500 uppercase tracking-wider">
               <span>{t("Bangla", "বাংলা")}</span> • <span>{t("English", "ইংরেজি")}</span> • <span>{t("Arabic", "আরবি")}</span> • <span>{t("Swift & Cursive", "সুইফট এবং কার্সিভ")}</span>
             </div>
             <p className="mt-4 text-sm font-medium italic text-gray-500">"সুন্দর হাতের লেখাই দিয়ে গড়ে সফলতার পরিচয়"</p>
          </motion.div>
        </div>

        {/* Decorative shapes */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-brand/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      </div>
    </section>
  );
}
