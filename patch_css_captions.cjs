const fs = require('fs');
let code = fs.readFileSync('src/index.css', 'utf8');

const captionStyles = `
@layer base {
  .text-sm, .text-xs, caption, figcaption, .caption-text {
    font-family: var(--font-caption);
    font-weight: 700 !important;
  }
}
`;

if (!code.includes('.caption-text')) {
  code += captionStyles;
  fs.writeFileSync('src/index.css', code);
  console.log("CSS patched for captions");
}
