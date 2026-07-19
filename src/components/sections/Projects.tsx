import { SectionHeading } from '../ui/SectionHeading';
import { motion } from 'motion/react';
import { ArrowRight, PenTool, Globe, Star, Mail } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Handwriting Portfolio',
    desc: 'Live handwriting demonstrations across Bangla, English, Arabic and Urdu scripts — showcasing years of awarded work.',
    link: 'mailto:mdmahdihasanriyad@gmail.com',
    linkText: 'Request Portfolio via Email',
    highlight: true,
    icon: PenTool
  },
  {
    title: 'Professional Online Course',
    desc: 'Structured handwriting courses for all age groups, online and offline.',
    link: '#',
    linkText: 'View Course',
    icon: Globe
  },
  {
    title: 'Handwriting Workbook',
    desc: 'Printable and digital resources designed for fine motor skills improvement.',
    link: '#',
    linkText: 'Explore Resources',
    icon: Star
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <SectionHeading 
        title="Featured Work." 
        subtitle="A selection of my recent work in curriculum development, digital resources, and live demonstrations."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.title}
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
              <div className="flex-1">
                <h3 className={`${project.highlight ? 'text-3xl' : 'text-2xl'} font-bold text-gray-900 dark:text-white mb-2`}>{project.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-2xl">{project.desc}</p>
                
                <div className="mt-auto">
                  {project.link ? (
                    <a href={project.link} className="inline-flex items-center text-sm font-bold text-brand group-hover:underline gap-2 bg-brand/10 px-4 py-2 rounded-full">
                      {project.linkText} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center text-sm font-bold text-gray-400 dark:text-gray-500">
                      In Development
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
