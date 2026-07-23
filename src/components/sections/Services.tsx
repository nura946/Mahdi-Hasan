import { motion } from 'motion/react';
import { BookOpen, PenTool, Globe, Zap, User, School } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

const SERVICES = [
  {
    icon: PenTool,
    title: 'Bangla Handwriting',
    desc: 'Master the art of beautiful Bangla handwriting with scientific techniques.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20'
  },
  {
    icon: Globe,
    title: 'English Handwriting',
    desc: 'Improve print and cursive English handwriting for elegance and clarity.',
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-900/20'
  },
  {
    icon: BookOpen,
    title: 'Arabic Handwriting',
    desc: 'Learn proper Arabic letter formation and calligraphy principles.',
    color: 'text-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-900/20'
  },
  {
    icon: Zap,
    title: 'Speed Writing Training',
    desc: 'Develop fast, legible handwriting essential for exams and note-taking.',
    color: 'text-purple-500',
    bg: 'bg-purple-50 dark:bg-purple-900/20'
  },
  {
    icon: User,
    title: 'Personal Coaching',
    desc: 'One-on-one tailored sessions for rapid handwriting improvement.',
    color: 'text-rose-500',
    bg: 'bg-rose-50 dark:bg-rose-900/20'
  },
  {
    icon: School,
    title: 'School & Teacher Workshops',
    desc: 'Comprehensive training programs for educational institutions.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50 dark:bg-cyan-900/20'
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50/50 dark:bg-gray-900/20 rounded-3xl mt-12 mb-24">
      <div className="px-6">
        <a 
          href="#"
          className="inline-flex items-center text-brand hover:text-green-700 dark:hover:text-green-400 font-medium mb-8 transition-colors"
        >
          ← Back to Home
        </a>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Services" subtitle="Professional handwriting training and consultation." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-[#0a0a0a] rounded-[2rem] p-8 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center group hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={32} className={service.color} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
