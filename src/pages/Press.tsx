import { useLanguage } from '../LanguageContext';
import { pressItems } from '../data';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

export default function Press() {
  const { t } = useLanguage();

  return (
    <div className="space-y-16 pt-12 max-w-4xl">
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl lg:text-5xl font-serif"
      >
        {t('press.title')}
      </motion.h1>

      <div className="space-y-12">
        {pressItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group border-b border-black/5 pb-8 flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-black/40">
                {item.type} — {item.year}
              </span>
              <h3 className="text-xl font-serif group-hover:italic transition-all">
                {item.title}
              </h3>
              <p className="text-sm text-black/60">{item.publication}</p>
            </div>
            <a
              href={item.link}
              className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-black/40 hover:text-black transition-colors"
            >
              View <ExternalLink size={12} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
