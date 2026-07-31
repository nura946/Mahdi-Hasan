const fs = require('fs');

const content = `import React from 'react';
import { useLanguage } from '../../lib/LanguageContext';
import { PenTool, User, Hand, BookOpen, Timer, Search, FileText, CheckSquare, Clock, Trophy, Target, TrendingUp, Edit3 } from 'lucide-react';

export function CoursePlan() {
  const { t } = useLanguage();

  const courseItems = [
    {
      id: 1,
      text: t("সঠিকভাবে কলম ধরার বৈজ্ঞানিক কৌশল", "Scientific technique of holding a pen correctly"),
      color: "bg-[#7cb342]",
      lightColor: "bg-[#f1f8e9]",
      icon: <img src="https://api.iconify.design/noto:writing-hand.svg" className="w-10 h-10" alt="icon" />
    },
    {
      id: 2,
      text: t("সঠিক বসার ভঙ্গি, খাতা ও হাতের আদর্শ অবস্থান", "Correct sitting posture, ideal position of notebook and hand"),
      color: "bg-[#00897b]",
      lightColor: "bg-[#e0f2f1]",
      icon: <img src="https://api.iconify.design/noto:person-student-light-skin-tone.svg" className="w-10 h-10" alt="icon" />
    },
    {
      id: 3,
      text: t("হাত ও আঙুলের কার্যকর ব্যায়াম (Finger Control Exercises)", "Effective hand and finger exercises (Finger Control Exercises)"),
      color: "bg-[#ffb300]",
      lightColor: "bg-[#fff8e1]",
      icon: <img src="https://api.iconify.design/noto:waving-hand-light-skin-tone.svg" className="w-10 h-10" alt="icon" />
    },
    {
      id: 4,
      text: t("স্বরবর্ণ ও ব্যঞ্জনবর্ণ সুন্দর, স্পষ্ট ও শৈল্পিকভাবে লেখা", "Writing vowels and consonants beautifully, clearly and artistically"),
      color: "bg-[#ab47bc]",
      lightColor: "bg-[#f3e5f5]",
      icon: <div className="text-xl font-bold text-gray-800 leading-tight">অ আ<br/>ক খ</div>
    },
    {
      id: 5,
      text: t("যুক্তবর্ণ, কার, ফলা ও অন্যান্য চিহ্ন লেখার সঠিক নিয়ম", "Correct rules for writing conjunct letters, modifiers, and other marks"),
      color: "bg-[#ef5350]",
      lightColor: "bg-[#ffebee]",
      icon: <div className="text-xl font-bold text-gray-800 leading-tight">ক্ষ ত্র<br/>জ্ঞ ণ্ড</div>
    },
    {
      id: 6,
      text: t("অক্ষরের সমান উচ্চতা, আকার, দূরত্ব ও ভারসাম্য বজায় রাখার কৌশল", "Techniques for maintaining equal height, size, distance, and balance of letters"),
      color: "bg-[#1e88e5]",
      lightColor: "bg-[#e3f2fd]",
      icon: (
        <div className="flex flex-col items-center justify-center">
          <div className="w-10 h-px bg-blue-500 mb-1"></div>
          <span className="text-xl font-bold text-gray-800">অ অ অ</span>
          <div className="w-10 h-px bg-blue-500 mt-1"></div>
        </div>
      )
    },
    {
      id: 7,
      text: t("শব্দ, বাক্য ও অনুচ্ছেদ পরিচ্ছন্ন ও আকর্ষণীয়ভাবে লেখার পদ্ধতি", "Method of writing words, sentences, and paragraphs cleanly and attractively"),
      color: "bg-[#689f38]",
      lightColor: "bg-[#f1f8e9]",
      icon: <img src="https://api.iconify.design/noto:open-book.svg" className="w-10 h-10" alt="icon" />
    },
    {
      id: 8,
      text: t("দ্রুত, পরিষ্কার ও নির্ভুল লেখার স্মার্ট টেকনিক", "Smart techniques for fast, clear, and accurate writing"),
      color: "bg-[#fb8c00]",
      lightColor: "bg-[#fff3e0]",
      icon: <img src="https://api.iconify.design/noto:stopwatch.svg" className="w-10 h-10" alt="icon" />
    },
    {
      id: 9,
      text: t("হাতের লেখার সাধারণ ভুল শনাক্ত ও সংশোধনের কার্যকর উপায়", "Effective ways to identify and correct common handwriting mistakes"),
      color: "bg-[#7e57c2]",
      lightColor: "bg-[#ede7f6]",
      icon: <img src="https://api.iconify.design/noto:magnifying-glass-tilted-right.svg" className="w-10 h-10" alt="icon" />
    },
    {
      id: 10,
      text: t("অনুচ্ছেদ, কবিতা, গল্প ও সৃজনশীল লেখা অনুশীলনের বিশেষ পদ্ধতি", "Special methods for practicing paragraphs, poems, stories, and creative writing"),
      color: "bg-[#1976d2]",
      lightColor: "bg-[#e3f2fd]",
      icon: <img src="https://api.iconify.design/noto:spiral-notepad.svg" className="w-10 h-10" alt="icon" />
    },
    {
      id: 11,
      text: t("পরীক্ষার খাতায় সুন্দর, গোছানো ও পরীক্ষক-বান্ধব উত্তর লেখার কৌশল", "Techniques for writing beautiful, organized, and examiner-friendly answers in exam papers"),
      color: "bg-[#00897b]",
      lightColor: "bg-[#e0f2f1]",
      icon: <img src="https://api.iconify.design/noto:check-box-with-check.svg" className="w-10 h-10" alt="icon" />
    },
    {
      id: 12,
      text: t("প্রতিদিন মাত্র ১০ মিনিটের স্মার্ট প্র্যাকটিস রুটিন", "Smart practice routine of only 10 minutes a day"),
      color: "bg-[#ffca28]",
      lightColor: "bg-[#fff8e1]",
      icon: (
        <div className="flex flex-col items-center">
          <img src="https://api.iconify.design/noto:clock.svg" className="w-8 h-8" alt="icon" />
          <span className="text-[10px] font-bold text-gray-700 leading-none mt-1">10 মিনিট</span>
        </div>
      )
    }
  ];

  const bonuses = [
    {
      text: t("পরীক্ষার খাতায় এমনভাবে লেখার কৌশল, যা উপস্থাপনাকে আরও আকর্ষণীয় করে।", "Techniques for writing in exam papers in a way that makes the presentation more attractive."),
      icon: <img src="https://api.iconify.design/noto:memo.svg" className="w-8 h-8" alt="icon" />
    },
    {
      text: t("নির্ধারিত সময়ের মধ্যে সব প্রশ্নের উত্তর সম্পন্ন করার কার্যকর লেখার কৌশল।", "Effective writing techniques to complete all answers within the stipulated time."),
      icon: <img src="https://api.iconify.design/noto:hourglass-done.svg" className="w-8 h-8" alt="icon" />
    },
    {
      text: t("নিজস্ব AI-ভিত্তিক স্মার্ট অ্যাপের মাধ্যমে হাতের লেখা বিশ্লেষণ, মূল্যায়ন ও ব্যক্তিগত পরামর্শ।", "Handwriting analysis, evaluation, and personal advice through our own AI-based smart app."),
      icon: <img src="https://api.iconify.design/noto:mobile-phone.svg" className="w-8 h-8" alt="icon" />
    },
    {
      text: t("রোল নম্বর, মার্জিন ও উত্তরপত্রের বিন্যাসসহ পরীক্ষার খাতা সঠিকভাবে পূরণের নিয়ম।", "Rules for correctly filling out exam papers including roll number, margin, and answer sheet layout."),
      icon: <img src="https://api.iconify.design/noto:clipboard.svg" className="w-8 h-8" alt="icon" />
    },
    {
      text: t("ব্যক্তিগত দুর্বলতা শনাক্ত করে ধাপে ধাপে উন্নতির পরিকল্পনা।", "Step-by-step improvement plan by identifying personal weaknesses."),
      icon: <img src="https://api.iconify.design/noto:direct-hit.svg" className="w-8 h-8" alt="icon" />
    },
    {
      text: t("বাস্তব পরীক্ষার খাতার নমুনা বিশ্লেষণ ও অনুশীলন।", "Analysis and practice with real exam paper samples."),
      icon: <img src="https://api.iconify.design/noto:magnifying-glass-tilted-right.svg" className="w-8 h-8" alt="icon" />
    },
    {
      text: t("আজীবন উন্নতির জন্য প্রমাণিত হ্যান্ডরাইটিং সিস্টেম ও গাইডলাইন।", "Proven handwriting system and guidelines for lifelong improvement."),
      icon: <img src="https://api.iconify.design/noto:chart-increasing.svg" className="w-8 h-8" alt="icon" />
    }
  ];

  return (
    <section id="course-plan" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        {/* Infographic Container */}
        <div className="bg-[#eef5fa] dark:bg-slate-800 rounded-3xl overflow-hidden shadow-2xl pb-10">
          
          {/* Header Area */}
          <div className="relative pt-16 pb-12 px-6 text-center">
            
            {/* Left Pencil Stand Illustration */}
            <div className="absolute left-6 top-16 hidden md:flex flex-col items-center">
              <div className="relative w-24 h-24">
                <div className="absolute bottom-0 w-16 h-20 bg-emerald-600 rounded-b-lg border-2 border-gray-800 left-4 z-20 overflow-hidden">
                  <div className="w-full h-2 bg-emerald-400 absolute top-2"></div>
                </div>
                {/* Pencils */}
                <div className="absolute bottom-10 left-6 w-3 h-20 bg-blue-400 border-2 border-gray-800 rounded-t transform -rotate-12 origin-bottom z-10"></div>
                <div className="absolute bottom-10 left-10 w-3 h-24 bg-yellow-400 border-2 border-gray-800 rounded-t z-10"></div>
                <div className="absolute bottom-10 left-14 w-3 h-16 bg-red-400 border-2 border-gray-800 rounded-t transform rotate-12 origin-bottom z-10"></div>
              </div>
            </div>

            {/* Right Hand Illustration */}
            <div className="absolute right-0 top-0 hidden md:block">
              <div className="relative w-48 h-48">
                {/* Notebook */}
                <div className="absolute top-20 right-4 w-32 h-24 bg-white border-2 border-gray-300 rounded shadow-sm transform -rotate-6">
                  <div className="w-full h-full border-l-2 border-blue-200 ml-4"></div>
                  <div className="w-24 h-px bg-gray-200 absolute top-4 left-6"></div>
                  <div className="w-24 h-px bg-gray-200 absolute top-8 left-6"></div>
                  <div className="w-24 h-px bg-gray-200 absolute top-12 left-6"></div>
                </div>
                {/* A circle with 'অ' */}
                <div className="absolute top-6 right-10 w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">অ</div>
                {/* Hand with Pen (Stylized icon) */}
                <div className="absolute top-10 right-0">
                  <img src="https://api.iconify.design/noto:writing-hand.svg" className="w-32 h-32 transform -rotate-12" alt="writing" />
                </div>
              </div>
            </div>

            {/* Title Text */}
            <div className="flex flex-col items-center justify-center gap-1 z-20 relative">
              <span className="text-4xl md:text-5xl font-black text-[#1b3b6d] dark:text-blue-300 drop-shadow-sm">বাংলা স্মার্ট</span>
              <span className="text-5xl md:text-6xl font-black text-[#116c52] dark:text-emerald-400 drop-shadow-sm my-1">হাতের লেখা</span>
              <span className="text-4xl md:text-5xl font-black text-[#1b3b6d] dark:text-blue-300 drop-shadow-sm">মাস্টারি কোর্স</span>
            </div>

            {/* Blue Ribbon */}
            <div className="mt-12 relative flex justify-center z-20">
              <div className="relative z-10 bg-[#1e5bbd] text-white px-8 md:px-16 py-3 text-xl md:text-2xl font-bold shadow-lg flex items-center">
                {t("কোর্সে যা যা শিখবেন", "What You Will Learn in the Course")}
              </div>
              <div className="absolute top-4 -left-4 w-12 h-10 bg-[#153e85] transform -skew-x-12 -z-10"></div>
              <div className="absolute top-4 -right-4 w-12 h-10 bg-[#153e85] transform skew-x-12 -z-10"></div>
            </div>
          </div>

          {/* Grid Items */}
          <div className="px-4 md:px-10 pb-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              {courseItems.map((item) => (
                <div key={item.id} className="flex bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 min-h-[5rem]">
                  {/* Left Number */}
                  <div className={\`\${item.color} flex items-center justify-center w-16 md:w-20 shrink-0\`}>
                    <span className="text-3xl font-black text-white">
                      {item.id.toString().padStart(2, '0')}
                    </span>
                  </div>
                  {/* Middle Text */}
                  <div className="p-3 md:p-4 flex-1 flex items-center">
                    <p className="text-sm md:text-base font-bold text-gray-800 dark:text-gray-100 leading-snug">
                      {item.text}
                    </p>
                  </div>
                  {/* Right Icon */}
                  <div className={\`w-16 md:w-20 shrink-0 flex items-center justify-center \${item.lightColor} dark:bg-gray-700\`}>
                    {item.icon}
                  </div>
                </div>
              ))}
            </div>

            {/* Item 13 - Full width */}
            <div className="mt-4 flex bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 min-h-[5rem]">
               <div className="bg-[#1565c0] flex items-center justify-center w-16 md:w-20 shrink-0">
                  <span className="text-3xl font-black text-white">13</span>
               </div>
               <div className="p-4 flex-1 flex items-center">
                  <p className="text-base md:text-lg font-bold text-gray-800 dark:text-gray-100 leading-snug">
                    {t("চূড়ান্ত মূল্যায়ন, হ্যান্ডরাইটিং মাস্টারি চ্যালেঞ্জ এবং সার্টিফিকেট", "Final evaluation, handwriting mastery challenge, and certificate")}
                  </p>
               </div>
               <div className="w-20 md:w-24 shrink-0 flex items-center justify-center bg-[#e3f2fd] dark:bg-gray-700">
                  <img src="https://api.iconify.design/noto:trophy.svg" className="w-12 h-12" alt="icon" />
               </div>
            </div>
          </div>

          {/* Bonus Section */}
          <div className="px-4 md:px-10 mt-6 relative">
            <div className="flex justify-center mb-8 relative z-20">
              <div className="relative z-10 bg-[#dc2626] text-white px-8 py-2 text-xl font-bold uppercase tracking-wider shadow-md">
                {t("স্পেশাল বোনাস", "Special Bonus")}
              </div>
              <div className="absolute top-2 -left-3 w-8 h-8 bg-[#991b1b] transform -skew-x-12 -z-10"></div>
              <div className="absolute top-2 -right-3 w-8 h-8 bg-[#991b1b] transform skew-x-12 -z-10"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              {bonuses.map((bonus, index) => (
                <div key={index} className="flex items-center gap-3 bg-white dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700 shadow-sm">
                  <img src="https://api.iconify.design/noto:star.svg" className="w-5 h-5 shrink-0" alt="star" />
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-snug flex-1">
                    {bonus.text}
                  </p>
                  <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded border border-gray-100 dark:border-gray-600">
                    {bonus.icon}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Item 7 in Bonus - Center if odd, but let's let grid handle it. It's already in the list */}
          </div>

          {/* Footer Banner */}
          <div className="mt-10 mx-4 md:mx-10 bg-[#1b3b6d] rounded-xl p-6 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 bottom-0 w-32 bg-blue-600 opacity-20 transform skew-x-12 translate-x-10"></div>
            <img src="https://api.iconify.design/noto:pen.svg" className="w-12 h-12 shrink-0 z-10" alt="pen" />
            <div className="z-10">
              <h4 className="text-xl md:text-2xl font-bold mb-1">
                {t("সুন্দর লেখা, সফলতা নিশ্চিত", "Beautiful Writing, Success Guaranteed")}
              </h4>
              <p className="text-blue-200 font-medium text-sm md:text-base">
                {t("প্রতিদিন অনুশীলন, আজীবন উন্নতি", "Daily Practice, Lifelong Improvement")}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync('src/components/sections/CoursePlan.tsx', content);
console.log("Updated CoursePlan.tsx");
