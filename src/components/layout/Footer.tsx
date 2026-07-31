import { motion } from "motion/react";
import {
  Mail,
  Facebook,
  Youtube,
  Linkedin,
  MessageCircle,
  Instagram,
  MapPin,
  Phone,
  Smartphone
} from "lucide-react";
import { LiveTimeAndDate } from "../ui/LiveTimeAndDate";
import { MapEmbed } from "./MapEmbed";
import { useLanguage } from "../../lib/LanguageContext";

function TikTokIcon({ size = 24, ...props }: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 448 512" fill="currentColor" {...props}>
      <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
    </svg>
  );
}

function XIcon({ size = 24, ...props }: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512" fill="currentColor" {...props}>
      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.6 318.1 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
    </svg>
  );
}

export function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer id="contact" className="bg-gray-100 dark:bg-[#111] pt-16 pb-8 border-t border-gray-200 dark:border-gray-800" style={{ fontFamily: language === 'bn' ? "'Kalpurush', sans-serif" : undefined }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Map Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {t("Contact Us", "যোগাযোগ করুন")}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {t("Find us on the map or reach out via our contact channels.", "ম্যাপে আমাদের খুঁজুন অথবা আমাদের সাথে যোগাযোগ করুন।")}
            </p>
          </div>
          <MapEmbed />
          <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 font-medium mt-4">
            <MapPin size={18} className="text-brand shrink-0" />
            <span className="text-center">
              D Block, Aftabnagar Residential Area, Rampura, Dhaka-1212, Bangladesh
            </span>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & App */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Mahdi Handwriting Academy
            </h3>
            <p className="text-gray-600 dark:text-gray-400 font-medium mb-4">
              {t("Download our mobile app", "আমাদের মোবাইল অ্যাপ ডাউনলোড করুন")}
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <a href="#" className="flex items-center gap-3 bg-gray-900 text-white px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors">
                <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider leading-none">{t("GET IT ON", "GET IT ON")}</span>
                  <span className="text-sm font-semibold leading-none mt-1">Google Play</span>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 bg-gray-900 text-white px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors">
                <svg viewBox="0 0 384 512" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider leading-none">{t("Download on the", "Download on the")}</span>
                  <span className="text-sm font-semibold leading-none mt-1">App Store</span>
                </div>
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
              {t("Company", "কোম্পানি")}
            </h4>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400 font-medium">
              <li><a href="#" className="hover:text-brand transition-colors">{t("Career / Recruitment Notice", "ক্যারিয়ার / নিয়োগ বিজ্ঞপ্তি")}</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">{t("Join as a teacher", "শিক্ষক হিসেবে যোগ দিন")}</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">{t("Affiliate Registration", "অ্যাফিলিয়েট রেজিস্ট্রেশন")}</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">{t("Affiliate Verification Portal", "অ্যাফিলিয়েট ভেরিফিকেশন পোর্টাল")}</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">{t("Privacy Policy", "প্রাইভেসি পলিসি")}</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">{t("Refund Policy", "রিফান্ড পলিসি")}</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">{t("User Terms", "ব্যবহারের শর্তাবলী")}</a></li>
            </ul>
          </div>

          {/* Column 3: Other */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
              {t("Other", "অন্যান্য")}
            </h4>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400 font-medium">
              <li><a href="#" className="hover:text-brand transition-colors">{t("Free Notes & Guides", "ফ্রি নোট এবং গাইড")}</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">{t("Job Preparation Courses", "চাকরি প্রস্তুতির কোর্স")}</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">{t("Verify certificate", "সার্টিফিকেট যাচাই করুন")}</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">{t("Free download", "ফ্রি ডাউনলোড")}</a></li>
            </ul>
          </div>

          {/* Column 4: Communication */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
              {t("Our communication media", "আমাদের যোগাযোগের মাধ্যম")}
            </h4>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400 font-medium mb-6">
              <li>
                <span className="block text-sm text-gray-500">{t("Call", "কল")}: +880 1993 479 343 (24x7)</span>
                <span className="block text-sm text-gray-500">{t("WhatsApp", "হোয়াটসঅ্যাপ")}: +8801993479343 (24x7)</span>
              </li>
              <li>
                <span className="block text-sm text-gray-500">{t("From outside the country", "দেশের বাইরে থেকে")}: +880 1993479343</span>
              </li>
              <li>
                <span className="block text-sm text-gray-500">{t("Email", "ইমেইল")}: support@mahdihandwriting.com</span>
                <span className="block text-sm text-gray-500">{t("For partnership", "পার্টনারশিপের জন্য")}: partnership@mahdihandwriting.com</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-3">
              <a href="https://www.facebook.com/share/1ELc79F82H/" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-brand hover:text-white transition-colors text-gray-700 dark:text-gray-300">
                <Facebook size={18} />
              </a>
              <a href="https://youtube.com/@MahdiHandwritingbd" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-brand hover:text-white transition-colors text-gray-700 dark:text-gray-300">
                <Youtube size={18} />
              </a>
              <a href="https://www.linkedin.com/in/md-mahdi-hasan-riyad-1034a8204" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-brand hover:text-white transition-colors text-gray-700 dark:text-gray-300">
                <Linkedin size={18} />
              </a>
              <a href="https://www.tiktok.com/@mahdihandwriting99" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-brand hover:text-white transition-colors text-gray-700 dark:text-gray-300">
                <TikTokIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="pt-8 mb-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col lg:flex-row items-center gap-4 bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-800">
            <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">
              {t("Pay With", "পে করুন")}
            </span>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <div className="px-4 py-2 bg-white border border-gray-200 rounded text-sm font-black text-blue-800 italic shadow-sm flex items-center h-10">VISA</div>
              
              <div className="px-4 py-2 bg-white border border-gray-200 rounded text-xs font-bold text-gray-800 shadow-sm flex items-center h-10">
                <div className="flex items-center -mr-1">
                  <div className="w-4 h-4 bg-red-500 rounded-full opacity-90"></div>
                  <div className="w-4 h-4 bg-yellow-400 rounded-full opacity-90 -ml-2"></div>
                </div>
                <span className="ml-2">mastercard</span>
              </div>
              
              <div className="px-3 bg-white border border-gray-200 rounded shadow-sm flex items-center gap-2 h-10 overflow-hidden">
                <img src="https://raw.githubusercontent.com/ultraDevs/Bangladeshi-Payment-Gateways/master/assets/images/Bkash.png" alt="bKash" className="h-6 object-contain" />
              </div>
              
              <div className="px-3 bg-white border border-gray-200 rounded shadow-sm flex items-center gap-2 h-10 overflow-hidden">
                <img src="https://raw.githubusercontent.com/ultraDevs/Bangladeshi-Payment-Gateways/master/assets/images/Nagad.png" alt="Nagad" className="h-8 object-contain" />
              </div>
              
              <div className="px-3 bg-white border border-gray-200 rounded shadow-sm flex items-center gap-2 h-10 overflow-hidden">
                <img src="https://raw.githubusercontent.com/ultraDevs/Bangladeshi-Payment-Gateways/master/assets/images/Rocket.png" alt="Rocket" className="h-6 object-contain" />
              </div>

              <div className="px-3 bg-white border border-gray-200 rounded shadow-sm flex items-center gap-2 h-10 overflow-hidden">
                <img src="https://raw.githubusercontent.com/ultraDevs/Bangladeshi-Payment-Gateways/master/assets/images/Upay.png" alt="Upay" className="h-6 object-contain" />
              </div>

              <div className="px-3 bg-white border border-gray-200 rounded shadow-sm flex items-center gap-2 h-10 overflow-hidden">
                <img src="/payment/dbbl.svg" alt="DBBL" className="h-6 object-contain" />
              </div>
              
              <div className="px-3 bg-white border border-gray-200 rounded shadow-sm flex items-center gap-2 h-10 overflow-hidden">
                <img src="/payment/brac.svg" alt="BRAC Bank" className="h-6 object-contain" />
              </div>

              <div className="px-3 bg-white border border-gray-200 rounded shadow-sm flex items-center gap-2 h-10 overflow-hidden">
                <img src="/payment/islami.svg" alt="Islami Bank" className="h-6 object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 font-medium">
          <p>© {new Date().getFullYear()} Mahdi Handwriting Academy. All Rights Reserved.</p>
          <div className="flex items-center flex-wrap gap-4 md:gap-6 mt-4 md:mt-0 text-xs md:text-sm">
            <a href="#" className="hover:text-brand transition-colors">{t("Terms and Conditions", "শর্তাবলী")}</a>
            <a href="#" className="hover:text-brand transition-colors">{t("Privacy Policy", "প্রাইভেসি পলিসি")}</a>
            <a href="#" className="hover:text-brand transition-colors">{t("Refund & Return Policy", "রিফান্ড এবং রিটার্ন পলিসি")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
