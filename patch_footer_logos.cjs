const fs = require('fs');
let code = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');

const regex = /<div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*\{\/\* Copyright \*\/\}/;

const replacement = `<div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
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

        {/* Copyright */}`;

if(code.match(regex)) {
  fs.writeFileSync('src/components/layout/Footer.tsx', code.replace(regex, replacement));
  console.log("Patched successfully");
} else {
  console.log("Target not found! Outputting snippet:");
  const lines = code.split('\\n');
  const footerIdx = lines.findIndex(l => l.includes('Copyright'));
  if (footerIdx > -1) {
    console.log(lines.slice(Math.max(0, footerIdx - 20), footerIdx + 5).join('\\n'));
  }
}
