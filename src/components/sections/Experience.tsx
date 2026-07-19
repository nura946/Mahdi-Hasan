import { motion } from 'motion/react';
import { PenTool, Library, BookOpen, Presentation, Code2, MonitorPlay, Briefcase, GraduationCap, Award, MapPin, Calendar, Medal } from 'lucide-react';

const SKILLS_BENTO = [
  {
    icon: PenTool,
    title: 'Handwriting Mastery',
    desc: 'Structured methods for Cursive, Print, and Speed Writing across languages.',
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-900/20'
  },
  {
    icon: Library,
    title: 'Curriculum Design',
    desc: 'Developing comprehensive syllabi for schools and training academies.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20'
  },
  {
    icon: BookOpen,
    title: 'Handwriting Analysis',
    desc: 'Identifying pain points and evaluating writing mechanics for rapid improvement.',
    color: 'text-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-900/20'
  },
  {
    icon: Presentation,
    title: 'Workshop Facilitation',
    desc: 'Engaging large groups of students and teachers in interactive training sessions.',
    color: 'text-purple-500',
    bg: 'bg-purple-50 dark:bg-purple-900/20'
  },
  {
    icon: Code2,
    title: 'Digital Creation',
    desc: 'Building modern web platforms using React, HTML, CSS, and AI Studio.',
    color: 'text-rose-500',
    bg: 'bg-rose-50 dark:bg-rose-900/20'
  },
  {
    icon: MonitorPlay,
    title: 'Media Production',
    desc: 'High-quality course recording and editing with Premiere Pro and Canva.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50 dark:bg-cyan-900/20'
  }
];

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
    title: '1st Place — Offline Handwriting Competition (English)',
    org: 'Sindabad · Islamic University Kushtia · National',
    year: '2023',
  },
  {
    title: '1st Place — Online Writing Competition',
    org: 'Daily Gonochithi · National',
    year: '2023',
  },
  {
    title: '1st Place — Online Handwriting Competition (Hindi)',
    org: 'Indian Institute of Handwriting · International',
    year: '2022',
  },
  {
    title: '1st Place — Offline Handwriting (Bangla & English)',
    org: 'Dhoniakandi Hamidia Fazil Madrasah · National',
    year: '2018',
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-50/50 dark:bg-gray-900/20">
      <div className="text-center mb-16">
        <p className="text-brand font-bold tracking-wider uppercase mb-3">Professional Background</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 dark:text-white max-w-2xl mx-auto">
          Experience & Achievements
        </h2>
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
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

        {/* Awards & Honours */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-xl mb-4">
              <Award size={28} />
            </div>
            <h3 className="font-display text-3xl font-bold text-gray-900 dark:text-white">Awards & Honours</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Publications */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-brand/10 text-brand rounded-xl mb-4">
              <BookOpen size={28} />
            </div>
            <h3 className="font-display text-3xl font-bold text-gray-900 dark:text-white">Publications</h3>
          </div>
          <div className="max-w-2xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#0a0a0a] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm text-center"
            >
              <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">হাতের লেখা শিখার বৈজ্ঞানিক কৌশল</h4>
              <p className="text-gray-500 dark:text-gray-400">
                A comprehensive guide to learning the scientific techniques of handwriting.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Core Expertise */}
        <div>
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl font-bold text-gray-900 dark:text-white">Core Expertise</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS_BENTO.map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-[#0a0a0a] rounded-[2rem] p-8 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center group hover:-translate-y-1"
              >
                <div className={`w-16 h-16 rounded-2xl ${skill.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon size={32} className={skill.color} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{skill.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
