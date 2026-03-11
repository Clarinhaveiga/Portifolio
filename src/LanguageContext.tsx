import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    nav: {
      about: 'About Me',
      works: 'Works',
      press: 'Press',
      cv: 'CV',
      contact: 'Contact',
    },
    about: {
      intro: "Clara Veiga is a contemporary visual artist whose work explores the intersection of memory, atmosphere, and the ephemeral. Based between Lisbon and São Paulo, her practice spans photography, installation, and sculpture, often utilizing found objects and light as primary mediums to evoke a sense of quiet introspection.",
      bio: "Her aesthetic is defined by a minimalist approach, where the absence of color and the precision of form create a space for the viewer to engage with the subtle nuances of perception. Clara's work has been exhibited in various galleries and institutions internationally, reflecting a deep commitment to the poetic possibilities of the everyday.",
    },
    works: {
      title: 'Selected Works',
      learnMore: 'Learn More',
      inquiry: 'Inquiry about',
    },
    press: {
      title: 'Press & Publications',
    },
    cv: {
      title: 'Curriculum Vitae',
      education: 'Education',
      exhibitions: 'Selected Exhibitions',
      residencies: 'Residencies',
      awards: 'Awards',
      collections: 'Collections',
    },
    contact: {
      title: 'Get in Touch',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      success: 'Thank you. Your message has been sent.',
    }
  },
  pt: {
    nav: {
      about: 'Sobre',
      works: 'Obras',
      press: 'Imprensa',
      cv: 'CV',
      contact: 'Contato',
    },
    about: {
      intro: "Clara Veiga é uma artista visual contemporânea cujo trabalho explora a interseção entre memória, atmosfera e o efêmero. Baseada entre Lisboa e São Paulo, sua prática abrange fotografia, instalação e escultura, frequentemente utilizando objetos encontrados e a luz como meios primários para evocar um sentido de introspecção silenciosa.",
      bio: "Sua estética é definida por uma abordagem minimalista, onde a ausência de cor e a precisão da forma criam um espaço para o espectador se envolver com as sutis nuances da percepção. O trabalho de Clara tem sido exibido em diversas galerias e instituições internacionalmente, refletindo um profundo compromisso com as possibilidades poéticas do cotidiano.",
    },
    works: {
      title: 'Obras Selecionadas',
      learnMore: 'Saiba Mais',
      inquiry: 'Interesse em',
    },
    press: {
      title: 'Imprensa e Publicações',
    },
    cv: {
      title: 'Curriculum Vitae',
      education: 'Formação',
      exhibitions: 'Exposições Selecionadas',
      residencies: 'Residências',
      awards: 'Prêmios',
      collections: 'Coleções',
    },
    contact: {
      title: 'Contato',
      name: 'Nome',
      email: 'E-mail',
      message: 'Mensagem',
      send: 'Enviar Mensagem',
      success: 'Obrigada. Sua mensagem foi enviada.',
    }
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (path: string) => {
    const keys = path.split('.');
    let result: any = translations[language];
    for (const key of keys) {
      if (result[key]) {
        result = result[key];
      } else {
        return path;
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
