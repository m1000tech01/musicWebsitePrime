// Shapes the UI consumes. Kept loose/simple on purpose — these mirror what the
// old Redux blueprints produced from Contentful, so the ported components can
// read the same fields.

export interface HeroSection {
  image: string | null
  title: string | null
}

export interface AboutSection {
  title: string | null
  description: string | null
  image: string | null
}

export interface GigsSection {
  title: string | null
  description: string | null
  image: string | null
}

export interface DiscographySection {
  title: string | null
  description: string | null
  backgroundImage: string | null
  image: string | null
  youtubeLink: string | null
  spotifyLink: string | null
  itunesLink: string | null
  amazonLink: string | null
  playstoreLink: string | null
}

export interface GallerySection {
  backgroundImage: string | null
  gallery: string[]
}

export interface VideoSection {
  backgroundImage: string | null
}

export interface IndexPage {
  heroSection: HeroSection
  aboutSection: AboutSection
  gigsSection: GigsSection
  discographySection: DiscographySection
  gallerySection: GallerySection
  videoSection: VideoSection
}

export interface GalleryImage {
  title: string | null
  location: string | null
  link: string | null
}

export interface GalleryPage {
  gallery: GalleryImage[]
}

export interface Video {
  title: string | null
  /** YouTube video ID */
  link: string | null
}

export interface Gig {
  time: string | null
  place: string | null
  link: string | null
}

export interface Post {
  title: string | null
  description: string | null
}

export interface SiteContent {
  indexPage: IndexPage | null
  galleryPage: GalleryPage
  videos: Video[]
  gigs: Gig[]
  posts: Post[]
}
