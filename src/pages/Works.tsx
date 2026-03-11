import { useLanguage } from '../LanguageContext';
import { works } from '../data';
import { motion } from 'motion/react';

export default function Works() {
  const { t } = useLanguage();

  const handleInquiry = (title: string) => {
    const subject = encodeURIComponent(`${t('works.inquiry')} ${title}`);
    const body = encodeURIComponent(`Hello Clara,\n\nI am interested in learning more about your work "${title}".`);
    window.location.href = `mailto:clara.veiga@artist.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="space-y-16 pt-12">
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl lg:text-5xl font-serif"
      >
        {t('works.title')}
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {works.map((work, index) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group space-y-4"
          >
            <div className="aspect-[4/5] overflow-hidden bg-light-gray">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex justify-between items-start pt-2">
              <div className="space-y-1">
                <h3 className="text-lg font-serif italic">{work.title}</h3>
                <p className="text-xs text-black/50 uppercase tracking-widest">
                  {work.year} — {work.medium}
                </p>
              </div>
              <button
                onClick={() => handleInquiry(work.title)}
                className="text-[10px] uppercase tracking-widest border-b border-black/20 pb-1 hover:border-black transition-colors"
              >
                {t('works.learnMore')}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
