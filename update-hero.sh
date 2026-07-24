#!/bin/bash
sed -i '/<h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-\[1\.1\] mb-6">/,/<\/p>/c\
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-6">\
              {t("Welcome to Mahdi Hasan'\''s Portfolio", "মাহদী হাসানের পোর্টফোলিওতে স্বাগতম")}\
            </h1>' src/components/sections/Hero.tsx
