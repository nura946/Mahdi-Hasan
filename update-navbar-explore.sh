#!/bin/bash
sed -i 's/{ labelEn: "Projects", labelBn: "প্রজেক্টস", href: "#projects" },/{ labelEn: "Projects", labelBn: "প্রজেক্টস", href: "#projects" },\n  { labelEn: "Explore", labelBn: "এক্সপ্লোর", href: "#explore" },/' src/components/layout/Navbar.tsx
