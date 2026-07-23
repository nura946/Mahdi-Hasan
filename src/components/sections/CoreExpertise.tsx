import { motion } from 'motion/react';
import { PenTool, Library, Search, Presentation, BookOpen, Code2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { useLanguage } from '../../lib/LanguageContext';

const SKILLS_BENTO = [
  {
    icon: PenTool,
    titleEn: 'Handwriting Mastery',
    titleBn: 'হাতের লেখা মাস্টারি',
    descEn: 'Professional training in Bangla, English, Arabic, Cursive, Print, and Speed Writing.',
    descBn: 'বাংলা, ইংরেজি, আরবি, কার্সিভ, প্রিন্ট এবং দ্রুত লেখায় পেশাদার প্রশিক্ষণ।',
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-900/20'
  },
  {
    icon: Library,
    titleEn: 'Curriculum Development',
    titleBn: 'কারিকুলাম উন্নয়ন',
    descEn: 'Designing structured handwriting curricula, workbooks, and teacher guides for schools and academies.',
    descBn: 'স্কুল এবং একাডেমির জন্য কাঠামোগত হাতের লেখার কারিকুলাম, ওয়ার্কবুক এবং শিক্ষক গাইড তৈরি।',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20'
  },
  {
    icon: Search,
    titleEn: 'Handwriting Assessment',
    titleBn: 'হাতের লেখা মূল্যায়ন',
    descEn: 'Analyzing handwriting, identifying weaknesses, and creating personalized improvement plans.',
    descBn: 'হাতের লেখা বিশ্লেষণ, দুর্বলতা চিহ্নিত করা এবং ব্যক্তিগত উন্নতির পরিকল্পনা তৈরি করা।',
    color: 'text-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-900/20'
  },
  {
    icon: Presentation,
    titleEn: 'Workshops & Teacher Training',
    titleBn: 'কর্মশালা ও শিক্ষক প্রশিক্ষণ',
    descEn: 'Conducting engaging workshops and professional development programs for students, teachers, and institutions.',
    descBn: 'শিক্ষার্থী, শিক্ষক এবং প্রতিষ্ঠানের জন্য আকর্ষণীয় কর্মশালা এবং পেশাদার উন্নয়ন কর্মসূচি পরিচালনা।',
    color: 'text-purple-500',
    bg: 'bg-purple-50 dark:bg-purple-900/20'
  },
  {
    icon: BookOpen,
    titleEn: 'Educational Content Creation',
    titleBn: 'শিক্ষামূলক কন্টেন্ট তৈরি',
    descEn: 'Developing handwriting books, worksheets, digital learning resources, and instructional materials.',
    descBn: 'হাতের লেখার বই, ওয়ার্কশিট, ডিজিটাল শেখার সংস্থান এবং নির্দেশনামূলক উপাদান তৈরি।',
    color: 'text-rose-500',
    bg: 'bg-rose-50 dark:bg-rose-900/20'
  },
  {
    icon: Code2,
    titleEn: 'Digital Solutions',
    titleBn: 'ডিজিটাল সমাধান',
    descEn: 'Creating modern educational websites, portfolios, and AI-powered learning experiences.',
    descBn: 'আধুনিক শিক্ষামূলক ওয়েবসাইট, পোর্টফোলিও এবং এআই-চালিত শেখার অভিজ্ঞতা তৈরি করা।',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50 dark:bg-cyan-900/20'
  }
];

export function CoreExpertise() {
  const { t } = useLanguage();

  return (
    <section id="core-expertise" className="py-24 bg-gray-50/50 dark:bg-gray-900/20 rounded-3xl mt-12 mb-24">
      <div className="px-6">
        <a 
          href="#"
          className="inline-flex items-center text-brand hover:text-green-700 dark:hover:text-green-400 font-medium mb-8 transition-colors"
        >
          ← {t("Back to Home", "হোমে ফিরে যান")}
        </a>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title={t("Core Expertise", "মূল দক্ষতা")} 
          subtitle={t("My specialized skills and professional capabilities.", "আমার বিশেষ দক্ষতা এবং পেশাদার যোগ্যতা।")} 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {SKILLS_BENTO.map((skill, i) => (
            <motion.div
              key={skill.titleEn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-[#0a0a0a] rounded-[2rem] p-8 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center group hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-2xl ${skill.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon size={32} className={skill.color} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {t(skill.titleEn, skill.titleBn)}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                {t(skill.descEn, skill.descBn)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
