import { motion } from 'motion/react';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

const EMPLOYMENT = [
  {
    title: 'Teacher & Muallim Trainer',
    company: 'Madrasatus Sunnah · As-Sunnah Foundation',
    date: 'Jan 2025 – Present',
    location: 'Dhaka, Bangladesh',
  },
  {
    title: 'Handwriting & Drawing Instructor',
    company: 'Phulkuri (ফুলকুঁড়ি)',
    date: 'March 2026 – Present',
    location: 'Dhaka, Bangladesh',
  },
  {
    title: 'Handwriting Trainer',
    company: 'Bangladesh Handwriting Academy (BHA)',
    date: 'March 2024 – Present',
    location: 'Ekuria, Dhaka, Bangladesh',
  },
  {
    title: 'Freelance Handwriting Expert',
    company: 'Self-Employed',
    date: 'Jan 2018 – Present',
    location: 'Online & Offline',
  },
  {
    title: 'Education Director',
    company: 'Center for Integrated Education',
    date: 'Before Nov 2025',
    location: 'Dhaka, Bangladesh',
  }
];

const EDUCATION = [
  {
    degree: 'Bachelor of Arts (BA)',
    institution: 'Islamic University, Kushtia',
    date: '2022 – Present',
  },
  {
    degree: 'Daurah Hadith — Masters in Islamic Studies',
    institution: 'Jamia Islamia Darul Ulom Madania, Jatrabari',
    date: '2023',
  },
  {
    degree: 'Alim Certificate Examination',
    institution: 'Dhoniakandi Hamidia Fazil Madrasah',
    date: '2021',
  },
  {
    degree: 'Dhakil Certificate Examination',
    institution: 'Dhoniakandi Hamidia Fazil Madrasah',
    date: '2019',
  },
  {
    degree: 'Hifzul Quran Memorization',
    institution: 'Baitul Quran Hafizia Cowmia Madrasah',
    date: '2014',
  }
];

export function TrainingExperience() {
  return (
    <section id="training-experience" className="py-24 bg-gray-50/50 dark:bg-gray-900/20 rounded-3xl mt-12 mb-24">
      <div className="px-6">
        <a 
          href="#"
          className="inline-flex items-center text-brand hover:text-green-700 dark:hover:text-green-400 font-medium mb-8 transition-colors"
        >
          ← Back to Home
        </a>
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Training Experience" subtitle="My professional background and education." />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          {/* Employment History */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-brand/10 text-brand rounded-xl">
                <Briefcase size={28} />
              </div>
              <h3 className="font-display text-3xl font-bold text-gray-900 dark:text-white">Experience</h3>
            </div>
            
            <div className="space-y-8">
              {EMPLOYMENT.map((job, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-brand before:rounded-full after:absolute after:left-[3px] after:top-6 after:w-[2px] after:h-[calc(100%+1rem)] after:bg-gray-200 dark:after:bg-gray-800 last:after:hidden"
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{job.title}</h4>
                  <div className="text-brand font-medium mb-2">{job.company}</div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {job.date}</span>
                    <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Qualifications */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-brand/10 text-brand rounded-xl">
                <GraduationCap size={28} />
              </div>
              <h3 className="font-display text-3xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>
            
            <div className="space-y-8 mb-16">
              {EDUCATION.map((edu, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-brand before:rounded-full after:absolute after:left-[3px] after:top-6 after:w-[2px] after:h-[calc(100%+1rem)] after:bg-gray-200 dark:after:bg-gray-800 last:after:hidden"
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h4>
                  <div className="text-brand font-medium mb-2">{edu.institution}</div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {edu.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
