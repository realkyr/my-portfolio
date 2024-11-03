import React, {
  createContext,
  RefObject,
  useCallback,
  useContext,
  useEffect,
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    Object.values(sections.current).forEach((section) => {
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

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
