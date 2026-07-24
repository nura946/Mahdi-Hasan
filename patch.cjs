const fs = require('fs');
let code = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');

const target = `        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 font-medium">
          <p>© {new Date().getFullYear()} Mahdi Handwriting Academy. All Rights Reserved.</p>
        </div>`;

const replacement = `        {/* Payment Methods */}
        <div className="pt-8 mb-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col lg:flex-row items-center gap-4 bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-800">
            <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">
              {t("Pay With", "পে করুন")}
            </span>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[11px] font-black text-blue-800 italic shadow-sm">VISA</div>
              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded flex items-center justify-center shadow-sm">
                <div className="w-3.5 h-3.5 bg-red-500 rounded-full opacity-90"></div>
                <div className="w-3.5 h-3.5 bg-yellow-400 rounded-full opacity-90 -ml-1.5"></div>
              </div>
              <div className="px-3 py-1.5 bg-blue-600 border border-blue-700 rounded text-[10px] font-bold text-white tracking-widest shadow-sm">AMEX</div>
              <div className="px-3 py-1.5 bg-[#e2136e] rounded text-[11px] font-bold text-white shadow-sm flex items-center gap-1">
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current"><path d="M12 2L2 7l10 5 10-5-10-5zm0 22l-10-5V9l10 5 10-5v10l-10 5z"/></svg>
                bKash
              </div>
              <div className="px-3 py-1.5 bg-[#f04f23] rounded text-[11px] font-bold text-white shadow-sm">Nagad</div>
              <div className="px-3 py-1.5 bg-[#8c1596] rounded text-[11px] font-bold text-white shadow-sm">Rocket</div>
              <div className="px-3 py-1.5 bg-[#00529b] rounded text-[11px] font-black text-[#f7a600] shadow-sm">upay</div>
              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[10px] font-bold text-gray-800 shadow-sm">NexusPay</div>
              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[10px] font-bold text-gray-800 shadow-sm">City Touch</div>
              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[10px] font-bold text-blue-600 shadow-sm">SSLCommerz</div>
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
        </div>`;

if(code.includes(target)) {
  fs.writeFileSync('src/components/layout/Footer.tsx', code.replace(target, replacement));
  console.log("Patched successfully");
} else {
  console.log("Target not found!");
}
