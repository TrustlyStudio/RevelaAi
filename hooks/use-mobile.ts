import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    // Avoid calling setState synchronously during the initial effect run
    // It's usually safe to rely on the initial state being correct, but if needed,
    // queue it to run after the current render.
    if (window.innerWidth < MOBILE_BREAKPOINT !== isMobile) {
      setTimeout(() => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT), 0);
    }
    return () => mql.removeEventListener("change", onChange)
  }, [isMobile])

  return !!isMobile
}
