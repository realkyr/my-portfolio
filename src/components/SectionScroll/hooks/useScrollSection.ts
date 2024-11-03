import { useCallback, useEffect, useRef } from 'react'
import { useScrollingContext } from '@/components/SectionScroll/ScrollingProvider'

const useScrollSection = (id: string) => {
  const { scrollToSection, activeSection } = useScrollingContext()
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (ref.current) {
      scrollToSection(id)
    }
  }, [id, scrollToSection])

  return {
    ref,
    onClick: useCallback(() => scrollToSection(id), [id, scrollToSection]),
    active: activeSection === id,
  }
}

export default useScrollSection
