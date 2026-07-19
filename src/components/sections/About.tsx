import { SectionHeading } from '../ui/SectionHeading';
import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { CheckCircle2, GraduationCap, Users, BookOpen } from 'lucide-react';

const STATS = [
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 10000, suffix: '+', label: 'Students' },
  { value: 100, suffix: '+', label: 'Workshops' },
  { value: 6, suffix: '+', label: 'Institutions' },
];

function Counter({ end, suffix }: { end: number, suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 2000;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        
        // Easing out function
        const percentage = Math.min(progress / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
        
        setCount(Math.floor(easeOutQuart * end));

        if (progress < duration) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function About() {
  return (
    <section id="about" className="py-24">
      <SectionHeading 
        title="Meet Your Instructor." 
        subtitle="Transforming handwriting through proven scientific methods."
      />
      
      <div className="bg-gradient-to-br from-brand to-emerald-600 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-square max-w-sm mx-auto rounded-[2rem] overflow-hidden border-4 border-white/20 shadow-2xl relative bg-emerald-800">
               <img 
                 src="/my-photo.jpg.jfif" 
                 alt="Mahdi Hasan Teaching" 
                 className="absolute inset-0 w-full h-full object-cover"
               />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 md:right-0 bg-white text-gray-900 p-4 rounded-2xl shadow-xl flex items-center gap-3">
              <div className="bg-brand/10 p-2 rounded-full text-brand">
                <CheckCircle2 size={24} />
              </div>
              <div className="font-bold">Verified Expert</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <h3 className="font-display text-4xl md:text-5xl font-bold mb-4">Hi, I'm Mahdi!</h3>
              <p className="text-emerald-50 text-lg md:text-xl leading-relaxed">
                I went from a traditional classroom teacher to the founder of Mahdi Handwriting Academy. Now I teach aspiring students and professionals how to build confidence through clear, beautiful handwriting using structured, scientific methods.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/20">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm"><GraduationCap size={24} /></div>
                <div className="font-medium text-lg">Master Trainer</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm"><Users size={24} /></div>
                <div className="font-medium text-lg">Thousands of Students</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm"><CheckCircle2 size={24} /></div>
                <div className="font-medium text-lg">Proven Systems & Strategies</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm"><BookOpen size={24} /></div>
                <div className="font-medium text-lg">Curriculum Developer</div>
              </div>
            </div>

            <button className="mt-8 bg-white text-brand px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-colors shadow-lg">
              Learn More About My Journey
            </button>
          </motion.div>

        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 px-4">
        {STATS.map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center text-center gap-2"
          >
            <span className="font-display text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white tabular-nums">
              <Counter end={stat.value} suffix={stat.suffix} />
            </span>
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
