'use client'
import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from 'react-scroll-section';

import { Landing } from '@/components/Sections';

const StaticMenu = () => {
  const homeSection = useScrollSection('home');
  const aboutSection = useScrollSection('about');

  return (
    <ul className="fixed top-0 left-0 z-50 space-x-2 flex p-4">
      <li onClick={homeSection.onClick}>
        Home
      </li>
      <li onClick={aboutSection.onClick}>
        About
      </li>
    </ul>
  );
};

export default function Home() {
  return (
    <ScrollingProvider>
      <StaticMenu />
      <Section id="home"><Landing /></Section>
    </ScrollingProvider>
  );
}
