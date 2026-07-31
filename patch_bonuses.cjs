const fs = require('fs');
let code = fs.readFileSync('src/components/sections/CoursePlan.tsx', 'utf8');

const bonusReplacement = `const bonuses = [
    {
      text: t("পরীক্ষার খাতায় এমনভাবে লেখার কৌশল, যা উপস্থাপনাকে আরও আকর্ষণীয় করে।", "Techniques for writing in exam papers in a way that makes the presentation more attractive."),
      icon: <PenTool className="w-6 h-6 shrink-0 text-amber-500 mt-0.5" />
    },
    {
      text: t("নির্ধারিত সময়ের মধ্যে সব প্রশ্নের উত্তর সম্পন্ন করার কার্যকর লেখার কৌশল।", "Effective writing techniques to complete all answers within the stipulated time."),
      icon: <Timer className="w-6 h-6 shrink-0 text-amber-500 mt-0.5" />
    },
    {
      text: t("নিজস্ব AI-ভিত্তিক স্মার্ট অ্যাপের মাধ্যমে হাতের লেখা বিশ্লেষণ, মূল্যায়ন ও ব্যক্তিগত পরামর্শ।", "Handwriting analysis, evaluation, and personal advice through our own AI-based smart app."),
      icon: <Search className="w-6 h-6 shrink-0 text-amber-500 mt-0.5" />
    },
    {
      text: t("রোল নম্বর, মার্জিন ও উত্তরপত্রের বিন্যাসসহ পরীক্ষার খাতা সঠিকভাবে পূরণের নিয়ম।", "Rules for correctly filling out exam papers including roll number, margin, and answer sheet layout."),
      icon: <FileCheck className="w-6 h-6 shrink-0 text-amber-500 mt-0.5" />
    },
    {
      text: t("ব্যক্তিগত দুর্বলতা শনাক্ত করে ধাপে ধাপে উন্নতির পরিকল্পনা।", "Step-by-step improvement plan by identifying personal weaknesses."),
      icon: <Target className="w-6 h-6 shrink-0 text-amber-500 mt-0.5" />
    },
    {
      text: t("বাস্তব পরীক্ষার খাতার নমুনা বিশ্লেষণ ও অনুশীলন।", "Analysis and practice with real exam paper samples."),
      icon: <Search className="w-6 h-6 shrink-0 text-amber-500 mt-0.5" />
    },
    {
      text: t("আজীবন উন্নতির জন্য প্রমাণিত হ্যান্ডরাইটিং সিস্টেম ও গাইডলাইন।", "Proven handwriting system and guidelines for lifelong improvement."),
      icon: <TrendingUp className="w-6 h-6 shrink-0 text-amber-500 mt-0.5" />
    }
  ];`;

code = code.replace(/const bonuses = \[\s*\{\s*text: t\("পরীক্ষার খাতায়[\s\S]*?\];/, bonusReplacement);

code = code.replace(/<Star className="w-6 h-6 shrink-0 text-amber-500 fill-amber-500 mt-0\.5" \/>/, '{bonus.icon}');

fs.writeFileSync('src/components/sections/CoursePlan.tsx', code);
console.log("Patched bonuses");
