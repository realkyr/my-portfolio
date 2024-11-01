import React, {createContext, RefObject, useCallback, useContext, useRef} from 'react';

interface ScrollingContextType {
  registerSection: (id: string, ref: RefObject<HTMLElement>) => void;
  scrollToSection: (id: string) => void;
}

const DEFAULT_CONTEXT = {
  registerSection: () => {
  },
  scrollToSection: () => {
  },
}

const ScrollingContext = createContext<ScrollingContextType>(DEFAULT_CONTEXT);

export const useScrollingContext = () => useContext(ScrollingContext);

export const ScrollingProvider = ({children}: {
  children: React.ReactNode
}) => {
  const sections = useRef<Record<string, HTMLElement>>({});

  const registerSection = (id: string, ref: RefObject<HTMLElement>) => {
    if (!ref.current) {
      return;
    }

    sections.current[id] = ref.current;
  };

  const scrollToSection = (id: string) => {
    const sectionEl = sections.current[id];
    if (sectionEl) {
      sectionEl.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <ScrollingContext.Provider value={{registerSection, scrollToSection}}>
      {children}
    </ScrollingContext.Provider>
  );
};

// Custom hook to get scroll functionality for a specific section
export const useScrollSection = (id: string) => {
  const { scrollToSection } = useScrollingContext();

  return {
    onClick: useCallback(() => scrollToSection(id), [id, scrollToSection]),
  };
};