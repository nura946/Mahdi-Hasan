import { motion } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';
import { 
  Award, 
  Lightbulb, 
  MessageSquare, 
  Map, 
  Globe2, 
  Zap, 
  BookOpen, 
  HeartHandshake, 
  ShieldCheck, 
  TrendingUp 
} from 'lucide-react';

const REASONS = [
  {
    icon: Award,
    title: "Proven Teaching Experience",
    description: "বছরের পর বছর ধরে শত শত শিক্ষার্থীকে সুন্দর ও আত্মবিশ্বাসী হাতের লেখা গড়ে তুলতে সহায়তা করেছি।"
  },
  {
    icon: Lightbulb,
    title: "Scientific Learning Method",
    description: "শুধুমাত্র অক্ষর অনুশীলন নয়—লেটার ফরমেশন, স্পেসিং, স্ল্যান্ট, সাইজ ও রিদমসহ একটি পূর্ণাঙ্গ পদ্ধতিতে শেখানো হয়।"
  },
  {
    icon: MessageSquare,
    title: "Personalized Feedback",
    description: "প্রতিটি শিক্ষার্থীর খাতা বিশ্লেষণ করে ব্যক্তিগত পরামর্শ ও উন্নয়নের দিকনির্দেশনা দেওয়া হয়।"
  },
  {
    icon: Map,
    title: "Step-by-Step Curriculum",
    description: "একেবারে বেসিক থেকে শুরু করে ধাপে ধাপে উন্নত পর্যায়ে পৌঁছানোর জন্য সুসংগঠিত কারিকুলাম।"
  },
  {
    icon: Globe2,
    title: "Bangla, English & Arabic Handwriting",
    description: "তিনটি ভাষার হাতের লেখার উন্নয়নের জন্য আলাদা কৌশল ও অনুশীলন।"
  },
  {
    icon: Zap,
    title: "Focus on Speed & Neatness",
    description: "শুধু সুন্দর লেখা নয়, পরীক্ষায় দ্রুত এবং পরিষ্কারভাবে লেখার দক্ষতাও গড়ে তোলা হয়।"
  },
  {
    icon: BookOpen,
    title: "Practical Practice System",
    description: "বাস্তবভিত্তিক ওয়ার্কশিট, অনুশীলন পরিকল্পনা এবং নিয়মিত মূল্যায়নের মাধ্যমে শেখানো হয়।"
  },
  {
    icon: HeartHandshake,
    title: "Supportive Learning Environment",
    description: "শেখার পুরো সময়জুড়ে প্রশ্ন করার সুযোগ, পরামর্শ এবং ধারাবাহিক সহযোগিতা নিশ্চিত করা হয়।"
  },
  {
    icon: ShieldCheck,
    title: "Character & Discipline",
    description: "সুন্দর হাতের লেখার পাশাপাশি ধৈর্য, শৃঙ্খলা এবং পরিচ্ছন্নভাবে কাজ করার অভ্যাস গড়ে তুলতে উৎসাহ দেওয়া হয়।"
  },
  {
    icon: TrendingUp,
    title: "Real Results, Lasting Improvement",
    description: "লক্ষ্য শুধু কয়েক দিনের পরিবর্তন নয়; দীর্ঘমেয়াদে সুন্দর ও আত্মবিশ্বাসী হাতের লেখার অভ্যাস তৈরি করা।"
  }
];

export function WhyLearnFromMe() {
  return (
    <section id="why-learn-from-me" className="py-24">
      <a 
        href="#"
        className="inline-flex items-center text-brand hover:text-green-700 dark:hover:text-green-400 font-medium mb-8 transition-colors"
      >
        ← Back to Home
      </a>
      <SectionHeading 
        title="Why Learn From Me?" 
        subtitle="What makes my handwriting courses effective and unique."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {REASONS.map((reason, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-3xl bg-gray-50/50 dark:bg-[#111] border border-gray-100 dark:border-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
          >
            <div className="w-12 h-12 bg-white dark:bg-black rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-800 text-gray-900 dark:text-white mb-6 group-hover:scale-110 transition-transform">
              <reason.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {reason.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              {reason.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
