import { client } from './client'
import type {
  SiteContent,
  IndexPage,
  GalleryPage,
  Video,
  Gig,
  Post,
} from './types'

// Contentful asset urls come back protocol-relative ("//images.ctfassets.net/...").
// Prefix https: so they work everywhere. Guard against missing/unresolved assets.
const assetUrl = (asset: any): string | null => {
  const url = asset?.fields?.file?.url
  if (!url) return null
  return url.startsWith('//') ? `https:${url}` : url
}

const buildIndexPage = (item: any): IndexPage => {
  const f = item.fields ?? {}
  return {
    heroSection: {
      image: assetUrl(f.heroSectionImage),
      title: f.heroSectionTitle ?? null,
    },
    aboutSection: {
      title: f.aboutSectionTitle ?? null,
      description: f.aboutSectionDescription ?? null,
      image: assetUrl(f.aboutSectionImage),
    },
    gigsSection: {
      title: f.gigsSectionTitle ?? null,
      description: f.gigsSectionDescription ?? null,
      image: assetUrl(f.gigsSectionImage),
    },
    discographySection: {
      title: f.discographySectionTitle ?? null,
      description: f.discographySectionDescription ?? null,
      backgroundImage: assetUrl(f.discographySectionBackgroundImage),
      image: assetUrl(f.discographySectionImage),
      youtubeLink: f.discographySectionYoutubeLink ?? null,
      spotifyLink: f.discographySectionSpotifyLink ?? null,
      itunesLink: f.discographySectionItunesLink ?? null,
      amazonLink: f.discographySectionAmazonLink ?? null,
      playstoreLink: f.discographySectionPlaystoreLink ?? null,
    },
    videoSection: {
      backgroundImage: assetUrl(f.videosBackgroundImage),
    },
    gallerySection: {
      backgroundImage: assetUrl(f.gallerySectionImage),
      gallery: Array.isArray(f.gallerySectionImagesCollection)
        ? f.gallerySectionImagesCollection.map(assetUrl).filter(Boolean)
        : [],
    },
  }
}

const buildGalleryPage = (item: any): GalleryPage => {
  const f = item.fields ?? {}
  const gallery = Array.isArray(f.galleryImage)
    ? f.galleryImage.map((asset: any) => ({
        title: asset?.fields?.title ?? null,
        location: asset?.fields?.description ?? null,
        link: assetUrl(asset),
      }))
    : []
  return { gallery }
}

const buildVideo = (item: any): Video => ({
  title: item.fields?.title ?? null,
  link: item.fields?.link ?? null,
})

const buildGig = (item: any): Gig => ({
  time: item.fields?.time ?? null,
  place: item.fields?.place ?? null,
  link: item.fields?.link ?? null,
})

const buildPost = (item: any): Post => ({
  title: item.fields?.title ?? null,
  description: item.fields?.description ?? null,
})

// The old code matched content-type ids `indexPage`/`galleryPage`/`videos`/`gigs`/`blog`,
// but the actual Contentful ids may be singular (`video`/`gig`). Match tolerantly.
const normalizeType = (id: string): string => {
  switch (id.toLowerCase()) {
    case 'indexpage':
      return 'indexPage'
    case 'gallerypage':
      return 'galleryPage'
    case 'video':
    case 'videos':
      return 'video'
    case 'gig':
    case 'gigs':
      return 'gig'
    case 'blog':
    case 'post':
      return 'blog'
    default:
      return id
  }
}

export async function fetchSiteContent(): Promise<SiteContent> {
  if (!client) {
    throw new Error(
      'Contentful is not configured. Copy .env.example to .env and add your ' +
        'VITE_CONTENTFUL_SPACE_ID and VITE_CONTENTFUL_ACCESS_TOKEN.',
    )
  }

  const entries = await client.getEntries({ include: 2, limit: 1000 })

  const content: SiteContent = {
    indexPage: null,
    galleryPage: { gallery: [] },
    videos: [],
    gigs: [],
    posts: [],
  }

  for (const item of entries.items as any[]) {
    const typeId = normalizeType(item.sys?.contentType?.sys?.id ?? '')
    switch (typeId) {
      case 'indexPage':
        content.indexPage = buildIndexPage(item)
        break
      case 'galleryPage':
        content.galleryPage = buildGalleryPage(item)
        break
      case 'video':
        content.videos.push(buildVideo(item))
        break
      case 'gig':
        content.gigs.push(buildGig(item))
        break
      case 'blog':
        content.posts.push(buildPost(item))
        break
      default:
        break
    }
  }

  return content
}
