import { motion } from 'motion/react';
import { BookOpen, PenTool, Globe, Zap, User, School } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { useLanguage } from '../../lib/LanguageContext';

const SERVICES = [
  {
    icon: PenTool,
    titleEn: 'Multilingual Handwriting',
    titleBn: 'বহুভাষিক হাতের লেখা',
    descEn: 'Master the art of beautiful Bangla, English, and Arabic handwriting with scientific techniques and calligraphy principles.',
    descBn: 'বৈজ্ঞানিক কৌশল এবং ক্যালিগ্রাফি নীতি ব্যবহার করে সুন্দর বাংলা, ইংরেজি এবং আরবি হাতের লেখার শিল্প আয়ত্ত করুন।',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20'
  },
  {
    icon: Zap,
    titleEn: 'Speed Writing Training',
    titleBn: 'দ্রুত লেখার প্রশিক্ষণ',
    descEn: 'Develop fast, legible handwriting essential for exams and note-taking.',
    descBn: 'পরীক্ষা এবং নোট নেওয়ার জন্য প্রয়োজনীয় দ্রুত, স্পষ্ট হাতের লেখা বিকাশ করুন।',
    color: 'text-purple-500',
    bg: 'bg-purple-50 dark:bg-purple-900/20'
  },
  {
    icon: User,
    titleEn: 'Personal Coaching',
    titleBn: 'ব্যক্তিগত কোচিং',
    descEn: 'One-on-one tailored sessions for rapid handwriting improvement.',
    descBn: 'হাতের লেখা দ্রুত উন্নত করার জন্য ব্যক্তিগত নির্দেশিকা।',
    color: 'text-rose-500',
    bg: 'bg-rose-50 dark:bg-rose-900/20'
  },
  {
    icon: School,
    titleEn: 'School & Teacher Workshops',
    titleBn: 'স্কুল ও শিক্ষক ওয়ার্কশপ',
    descEn: 'Comprehensive training programs for educational institutions.',
    descBn: 'শিক্ষাপ্রতিষ্ঠানের জন্য ব্যাপক প্রশিক্ষণ প্রোগ্রাম।',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50 dark:bg-cyan-900/20'
  }
];

export function Services() {
  const { t } = useLanguage();
  return (
    <section id="services" className="py-24 bg-gray-50/50 dark:bg-gray-900/20 rounded-3xl mt-12 mb-24">
      <div className="px-6">
        <a 
          href="#"
          className="inline-flex items-center text-brand hover:text-green-700 dark:hover:text-green-400 font-medium mb-8 transition-colors"
        >
          &larr; {t("Back to Home", "হোমে ফিরে যান")}
        </a>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title={t("Services", "সার্ভিসেস")} 
          subtitle={t("Professional handwriting training and consultation.", "পেশাদার হাতের লেখার প্রশিক্ষণ এবং পরামর্শ।")} 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.titleEn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-[#0a0a0a] rounded-[2rem] p-8 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center group hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={32} className={service.color} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t(service.titleEn, service.titleBn)}</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                {t(service.descEn, service.descBn)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
