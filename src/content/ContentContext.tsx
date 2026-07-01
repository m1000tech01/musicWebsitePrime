import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { fetchSiteContent } from './fetchContent'
import type { SiteContent } from './types'

interface ContentState {
  content: SiteContent | null
  loading: boolean
  error: Error | null
}

const ContentContext = createContext<ContentState>({
  content: null,
  loading: true,
  error: null,
})

export function ContentProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ContentState>({
    content: null,
    loading: true,
    error: null,
  })

  useEffect(() => {
    let active = true
    fetchSiteContent()
      .then((content) => {
        if (active) setState({ content, loading: false, error: null })
      })
      .catch((error: Error) => {
        if (active) setState({ content: null, loading: false, error })
        // Surface config/fetch problems in the console for debugging.
        console.error('Failed to load Contentful content:', error)
      })
    return () => {
      active = false
    }
  }, [])

  return (
    <ContentContext.Provider value={state}>{children}</ContentContext.Provider>
  )
}

export const useContent = () => useContext(ContentContext)
