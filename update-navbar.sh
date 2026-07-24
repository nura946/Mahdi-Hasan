#!/bin/bash
sed -i 's/{ labelEn: "Upcoming Soon..", labelBn: "শীঘ্রই আসছে..", href: "#upcoming-soon" },/{ labelEn: "Upcoming Soon..", labelBn: "শীঘ্রই আসছে..", href: "#upcoming-soon" },\n      { labelEn: "Uses.", labelBn: "ব্যবহারসমূহ", href: "#uses" },/g' src/components/layout/Navbar.tsx
