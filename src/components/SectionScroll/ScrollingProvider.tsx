import React, {
  createContext,
  RefObject,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react'

interface ScrollingContextType {
  registerSection: (id: string, ref: RefObject<HTMLElement>) => void
  scrollToSection: (id: string) => void
  activeSection: string | null
  setActiveSection: React.Dispatch<React.SetStateAction<string | null>>
}

const DEFAULT_CONTEXT = {
  registerSection: () => {},
  scrollToSection: () => {},
  activeSection: null,
  setActiveSection: () => {},
}

const ScrollingContext = createContext<ScrollingContextType>(DEFAULT_CONTEXT)

export const useScrollingContext = () => useContext(ScrollingContext)

export const ScrollingProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const sections = useRef<Record<string, HTMLElement>>({})
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const registerSection = (id: string, ref: RefObject<HTMLElement>) => {
    if (!ref.current) {
      return
    }

    sections.current[id] = ref.current
  }

  const scrollToSection = (id: string) => {
    const sectionEl = sections.current[id]
    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <ScrollingContext.Provider
      value={{
        registerSection,
        scrollToSection,
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </ScrollingContext.Provider>
  )
}

// Custom hook to get scroll functionality for a specific section
export const useScrollSection = (id: string) => {
  const { scrollToSection } = useScrollingContext()

  return {
    onClick: useCallback(() => scrollToSection(id), [id, scrollToSection]),
  }
}
