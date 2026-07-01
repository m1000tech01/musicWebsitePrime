import Header from '../components/Header'
import Footer from '../components/Footer'
import IntroSection from '../components/IntroSection'
import GigsSection from '../components/GigsSection'
import DiscographySection from '../components/DiscographySection'
import VideosSection from '../components/VideosSection'
import GallerySection from '../components/GallerySection'
import ContactSection from '../components/ContactSection'

import { useContent } from '../content/ContentContext'

export default function IndexPage() {
  const { content, loading, error } = useContent()

  if (loading) {
    return <div className="loading-screen">Loading…</div>
  }

  if (error || !content?.indexPage) {
    return (
      <div className="loading-screen">
        <p>Couldn’t load content.</p>
        <p style={{ fontSize: '0.8em', opacity: 0.7 }}>
          {error?.message ?? 'No IndexPage entry found in Contentful.'}
        </p>
      </div>
    )
  }

  const {
    heroSection,
    aboutSection,
    gigsSection,
    discographySection,
    gallerySection,
  } = content.indexPage
  const { gigs, videos } = content

  return (
    <div className="page-home">
      <Header image={heroSection.image} title={heroSection.title} />
      <main className="content" id="page">
        <IntroSection
          title={aboutSection.title}
          description={aboutSection.description}
          image={aboutSection.image}
        />
        <GigsSection gigs={gigs} {...gigsSection} />
        <DiscographySection {...discographySection} />
        <VideosSection videos={videos} />
        <GallerySection {...gallerySection} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
