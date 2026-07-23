#!/bin/bash
sed -i '/<main className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24">/ {
    N
    /^[[:space:]]*<Hero \/>[[:space:]]*<\/main>/ {
        s/^[[:space:]]*<main className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24">\n[[:space:]]*<Hero \/>\n[[:space:]]*<\/main>/      <Hero \/>/
    }
}' src/App.tsx
