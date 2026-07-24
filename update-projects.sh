#!/bin/bash
cat << 'INNEREOF' > src/components/sections/Projects.tsx
import { SectionHeading } from '../ui/SectionHeading';
import { motion } from 'motion/react';
import { ArrowRight, PenTool, Globe, Star, Mail } from 'lucide-react';
import { useLanguage } from '../../lib/LanguageContext';

const PROJECTS = [
  {
    titleEn: 'Handwriting Portfolio',
    titleBn: 'হাতের লেখার পোর্টফোলিও',
    descEn: 'Live handwriting demonstrations across Bangla, English, Arabic and Urdu scripts — showcasing years of awarded work.',
    descBn: 'বাংলা, ইংরেজি, আরবি এবং উর্দু লিপিতে লাইভ হাতের লেখার ডেমোনস্ট্রেশন — বছরের পর বছর পুরস্কৃত কাজের প্রদর্শনী।',
    link: 'mailto:mdmahdihasanriyad@gmail.com',
    linkTextEn: 'Request Portfolio via Email',
    linkTextBn: 'ইমেইলের মাধ্যমে পোর্টফোলিও অনুরোধ করুন',
    highlight: true,
    upcoming: false,
    icon: PenTool
  },
  {
    titleEn: 'Professional Online Course',
    titleBn: 'প্রফেশনাল অনলাইন কোর্স',
    descEn: 'Structured handwriting courses for all age groups, online and offline.',
    descBn: 'সব বয়সের জন্য কাঠামোগত হাতের লেখার কোর্স, অনলাইন এবং অফলাইনে।',
    link: '#',
    linkTextEn: 'View Course',
    linkTextBn: 'কোর্স দেখুন',
    upcoming: true,
    icon: Globe
  },
  {
    titleEn: 'Handwriting Workbook',
    titleBn: 'হাতের লেখার ওয়ার্কবুক',
    descEn: 'Printable and digital resources designed for fine motor skills improvement.',
    descBn: 'ফাইন মোটর স্কিল উন্নত করার জন্য ডিজাইন করা প্রিন্টেবল এবং ডিজিটাল রিসোর্স।',
    link: '#',
    linkTextEn: 'Explore Resources',
    linkTextBn: 'রিসোর্স এক্সপ্লোর করুন',
    upcoming: true,
    icon: Star
  },
];

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24">
      <SectionHeading 
        title={t("Featured Work.", "ফিচারড কাজ।")}
        subtitle={t("A selection of my recent work in curriculum development, digital resources, and live demonstrations.", "পাঠ্যক্রম উন্নয়ন, ডিজিটাল রিসোর্স এবং লাইভ ডেমোনস্ট্রেশনে আমার সাম্প্রতিক কিছু কাজ।")}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.titleEn}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`group block p-8 rounded-[32px] border ${
              project.highlight 
                ? 'bg-brand/5 border-brand/20 dark:bg-brand/10 dark:border-brand/20 lg:col-span-3 md:col-span-3' 
                : 'bg-white dark:bg-[#0a0a0a] border-gray-200 dark:border-gray-800'
            } transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden`}
          >
            <div className={`flex ${project.highlight ? 'flex-col md:flex-row md:items-center gap-8' : 'flex-col h-full gap-4'}`}>
              <div className={`p-4 rounded-2xl ${project.highlight ? 'bg-brand/10 text-brand' : 'bg-gray-50 dark:bg-gray-900 text-gray-500'} w-max`}>
                <project.icon size={32} />
              </div>
              
              <div className="flex-1 relative">
                {project.upcoming && (
                  <div className={`absolute top-0 right-0 md:static md:mb-4 lg:absolute lg:top-0 lg:right-0 inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full ${project.highlight ? 'static mb-4' : 'mb-4 relative top-auto right-auto'}`}>
                    {t("Upcoming Soon", "শীঘ্রই আসছে")}
                  </div>
                )}
                
                <h3 className={`${project.highlight ? 'text-3xl' : 'text-2xl'} font-bold text-gray-900 dark:text-white mb-2 mt-4 md:mt-0`}>
                  {t(project.titleEn, project.titleBn)}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-2xl">
                  {t(project.descEn, project.descBn)}
                </p>
                
                <div className="mt-auto">
                  {project.link ? (
                    <a href={project.link} className="inline-flex items-center text-sm font-bold text-brand group-hover:underline gap-2 bg-brand/10 px-4 py-2 rounded-full">
                      {t(project.linkTextEn, project.linkTextBn)} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center text-sm font-bold text-gray-400 dark:text-gray-500">
                      {t("In Development", "উন্নয়নাধীন")}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
INNEREOF
