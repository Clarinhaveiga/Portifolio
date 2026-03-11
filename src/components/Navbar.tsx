import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: t('nav.about'), path: '/' },
    { name: t('nav.works'), path: '/works' },
    { name: t('nav.press'), path: '/press' },
    { name: t('nav.cv'), path: '/cv' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-off-white/80 backdrop-blur-sm border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl font-serif tracking-widest uppercase">
          Clara Veiga
        </Link>

        <div className="flex items-center gap-12">
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-xs uppercase tracking-[0.2em] transition-colors hover:text-black/50 ${
                    location.pathname === item.path ? 'text-black font-medium' : 'text-black/40'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4 border-l border-black/10 pl-8">
            <button
              onClick={() => setLanguage('en')}
              className={`text-[10px] uppercase tracking-widest transition-colors ${
                language === 'en' ? 'text-black font-bold' : 'text-black/30'
              }`}
            >
              EN
            </button>
            <span className="text-black/10 text-[10px]">/</span>
            <button
              onClick={() => setLanguage('pt')}
              className={`text-[10px] uppercase tracking-widest transition-colors ${
                language === 'pt' ? 'text-black font-bold' : 'text-black/30'
              }`}
            >
              PT
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-20 left-0 w-full bg-off-white border-b border-black/5 px-6 py-12 flex flex-col items-center gap-8 shadow-xl"
          >
            <ul className="flex flex-col items-center gap-8">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`text-sm uppercase tracking-[0.3em] transition-colors ${
                      location.pathname === item.path ? 'text-black font-medium' : 'text-black/40'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-6 pt-8 border-t border-black/5 w-full justify-center">
              <button
                onClick={() => setLanguage('en')}
                className={`text-xs uppercase tracking-widest transition-colors ${
                  language === 'en' ? 'text-black font-bold' : 'text-black/30'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('pt')}
                className={`text-xs uppercase tracking-widest transition-colors ${
                  language === 'pt' ? 'text-black font-bold' : 'text-black/30'
                }`}
              >
                Português
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
