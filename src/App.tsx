/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import Navbar from './components/Navbar';
import About from './pages/About';
import Works from './pages/Works';
import Press from './pages/Press';
import CV from './pages/CV';
import Contact from './pages/Contact';
import { motion, AnimatePresence } from 'motion/react';
import React, { useEffect, Component, ReactNode } from 'react';

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-off-white p-12 text-center">
          <div className="space-y-4">
            <h1 className="text-2xl font-serif italic">Something went wrong.</h1>
            <p className="text-sm text-black/40 uppercase tracking-widest">Please refresh the page.</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-black text-white text-[10px] uppercase tracking-[0.3em]"
            >
              Refresh
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-6 pt-32 pb-24 min-h-[calc(100vh-80px)]"
    >
      {children}
    </motion.main>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-off-white selection:bg-black selection:text-white">
            <Navbar />
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<PageWrapper><About /></PageWrapper>} />
                <Route path="/works" element={<PageWrapper><Works /></PageWrapper>} />
                <Route path="/press" element={<PageWrapper><Press /></PageWrapper>} />
                <Route path="/cv" element={<PageWrapper><CV /></PageWrapper>} />
                <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
                <Route path="*" element={<PageWrapper><About /></PageWrapper>} />
              </Routes>
            </AnimatePresence>
            
            <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[10px] uppercase tracking-widest text-black/30">
                © {new Date().getFullYear()} Clara Veiga. All rights reserved.
              </p>
              <div className="flex gap-8">
                <a href="#" className="text-[10px] uppercase tracking-widest text-black/30 hover:text-black transition-colors">Instagram</a>
                <a href="#" className="text-[10px] uppercase tracking-widest text-black/30 hover:text-black transition-colors">Artsy</a>
              </div>
            </footer>
          </div>
        </Router>
      </LanguageProvider>
    </ErrorBoundary>
  );
}
