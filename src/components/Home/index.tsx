'use client'
import { ScrollingProvider, useScrollSection, Section } from '../SectionScroll'

import {
  Landing,
  About,
  Experienced,
  Skills,
  Portfolio,
} from '@/components/Sections'

const StaticMenu = () => {
  const homeSection = useScrollSection('home')
  const aboutSection = useScrollSection('about')
  const experiencedSection = useScrollSection('experienced')
  const skillsSection = useScrollSection('skills')

  return (
    <ul className="fixed top-0 right-0 z-50 space-x-2 flex p-4">
      <li onClick={homeSection.onClick}>Home</li>
      <li onClick={aboutSection.onClick}>About</li>
      <li onClick={experiencedSection.onClick}>Experienced</li>
      <li onClick={skillsSection.onClick}>Skills</li>
    </ul>
  )
}

export default function Home() {
  return (
    <ScrollingProvider>
      <StaticMenu />
      <Section id="home">
        <Landing />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="experienced">
        <Experienced />
      </Section>
      <Section id="skills">
        <Skills />
      </Section>
      <Section id="portfolio">
        <Portfolio />
      </Section>
    </ScrollingProvider>
  )
}
