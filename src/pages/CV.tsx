import { useLanguage } from '../LanguageContext';
import { cvData } from '../data';
import { motion } from 'motion/react';

export default function CV() {
  const { t } = useLanguage();

  const sections = [
    { title: t('cv.education'), items: cvData.education },
    { title: t('cv.exhibitions'), items: cvData.exhibitions },
    { title: t('cv.residencies'), items: cvData.residencies },
    { title: t('cv.awards'), items: cvData.awards },
    { title: t('cv.collections'), items: cvData.collections },
  ];

  return (
    <div className="space-y-16 pt-12 max-w-3xl">
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl lg:text-5xl font-serif"
      >
        {t('cv.title')}
      </motion.h1>

      <div className="space-y-16">
        {sections.map((section, sIndex) => (
          <motion.section
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: sIndex * 0.1 }}
            className="space-y-8"
          >
            <h2 className="text-xs uppercase tracking-[0.3em] text-black/40 border-b border-black/10 pb-4">
              {section.title}
            </h2>
            <div className="space-y-6">
              {section.items.map((item, iIndex) => (
                <div key={iIndex} className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8">
                  <span className="md:col-span-2 text-xs font-medium tracking-widest text-black/60">
                    {item.year}
                  </span>
                  <p className="md:col-span-10 text-sm leading-relaxed text-black/80">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
