const fs = require('fs');
let code = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');

const target = `            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
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
            </div>`;

const replacement = `            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[11px] font-black text-blue-800 italic shadow-sm">VISA</div>
              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded flex items-center justify-center shadow-sm">
                <div className="w-3.5 h-3.5 bg-red-500 rounded-full opacity-90"></div>
                <div className="w-3.5 h-3.5 bg-yellow-400 rounded-full opacity-90 -ml-1.5"></div>
              </div>
              <div className="px-3 py-1.5 bg-blue-600 border border-blue-700 rounded text-[10px] font-bold text-white tracking-widest shadow-sm">AMEX</div>
              <div className="px-3 py-1.5 bg-[#e2136e] rounded text-[11px] font-bold text-white shadow-sm flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current"><path d="M12 2L2 7l10 5 10-5-10-5zm0 22l-10-5V9l10 5 10-5v10l-10 5z"/></svg>
                {t("bKash", "বিকাশ")}
              </div>
              <div className="px-3 py-1.5 bg-[#f04f23] rounded text-[11px] font-bold text-white shadow-sm flex items-center gap-1">
                {t("Nagad", "নগদ")}
              </div>
              <div className="px-3 py-1.5 bg-[#8c1596] rounded text-[11px] font-bold text-white shadow-sm flex items-center gap-1">
                {t("Rocket", "রকেট")}
              </div>
              <div className="px-3 py-1.5 bg-[#00529b] rounded text-[11px] font-black text-[#f7a600] shadow-sm flex items-center gap-1">
                {t("upay", "উপায়")}
              </div>
              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[11px] font-bold text-[#005A9C] shadow-sm">
                {t("SureCash", "শিওরক্যাশ")}
              </div>
              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[11px] font-bold text-[#009933] shadow-sm flex items-center gap-1">
                <div className="w-3 h-3 bg-red-500 rounded-full flex items-center justify-center text-[6px] text-white">T</div>
                {t("tap", "ট্যাপ")}
              </div>
              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[10px] font-bold text-[#005A9C] shadow-sm flex items-center gap-1">
                <div className="w-3 h-3 rounded-full border border-[#005A9C] flex items-center justify-center text-[6px]">I</div>
                {t("DBBL Nexus", "নেক্সাস পে")}
              </div>
              <div className="px-3 py-1.5 bg-[#d41c2c] rounded text-[10px] font-bold text-white shadow-sm">
                {t("City Touch", "সিটি টাচ")}
              </div>
              <div className="px-3 py-1.5 bg-[#006cb7] rounded text-[10px] font-bold text-white shadow-sm">
                {t("BRAC Bank", "ব্র্যাক ব্যাংক")}
              </div>
              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[10px] font-bold text-blue-600 shadow-sm mt-2 w-full lg:w-auto text-center lg:text-left flex justify-center">
                Verified by SSLCommerz
              </div>
            </div>`;

if(code.includes(target)) {
  fs.writeFileSync('src/components/layout/Footer.tsx', code.replace(target, replacement));
  console.log("Patched successfully");
} else {
  console.log("Target not found!");
}
