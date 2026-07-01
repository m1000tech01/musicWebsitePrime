import { BrowserRouter, Routes, Route } from 'react-router'

import { ContentProvider } from './content/ContentContext'
import IndexPage from './pages/IndexPage'
import GalleryPage from './pages/GalleryPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <ContentProvider>
      <BrowserRouter>
        {/* React 19 hoists these to <head> automatically (replaces react-helmet). */}
        <title>Jaz Mattu</title>
        <div className="wrapper">
          <div className="page">
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ContentProvider>
  )
}
