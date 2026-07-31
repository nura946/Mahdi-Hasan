import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Search, Filter } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { useLanguage } from '../../lib/LanguageContext';

const FILTERS = [
  {
    id: 'category',
    labelEn: 'Categories',
    labelBn: 'বিভাগ',
    options: [
      { value: 'calligraphy', labelEn: 'Calligraphy', labelBn: 'ক্যালিলিগ্রাফি' },
      { value: 'handwriting', labelEn: 'Handwriting', labelBn: 'হাতের লেখা' },
      { value: 'typography', labelEn: 'Typography', labelBn: 'টাইপোগ্রাফি' }
    ]
  },
  {
    id: 'language',
    labelEn: 'Language Script',
    labelBn: 'ভাষা',
    options: [
      { value: 'bangla', labelEn: 'Bangla', labelBn: 'বাংলা' },
      { value: 'english', labelEn: 'English', labelBn: 'ইংরেজি' },
      { value: 'arabic', labelEn: 'Arabic', labelBn: 'আরবি' }
    ]
  },
  {
    id: 'tools',
    labelEn: 'Tools',
    labelBn: 'সরঞ্জাম',
    options: [
      { value: 'fountain', labelEn: 'Fountain Pen', labelBn: 'ফাউন্টেন পেন' },
      { value: 'brush', labelEn: 'Brush Pen', labelBn: 'ব্রাশ পেন' },
      { value: 'pencil', labelEn: 'Pencil', labelBn: 'পেন্সিল' }
    ]
  }
];

const ITEMS = [
  { id: 1, title: 'Bangla Script Art', category: 'calligraphy', language: 'bangla', tool: 'fountain', image: '/img-1.jpg.jpeg' },
  { id: 2, title: 'English Cursive', category: 'handwriting', language: 'english', tool: 'fountain', image: '/img-2.jpg.jpeg' },
  { id: 3, title: 'Arabic Calligraphy', category: 'calligraphy', language: 'arabic', tool: 'brush', image: '/img-3.jpg.jpeg' },
  { id: 4, title: 'Modern Typography', category: 'typography', language: 'english', tool: 'pencil', image: '/img-4.jpg.jpeg' },
  { id: 5, title: 'Basic Handwriting', category: 'handwriting', language: 'bangla', tool: 'pencil', image: '/img-5.jpg.jpeg' },
  { id: 6, title: 'Advanced Flourishing', category: 'calligraphy', language: 'english', tool: 'fountain', image: '/img-6.jpg.jpeg' },
];

export function ExplorePortfolio() {
  const { t } = useLanguage();
  const [search, setSearch] = useState('');
  const [openFilters, setOpenFilters] = useState<Record<string, boolean>>({ category: true, language: true });
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});

  const toggleFilter = (id: string) => {
    setOpenFilters(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleFilterChange = (filterId: string, value: string) => {
    setActiveFilters(prev => {
      const current = prev[filterId] || [];
      if (current.includes(value)) {
        return { ...prev, [filterId]: current.filter(v => v !== value) };
      } else {
        return { ...prev, [filterId]: [...current, value] };
      }
    });
  };

  const filteredItems = ITEMS.filter(item => {
    if (search && !item.title.toLowerCase().includes(search.toLowerCase())) return false;
    
    for (const [key, values] of Object.entries(activeFilters) as [string, string[]][]) {
      if (values.length > 0 && !(values as any).includes((item as any)[key])) {
        return false;
      }
    }
    
    return true;
  });

  return (
    <section id="explore" className="py-24">
      <SectionHeading 
        title={t("Explore Portfolio", "পোর্টফোলিও এক্সপ্লোর করুন")}
        subtitle={t("Search and filter through our extensive collection.", "আমাদের বিস্তৃত কালেকশন খুঁজুন এবং ফিল্টার করুন।")}
      />
      
      <div className="flex flex-col lg:flex-row gap-8 mt-12">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 shrink-0 space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder={t("Search projects...", "প্রজেক্ট খুঁজুন...")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-brand focus:outline-none transition-all dark:text-white"
            />
          </div>
          
          <div className="hidden lg:block text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Filter size={16} /> {t("Filters", "ফিল্টার")}
          </div>

          <div className="space-y-1">
            {FILTERS.map(filter => (
              <div key={filter.id} className="border-b border-gray-100 dark:border-gray-800 last:border-0 pb-2">
                <button 
                  onClick={() => toggleFilter(filter.id)}
                  className="w-full flex items-center justify-between py-3 text-sm font-bold text-gray-900 dark:text-white hover:text-brand transition-colors"
                >
                  {t(filter.labelEn, filter.labelBn)}
                  <ChevronDown size={16} className={`transition-transform duration-200 ${openFilters[filter.id] ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFilters[filter.id] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-3 space-y-2">
                        {filter.options.map(opt => {
                          const isActive = activeFilters[filter.id]?.includes(opt.value);
                          return (
                            <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
                              <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${isActive ? 'bg-brand border-brand' : 'border-gray-300 dark:border-gray-700 group-hover:border-brand'}`}>
                                {isActive && <motion.div initial={{scale:0}} animate={{scale:1}} className="w-2 h-2 bg-white rounded-sm" />}
                              </div>
                              <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                {t(opt.labelEn, opt.labelBn)}
                              </span>
                            </label>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          <div className="mb-6 flex items-center justify-between text-sm text-gray-500 font-medium">
            <span>{filteredItems.length} {t("Results", "ফলাফল")}</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="group rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden relative bg-gray-100 dark:bg-gray-900">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500 font-medium uppercase tracking-wider">
                      <span>{item.category}</span>
                      <span>•</span>
                      <span>{item.language}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {filteredItems.length === 0 && (
              <div className="col-span-full py-24 text-center text-gray-500">
                {t("No results found matching your criteria.", "আপনার খোঁজার সাথে কোন ফলাফল পাওয়া যায়নি।")}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
