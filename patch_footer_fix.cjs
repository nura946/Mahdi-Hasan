const fs = require('fs');
let code = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');

const target = `            </div>
          </div>
        </div>
        </div>

        {/* Copyright */}`;

const replacement = `            </div>
          </div>
        </div>

        {/* Copyright */}`;

if(code.includes(target)) {
  fs.writeFileSync('src/components/layout/Footer.tsx', code.replace(target, replacement));
  console.log("Patched successfully");
} else {
  console.log("Target not found!");
}
