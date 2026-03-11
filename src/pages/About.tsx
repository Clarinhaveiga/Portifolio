import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';

export default function About() {
  const { t } = useLanguage();

  const images = [
    'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1550684847-75bdda21cc95?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1550684848-86a5d8727436?q=80&w=1000&auto=format&fit=crop',
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start pt-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:col-span-5 space-y-8"
      >
        <h1 className="text-4xl lg:text-5xl font-serif leading-tight">
          {t('nav.about')}
        </h1>
        <div className="space-y-6 text-lg text-black/70 font-light leading-relaxed">
          <p>{t('about.intro')}</p>
          <p>{t('about.bio')}</p>
        </div>
      </motion.div>

      <div className="lg:col-span-7 grid grid-cols-1 gap-8">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
            className="aspect-[3/4] overflow-hidden bg-light-gray"
          >
            <img
              src={src}
              alt={`Conceptual photography ${index + 1}`}
              className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
