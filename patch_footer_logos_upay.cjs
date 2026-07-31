const fs = require('fs');
let code = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');

const regex = /<img src="https:\/\/raw.githubusercontent.com\/ultraDevs\/Bangladeshi-Payment-Gateways\/master\/assets\/images\/Rocket.png" alt="Rocket" className="h-6 object-contain" \/>\s*<\/div>/;

const replacement = `<img src="https://raw.githubusercontent.com/ultraDevs/Bangladeshi-Payment-Gateways/master/assets/images/Rocket.png" alt="Rocket" className="h-6 object-contain" />
              </div>

              <div className="px-3 bg-white border border-gray-200 rounded shadow-sm flex items-center gap-2 h-10 overflow-hidden">
                <img src="https://raw.githubusercontent.com/ultraDevs/Bangladeshi-Payment-Gateways/master/assets/images/Upay.png" alt="Upay" className="h-6 object-contain" />
              </div>`;

if(code.match(regex)) {
  fs.writeFileSync('src/components/layout/Footer.tsx', code.replace(regex, replacement));
  console.log("Patched successfully");
} else {
  console.log("Target not found!");
}
