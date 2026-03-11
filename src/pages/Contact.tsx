import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { Mail, Instagram, MessageCircle } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 pt-12">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-5 space-y-12"
      >
        <h1 className="text-4xl lg:text-5xl font-serif">
          {t('contact.title')}
        </h1>

        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-black/40">Inquiries</h3>
            <div className="space-y-2">
              <a href="mailto:clara.veiga@artist.com" className="flex items-center gap-3 text-lg hover:italic transition-all">
                <Mail size={18} strokeWidth={1.5} /> clara.veiga@artist.com
              </a>
              <a href="https://wa.me/351900000000" className="flex items-center gap-3 text-lg hover:italic transition-all">
                <MessageCircle size={18} strokeWidth={1.5} /> +351 900 000 000
              </a>
              <a href="#" className="flex items-center gap-3 text-lg hover:italic transition-all">
                <Instagram size={18} strokeWidth={1.5} /> @claraveiga.studio
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-7"
      >
        {submitted ? (
          <div className="h-full flex items-center justify-center border border-black/5 bg-light-gray p-12">
            <p className="text-lg font-serif italic">{t('contact.success')}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-black/40">{t('contact.name')}</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-transparent border-b border-black/20 py-2 focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-black/40">{t('contact.email')}</label>
                <input 
                  required
                  type="email" 
                  className="w-full bg-transparent border-b border-black/20 py-2 focus:outline-none focus:border-black transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-black/40">{t('contact.message')}</label>
              <textarea 
                required
                rows={6}
                className="w-full bg-transparent border-b border-black/20 py-2 focus:outline-none focus:border-black transition-colors resize-none"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="px-12 py-4 bg-black text-white text-[10px] uppercase tracking-[0.3em] hover:bg-black/80 transition-colors"
            >
              {t('contact.send')}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
