import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from 'react'

type SectionRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'li'
}

export function SectionReveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement | HTMLLIElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const sharedProps = {
    className: `reveal${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`,
    style: { transitionDelay: visible ? `${delay}ms` : '0ms' },
  }

  if (as === 'li') {
    return (
      <li ref={ref as RefObject<HTMLLIElement>} {...sharedProps}>
        {children}
      </li>
    )
  }

  return (
    <div ref={ref as RefObject<HTMLDivElement>} {...sharedProps}>
      {children}
    </div>
  )
}
