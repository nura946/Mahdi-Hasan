import { motion } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';
import { useLanguage } from '../../lib/LanguageContext';

export function WhyLearnFromMe() {
  const { t, language } = useLanguage();

  return (
    <section id="why-learn-from-me" className="py-24" style={{ fontFamily: language === 'bn' ? "'Kalpurush', sans-serif" : undefined }}>
      <div className="px-6">
        <a 
          href="#"
          className="inline-flex items-center text-brand hover:text-green-700 dark:hover:text-green-400 font-medium mb-8 transition-colors"
        >
          ← {t("Back to Home", "হোমে ফিরে যান")}
        </a>
      </div>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <SectionHeading 
          title={t("Why Choose Our Course?", "কেন আমাদের কোর্স বেছে নেবেন?")} 
          subtitle={t("What makes my handwriting courses effective and unique.", "যা আমাদের হাতের লেখার কোর্সকে কার্যকর এবং অনন্য করে তোলে।")}
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-left bg-white dark:bg-[#0a0a0a] p-8 md:p-12 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm"
        >
          <p>
            {t(
              "Many people may have beautiful handwriting, but having beautiful handwriting does not automatically make someone a skilled teacher. A successful handwriting trainer requires deep experience, effective teaching methods, proper assessment systems, and personalized guidance for each student.",
              "অনেকের হাতের লেখা সুন্দর হতে পারে, কিন্তু সুন্দর হাতের লেখা থাকলেই একজন দক্ষ শিক্ষক হওয়া যায় না। একজন সফল হ্যান্ডরাইটিং ট্রেইনারের জন্য প্রয়োজন গভীর অভিজ্ঞতা, কার্যকর শিক্ষণ-পদ্ধতি, সঠিক মূল্যায়ন ব্যবস্থা এবং প্রতিটি শিক্ষার্থীর জন্য ব্যক্তিগত নির্দেশনা।"
            )}
          </p>
          <p>
            {t(
              "Our biggest specialty is the Handwriting Assessment System. We don't just teach handwriting; instead, we carefully analyze each student's writing to determine exactly where the problems lie and provide guidelines for improvement accordingly.",
              "আমাদের সবচেয়ে বড় বিশেষত্ব হলো Handwriting Assessment System। আমরা শুধু হাতের লেখা শেখাই না, বরং প্রতিটি শিক্ষার্থীর লেখা সূক্ষ্মভাবে বিশ্লেষণ করে কোথায় কী সমস্যা রয়েছে তা নির্ধারণ করি এবং সেই অনুযায়ী উন্নয়নের দিকনির্দেশনা প্রদান করি।"
            )}
          </p>
          <p>
            {t(
              "With this goal in mind, we have developed our own Handwriting Assessment App. This is an exclusive system built with our proprietary technology, where separate evaluation instructions are set for each letter. As a result, each piece of writing can be evaluated very accurately and qualitatively.",
              "এই লক্ষ্যেই আমরা আমাদের নিজস্ব একটি Handwriting Assessment App তৈরি করেছি। এটি আমাদের নিজস্ব প্রযুক্তিতে নির্মিত একটি এক্সক্লুসিভ সিস্টেম, যেখানে প্রতিটি বর্ণের জন্য আলাদা মূল্যায়ন নির্দেশিকা (Instruction) নির্ধারণ করা হয়েছে। ফলে প্রতিটি লেখা অত্যন্ত নিখুঁত ও মানসম্মতভাবে মূল্যায়ন করা সম্ভব হয়।"
            )}
          </p>
          <p>
            {t(
              "The writings of the students participating in the course are collected and evaluated through our Admin Panel. After that, a detailed PDF Feedback Report is prepared for each student and sent to their WhatsApp. This allows the student to easily understand which areas need improvement and how to achieve even more beautiful handwriting step by step.",
              "কোর্সে অংশগ্রহণকারী শিক্ষার্থীদের লেখাগুলো আমাদের Admin Panel-এর মাধ্যমে সংগ্রহ ও মূল্যায়ন করা হয়। এরপর প্রতিটি শিক্ষার্থীর জন্য বিস্তারিত PDF Feedback Report প্রস্তুত করে তাদের WhatsApp-এ পাঠিয়ে দেওয়া হয়। এতে শিক্ষার্থী সহজেই বুঝতে পারে তার কোন বিষয়গুলো উন্নতি করা প্রয়োজন এবং কীভাবে ধাপে ধাপে আরও সুন্দর হাতের লেখা অর্জন করা সম্ভব।"
            )}
          </p>
          <p className="font-semibold text-gray-900 dark:text-white">
            {t(
              "Our goal is not just to teach beautiful handwriting; rather, it is to ensure realistic and permanent improvement in every student's handwriting.",
              "আমাদের লক্ষ্য শুধু সুন্দর হাতের লেখা শেখানো নয়; বরং প্রতিটি শিক্ষার্থীর হাতের লেখার বাস্তব ও স্থায়ী উন্নয়ন নিশ্চিত করা।"
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
