// hooks/useScrollSection.js
import { useEffect, useRef, useCallback, useState } from 'react'
import { useScrollingContext } from '../ScrollingProvider'

export const useScrollSection = (id: string) => {
  const { scrollToSection, setActiveSection, activeSection, registerSection } =
    useScrollingContext()
  const sectionRef = useRef(null)
  const [isActive, setIsActive] = useState(false)

  // Register the section on mount
  useEffect(() => {
    registerSection(id, sectionRef)
  }, [id, registerSection])

  // Intersection observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(id)
          setIsActive(true)
        } else {
          setIsActive(false)
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [id, setActiveSection])

  return {
    ref: sectionRef,
    onClick: useCallback(() => scrollToSection(id), [id, scrollToSection]),
    isActive: activeSection === id,
  }
}
