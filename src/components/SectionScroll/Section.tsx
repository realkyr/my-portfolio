// components/Section.js
import React, { useRef, useEffect } from 'react';
import { useScrollingContext } from './ScrollingProvider';

interface SectionProps {
  id: string;
  children: React.ReactNode;
}

const Section = ({ id, children }: SectionProps) => {
  const { registerSection } = useScrollingContext();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }
    registerSection(id, sectionRef);
  }, [id, registerSection, sectionRef]);

  return (
    <section ref={sectionRef} id={id}>
      {children}
    </section>
  );
};

export default Section;