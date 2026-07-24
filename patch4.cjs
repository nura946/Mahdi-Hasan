const fs = require('fs');
let code = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');

const target = `            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[11px] font-black text-blue-800 italic shadow-sm">VISA</div>
              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded flex items-center justify-center shadow-sm">
                <div className="w-3.5 h-3.5 bg-red-500 rounded-full opacity-90"></div>
                <div className="w-3.5 h-3.5 bg-yellow-400 rounded-full opacity-90 -ml-1.5"></div>
              </div>
              
              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[10px] font-bold text-gray-800 shadow-sm flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#e2136e]"><path d="M12 2L2 7l10 5 10-5-10-5zm0 22l-10-5V9l10 5 10-5v10l-10 5z"/></svg>
                {t("bKash", "বিকাশ")}
              </div>
              
              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[10px] font-bold text-gray-800 shadow-sm flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#f04f23]"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                {t("Nagad", "নগদ")}
              </div>
              
              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[10px] font-bold text-gray-800 shadow-sm flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#8c1596]"><path d="M3.1 11.2l9.9-5.7 9.9 5.7v1.7L13 7.1v12.3h-2V7.1L3.1 12.8v-1.6z"/></svg>
                {t("Rocket", "রকেট")}
              </div>
              
              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[10px] font-bold text-gray-800 shadow-sm flex items-center gap-1.5">
                <div className="text-[12px] font-black text-[#00529b]">u<span className="text-[#f7a600]">pay</span></div>
                <span className="border-l border-gray-300 h-3 mx-0.5"></span>
                {t("Upay", "উপায়")}
              </div>

              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[10px] font-bold text-gray-800 shadow-sm flex items-center gap-1.5">
                <div className="w-3.5 h-3.5 rounded-full border-2 border-blue-600 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                </div>
                {t("DBBL Nexus", "নেক্সাস পে")}
              </div>
              
              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[10px] font-bold text-gray-800 shadow-sm flex items-center gap-1.5">
                <div className="w-3.5 h-3.5 bg-[#009933] rounded-full flex items-center justify-center text-[7px] text-white font-bold">t</div>
                {t("Tap", "ট্যাপ")}
              </div>
              
              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[10px] font-bold text-gray-800 shadow-sm flex items-center gap-1.5">
                <span className="text-[#005A9C] font-black italic">SureCash</span>
                <span className="border-l border-gray-300 h-3 mx-0.5"></span>
                {t("SureCash", "শিওরক্যাশ")}
              </div>
              
              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[10px] font-bold text-gray-800 shadow-sm flex items-center gap-1.5">
                <div className="text-[#009639] font-black">m<span className="text-[#f47f20]">Cash</span></div>
                <span className="border-l border-gray-300 h-3 mx-0.5"></span>
                {t("mCash", "এমক্যাশ")}
              </div>
              
              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[10px] font-bold text-gray-800 shadow-sm flex items-center gap-1.5">
                <span className="text-red-600 font-black italic">Q</span><span className="text-blue-800 font-bold italic">Cash</span>
                <span className="border-l border-gray-300 h-3 mx-0.5"></span>
                {t("QCash", "কিউ ক্যাশ")}
              </div>
              
              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[10px] font-bold text-gray-800 shadow-sm flex items-center gap-1.5">
                <div className="w-3.5 h-3.5 bg-[#d41c2c] rounded flex items-center justify-center text-[6px] text-white font-black">CT</div>
                {t("City Touch", "সিটি টাচ")}
              </div>

              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[10px] font-bold text-gray-500 shadow-sm mt-2 w-full lg:w-auto text-center lg:text-left flex justify-center">
                <span className="mr-1">Verified by</span> <strong className="text-blue-700 italic font-black text-[11px]">SSLCOMMERZ</strong>
              </div>
            </div>`;

const replacement = `            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[11px] font-black text-blue-800 italic shadow-sm">VISA</div>
              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded flex items-center justify-center shadow-sm">
                <div className="w-3.5 h-3.5 bg-red-500 rounded-full opacity-90"></div>
                <div className="w-3.5 h-3.5 bg-yellow-400 rounded-full opacity-90 -ml-1.5"></div>
              </div>
              
              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[10px] font-bold text-gray-800 shadow-sm flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#e2136e]"><path d="M12 2L2 7l10 5 10-5-10-5zm0 22l-10-5V9l10 5 10-5v10l-10 5z"/></svg>
                {t("bKash", "বিকাশ")}
              </div>
              
              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[10px] font-bold text-gray-800 shadow-sm flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#f04f23]"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                {t("Nagad", "নগদ")}
              </div>
              
              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[10px] font-bold text-gray-800 shadow-sm flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#8c1596]"><path d="M3.1 11.2l9.9-5.7 9.9 5.7v1.7L13 7.1v12.3h-2V7.1L3.1 12.8v-1.6z"/></svg>
                {t("Rocket", "রকেট")}
              </div>
              
              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[10px] font-bold text-gray-800 shadow-sm flex items-center gap-1.5">
                <div className="text-[12px] font-black text-[#00529b] leading-none">u<span className="text-[#f7a600]">pay</span></div>
                <span className="border-l border-gray-300 h-3 mx-0.5"></span>
                {t("Upay", "উপায়")}
              </div>

              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[10px] font-bold text-gray-800 shadow-sm flex items-center gap-1.5">
                <div className="w-3.5 h-3.5 rounded-full border-2 border-blue-600 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                </div>
                {t("DBBL Nexus", "নেক্সাস পে")}
              </div>

              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[10px] font-bold text-gray-500 shadow-sm mt-2 w-full lg:w-auto text-center lg:text-left flex justify-center">
                <span className="mr-1">Verified by</span> <strong className="text-blue-700 italic font-black text-[11px]">SSLCOMMERZ</strong>
              </div>
            </div>`;

if(code.includes(target)) {
  fs.writeFileSync('src/components/layout/Footer.tsx', code.replace(target, replacement));
  console.log("Patched successfully");
} else {
  console.log("Target not found!");
}
