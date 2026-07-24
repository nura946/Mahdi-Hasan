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
              </div>`;

const replacement = `            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[11px] font-black text-blue-800 italic shadow-sm">VISA</div>
              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[11px] font-bold text-gray-800 shadow-sm">Mastercard</div>
              
              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[10px] font-bold text-gray-800 shadow-sm flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#e2136e]"><path d="M12 2L2 7l10 5 10-5-10-5zm0 22l-10-5V9l10 5 10-5v10l-10 5z"/></svg>
                {t("bKash", "বিকাশ")}
              </div>`;

if(code.includes(target)) {
  fs.writeFileSync('src/components/layout/Footer.tsx', code.replace(target, replacement));
  console.log("Patched successfully");
} else {
  console.log("Target not found!");
}
