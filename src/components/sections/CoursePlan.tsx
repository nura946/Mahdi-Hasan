import React from 'react';
import { useLanguage } from '../../lib/LanguageContext';

export function CoursePlan() {
  const { t } = useLanguage();

  const courseItems = [
    {
      id: 1,
      text: t("সঠিকভাবে কলম ধরার বৈজ্ঞানিক কৌশল", "Scientific technique of holding a pen correctly"),
      color: "bg-emerald-500",
      lightColor: "bg-emerald-50 dark:bg-emerald-900/20",
      icon: <img src="https://api.iconify.design/noto:writing-hand.svg" className="w-10 h-10 drop-shadow-sm" alt="icon" />
    },
    {
      id: 2,
      text: t("সঠিক বসার ভঙ্গি, খাতা ও হাতের আদর্শ অবস্থান", "Correct sitting posture, ideal position of notebook and hand"),
      color: "bg-teal-500",
      lightColor: "bg-teal-50 dark:bg-teal-900/20",
      icon: <img src="https://api.iconify.design/noto:person-student-light-skin-tone.svg" className="w-10 h-10 drop-shadow-sm" alt="icon" />
    },
    {
      id: 3,
      text: t("হাত ও আঙুলের কার্যকর ব্যায়াম (Finger Control Exercises)", "Effective hand and finger exercises (Finger Control Exercises)"),
      color: "bg-amber-400",
      lightColor: "bg-amber-50 dark:bg-amber-900/20",
      icon: <img src="https://api.iconify.design/noto:waving-hand-light-skin-tone.svg" className="w-10 h-10 drop-shadow-sm" alt="icon" />
    },
    {
      id: 4,
      text: t("স্বরবর্ণ ও ব্যঞ্জনবর্ণ সুন্দর, স্পষ্ট ও শৈল্পিকভাবে লেখা", "Writing vowels and consonants beautifully, clearly and artistically"),
      color: "bg-purple-500",
      lightColor: "bg-purple-50 dark:bg-purple-900/20",
      icon: <div className="text-xl font-bold text-gray-800 dark:text-gray-200 leading-tight drop-shadow-sm">অ আ<br/>ক খ</div>
    },
    {
      id: 5,
      text: t("যুক্তবর্ণ, কার, ফলা ও অন্যান্য চিহ্ন লেখার সঠিক নিয়ম", "Correct rules for writing conjunct letters, modifiers, and other marks"),
      color: "bg-rose-500",
      lightColor: "bg-rose-50 dark:bg-rose-900/20",
      icon: <div className="text-xl font-bold text-gray-800 dark:text-gray-200 leading-tight drop-shadow-sm">ক্ষ ত্র<br/>জ্ঞ ণ্ড</div>
    },
    {
      id: 6,
      text: t("অক্ষরের সমান উচ্চতা, আকার, দূরত্ব ও ভারসাম্য বজায় রাখার কৌশল", "Techniques for maintaining equal height, size, distance, and balance of letters"),
      color: "bg-blue-500",
      lightColor: "bg-blue-50 dark:bg-blue-900/20",
      icon: (
        <div className="flex flex-col items-center justify-center drop-shadow-sm">
          <div className="w-10 h-px bg-blue-500 mb-1"></div>
          <span className="text-xl font-bold text-gray-800 dark:text-gray-200">অ অ অ</span>
          <div className="w-10 h-px bg-blue-500 mt-1"></div>
        </div>
      )
    },
    {
      id: 7,
      text: t("শব্দ, বাক্য ও অনুচ্ছেদ পরিচ্ছন্ন ও আকর্ষণীয়ভাবে লেখার পদ্ধতি", "Method of writing words, sentences, and paragraphs cleanly and attractively"),
      color: "bg-lime-600",
      lightColor: "bg-lime-50 dark:bg-lime-900/20",
      icon: <img src="https://api.iconify.design/noto:open-book.svg" className="w-10 h-10 drop-shadow-sm" alt="icon" />
    },
    {
      id: 8,
      text: t("দ্রুত, পরিষ্কার ও নির্ভুল লেখার স্মার্ট টেকনিক", "Smart techniques for fast, clear, and accurate writing"),
      color: "bg-orange-500",
      lightColor: "bg-orange-50 dark:bg-orange-900/20",
      icon: <img src="https://api.iconify.design/noto:stopwatch.svg" className="w-10 h-10 drop-shadow-sm" alt="icon" />
    },
    {
      id: 9,
      text: t("হাতের লেখার সাধারণ ভুল শনাক্ত ও সংশোধনের কার্যকর উপায়", "Effective ways to identify and correct common handwriting mistakes"),
      color: "bg-indigo-500",
      lightColor: "bg-indigo-50 dark:bg-indigo-900/20",
      icon: <img src="https://api.iconify.design/noto:magnifying-glass-tilted-right.svg" className="w-10 h-10 drop-shadow-sm" alt="icon" />
    },
    {
      id: 10,
      text: t("অনুচ্ছেদ, কবিতা, গল্প ও সৃজনশীল লেখা অনুশীলনের বিশেষ পদ্ধতি", "Special methods for practicing paragraphs, poems, stories, and creative writing"),
      color: "bg-cyan-600",
      lightColor: "bg-cyan-50 dark:bg-cyan-900/20",
      icon: <img src="https://api.iconify.design/noto:spiral-notepad.svg" className="w-10 h-10 drop-shadow-sm" alt="icon" />
    },
    {
      id: 11,
      text: t("পরীক্ষার খাতায় সুন্দর, গোছানো ও পরীক্ষক-বান্ধব উত্তর লেখার কৌশল", "Techniques for writing beautiful, organized, and examiner-friendly answers in exam papers"),
      color: "bg-emerald-600",
      lightColor: "bg-emerald-50 dark:bg-emerald-900/20",
      icon: <img src="https://api.iconify.design/noto:check-box-with-check.svg" className="w-10 h-10 drop-shadow-sm" alt="icon" />
    },
    {
      id: 12,
      text: t("প্রতিদিন মাত্র ১০ মিনিটের স্মার্ট প্র্যাকটিস রুটিন", "Smart practice routine of only 10 minutes a day"),
      color: "bg-yellow-500",
      lightColor: "bg-yellow-50 dark:bg-yellow-900/20",
      icon: (
        <div className="flex flex-col items-center drop-shadow-sm">
          <img src="https://api.iconify.design/noto:clock.svg" className="w-8 h-8" alt="icon" />
          <span className="text-[10px] font-bold text-gray-700 dark:text-gray-300 leading-none mt-1">10 মিনিট</span>
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
    <section id="course-plan" className="py-24 bg-gray-50/50 dark:bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        
        {/* Main Infographic Container */}
        <div className="bg-[#f8fbff] dark:bg-gray-900/60 rounded-[2rem] border border-blue-100 dark:border-gray-800 shadow-2xl shadow-blue-900/5 overflow-hidden">
          
          {/* Header Area */}
          <div className="relative pt-20 pb-16 px-6 text-center bg-gradient-to-b from-[#eef5fa] to-[#f8fbff] dark:from-gray-800 dark:to-gray-900/60">
            
            {/* Left Decorative Element */}
            <div className="absolute left-8 top-16 hidden lg:flex flex-col items-center opacity-90 hover:scale-105 transition-transform duration-500">
              <div className="relative w-28 h-28">
                <div className="absolute bottom-0 w-20 h-24 bg-gradient-to-b from-emerald-500 to-emerald-700 rounded-b-xl border-4 border-gray-800 left-4 z-20 overflow-hidden shadow-xl">
                  <div className="w-full h-3 bg-emerald-400 absolute top-2"></div>
                  <div className="w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                </div>
                {/* Pencils */}
                <div className="absolute bottom-12 left-6 w-4 h-24 bg-gradient-to-b from-blue-300 to-blue-500 border-4 border-gray-800 rounded-t-sm transform -rotate-12 origin-bottom z-10 shadow-lg"></div>
                <div className="absolute bottom-12 left-12 w-4 h-28 bg-gradient-to-b from-yellow-300 to-yellow-500 border-4 border-gray-800 rounded-t-sm z-10 shadow-lg"></div>
                <div className="absolute bottom-12 left-18 w-4 h-20 bg-gradient-to-b from-red-300 to-red-500 border-4 border-gray-800 rounded-t-sm transform rotate-12 origin-bottom z-10 shadow-lg"></div>
              </div>
            </div>

            {/* Right Decorative Element */}
            <div className="absolute right-4 top-4 hidden lg:block hover:scale-105 transition-transform duration-500">
              <div className="relative w-56 h-56">
                {/* Notebook */}
                <div className="absolute top-24 right-8 w-40 h-28 bg-white dark:bg-gray-800 border-4 border-gray-200 dark:border-gray-700 rounded shadow-xl transform -rotate-6">
                  <div className="w-full h-full border-l-4 border-blue-400/30 ml-4 relative">
                    <div className="w-24 h-1 bg-gray-100 dark:bg-gray-700 absolute top-4 left-4 rounded-full"></div>
                    <div className="w-20 h-1 bg-gray-100 dark:bg-gray-700 absolute top-10 left-4 rounded-full"></div>
                    <div className="w-28 h-1 bg-gray-100 dark:bg-gray-700 absolute top-16 left-4 rounded-full"></div>
                  </div>
                </div>
                {/* Floating Badge */}
                <div className="absolute top-12 right-16 w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-2xl transform rotate-12 border-2 border-white/20">অ</div>
                {/* Hand with Pen */}
                <div className="absolute top-8 -right-4 z-30 drop-shadow-2xl filter">
                  <img src="https://api.iconify.design/noto:writing-hand.svg" className="w-40 h-40 transform -rotate-12" alt="writing" />
                </div>
              </div>
            </div>

            {/* Title Text */}
            <div className="flex flex-col items-center justify-center z-20 relative px-4">
              <h2 className="text-4xl md:text-5xl font-black text-[#1b3b6d] dark:text-blue-400 drop-shadow-sm tracking-tight">বাংলা স্মার্ট</h2>
              <h1 className="text-5xl md:text-[5rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300 drop-shadow-sm my-2 pb-2 leading-none">হাতের লেখা</h1>
              <h2 className="text-4xl md:text-5xl font-black text-[#1b3b6d] dark:text-blue-400 drop-shadow-sm tracking-tight">মাস্টারি কোর্স</h2>
            </div>

            {/* Blue Ribbon */}
            <div className="mt-14 relative flex justify-center z-20">
              <div className="relative z-10 bg-gradient-to-r from-blue-700 to-indigo-700 text-white px-10 md:px-20 py-4 text-xl md:text-2xl font-bold shadow-xl shadow-blue-900/20 flex items-center rounded-sm">
                {t("কোর্সে যা যা শিখবেন", "What You Will Learn in the Course")}
              </div>
              <div className="absolute top-5 -left-5 w-14 h-12 bg-blue-900 transform -skew-x-12 -z-10 shadow-lg"></div>
              <div className="absolute top-5 -right-5 w-14 h-12 bg-blue-900 transform skew-x-12 -z-10 shadow-lg"></div>
            </div>
          </div>

          {/* Grid Items */}
          <div className="px-6 md:px-12 pb-10 relative z-10 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {courseItems.map((item) => (
                <div 
                  key={item.id} 
                  className="flex bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 group cursor-pointer hover:-translate-y-1"
                >
                  {/* Left Number */}
                  <div className={`${item.color} flex items-center justify-center w-16 md:w-20 shrink-0 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <span className="text-3xl font-black text-white relative z-10 drop-shadow-md">
                      {item.id.toString().padStart(2, '0')}
                    </span>
                  </div>
                  {/* Middle Text */}
                  <div className="p-4 md:p-5 flex-1 flex items-center">
                    <p className="text-sm md:text-base font-bold text-gray-800 dark:text-gray-100 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.text}
                    </p>
                  </div>
                  {/* Right Icon */}
                  <div className={`w-16 md:w-24 shrink-0 flex items-center justify-center ${item.lightColor} group-hover:bg-opacity-80 transition-colors`}>
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Item 13 - Full width Special Card */}
            <div className="mt-8 flex bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-blue-500/30 group cursor-pointer hover:-translate-y-1">
               <div className="bg-blue-900/40 flex items-center justify-center w-20 md:w-24 shrink-0 border-r border-white/10">
                  <span className="text-4xl font-black text-white drop-shadow-lg">13</span>
               </div>
               <div className="p-6 md:p-8 flex-1 flex items-center">
                  <p className="text-lg md:text-2xl font-black text-white leading-snug drop-shadow-md">
                    {t("চূড়ান্ত মূল্যায়ন, হ্যান্ডরাইটিং মাস্টারি চ্যালেঞ্জ এবং সার্টিফিকেট", "Final evaluation, handwriting mastery challenge, and certificate")}
                  </p>
               </div>
               <div className="w-24 md:w-32 shrink-0 flex items-center justify-center bg-white/10 backdrop-blur-sm">
                  <div className="group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 drop-shadow-2xl">
                    <img src="https://api.iconify.design/noto:trophy.svg" className="w-16 h-16 md:w-20 md:h-20" alt="icon" />
                  </div>
               </div>
            </div>
          </div>

          {/* Bonus Section */}
          <div className="px-6 md:px-12 mt-4 mb-12 relative">
            <div className="flex justify-center mb-10 relative z-20">
              <div className="relative z-10 bg-gradient-to-r from-red-600 to-rose-600 text-white px-10 py-3 text-xl md:text-2xl font-black uppercase tracking-wider shadow-lg shadow-red-900/20 rounded-sm">
                {t("স্পেশাল বোনাস", "Special Bonus")}
              </div>
              <div className="absolute top-3 -left-4 w-10 h-10 bg-red-900 transform -skew-x-12 -z-10 shadow-lg"></div>
              <div className="absolute top-3 -right-4 w-10 h-10 bg-red-900 transform skew-x-12 -z-10 shadow-lg"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
              {bonuses.map((bonus, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 md:p-5 rounded-xl border-l-4 border-amber-400 dark:border-amber-500 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-amber-50 dark:bg-amber-900/30 rounded-full">
                    <img src="https://api.iconify.design/noto:star.svg" className="w-6 h-6 drop-shadow-sm" alt="star" />
                  </div>
                  <p className="text-sm md:text-base font-bold text-gray-800 dark:text-gray-200 leading-snug flex-1">
                    {bonus.text}
                  </p>
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-600">
                    <div className="drop-shadow-sm">
                      {bonus.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Banner */}
          <div className="mx-6 md:mx-12 mb-10 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
            <div className="absolute top-0 right-0 bottom-0 w-64 bg-white/5 transform skew-x-12 translate-x-20 group-hover:translate-x-0 transition-transform duration-700"></div>
            
            <div className="w-16 h-16 shrink-0 z-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
              <img src="https://api.iconify.design/noto:pen.svg" className="w-10 h-10 group-hover:rotate-45 transition-transform duration-500" alt="pen" />
            </div>
            
            <div className="z-10">
              <h4 className="text-2xl md:text-3xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200 drop-shadow-lg">
                {t("সুন্দর লেখা, সফলতা নিশ্চিত", "Beautiful Writing, Success Guaranteed")}
              </h4>
              <p className="text-gray-300 font-bold tracking-wide text-sm md:text-base uppercase">
                {t("প্রতিদিন অনুশীলন, আজীবন উন্নতি", "Daily Practice, Lifelong Improvement")}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
