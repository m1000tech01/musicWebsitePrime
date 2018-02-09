import {addGalleryPage, addGigs, addIndexPage, addPosts, addVideos} from './Root/RootTypes'

const contentful = require('contentful')
const client = contentful.createClient({
  space: 'ey6cqlcu6z2z',
  accessToken: 'a731c8e5ff2420b4f5089e4dae556e1e50f636a7d49532de3678b9b1e6bf2450'
})

const indexPageBlueprint = {
  heroSection: {
    image: null,
    title: null,
  },
  aboutSection: {
    title: null,
    description: null,
    image: null,
  },
  gigsSection: {
    title: null,
    description: null,
    image: null,
  },
  discographySection: {
    title: null,
    description: null,
    backgroundImage: null,
    image: null,
    youtubeLink: null,
    spotifyLink: null,
    itunesLink: null,
    amazonLink: null,
    playstoreLink: null,
  },
  gallerySection: {
    backgroundImage: null,
    gallery: [],
  },
  videoSection: {
    backgroundImage: null
  }
}

const galleryPageBlueprint = {
  gallery: []
}

const videoBlueprint = {
  title: null,
  link: null,
}

const gigBlueprint = {
  time: null,
  place: null,
  link: null,
}

const postBlueprint = {
  title: null,
  description: null,
}


const buildIndexPage = (item) => {
  const { fields } = item
  let indexPage = Object.assign({}, indexPageBlueprint)

  indexPage.heroSection.image = fields.heroSectionImage.fields.file.url
  indexPage.heroSection.title = fields.heroSectionTitle

  indexPage.aboutSection.title = fields.aboutSectionTitle
  indexPage.aboutSection.description = fields.aboutSectionDescription
  indexPage.aboutSection.image = fields.aboutSectionImage.fields.file.url

  indexPage.gigsSection.title = fields.gigsSectionTitle
  indexPage.gigsSection.description = fields.gigsSectionDescription
  indexPage.gigsSection.image = fields.gigsSectionImage.fields.file.url

  indexPage.discographySection.title = fields.discographySectionTitle
  indexPage.discographySection.description = fields.discographySectionDescription
  indexPage.discographySection.backgroundImage = fields.discographySectionBackgroundImage.fields.file.url
  indexPage.discographySection.image = fields.discographySectionImage.fields.file.url
  indexPage.discographySection.youtubeLink = fields.discographySectionYoutubeLink
  indexPage.discographySection.spotifyLink = fields.discographySectionSpotifyLink
  indexPage.discographySection.itunesLink = fields.discographySectionItunesLink
  indexPage.discographySection.amazonLink = fields.discographySectionAmazonLink
  indexPage.discographySection.playstoreLink = fields.discographySectionPlaystoreLink

  indexPage.videoSection.backgroundImage = fields.videosBackgroundImage.fields.file.url

  indexPage.gallerySection.backgroundImage = fields.gallerySectionImage.fields.file.url
  indexPage.gallerySection.gallery = fields.gallerySectionImagesCollection.map(image => image.fields.file.url)

  return indexPage
}

const buildVideo = ({ fields }) => {
  let video = {...videoBlueprint}

  video.title = fields.title
  video.link = fields.link

  return video
}

const buildGig = ({ fields }) => {
  let gig = Object.assign(gigBlueprint, {})

  gig.time = fields.time
  gig.place = fields.place
  gig.link = fields.link

  return gig
}

const buildGalleryPage = ({ fields }) => {
  let galleryPage = Object.assign(galleryPageBlueprint, {})

  galleryPage.gallery = fields.galleryImage.map((item) => {
    return {
      title: item.fields.title,
      location: item.fields.description,
      link: item.fields.file.url
    }
  })

  return galleryPage
}

const buildPost = ({ fields }) => {
  let post = Object.assign(postBlueprint, {})

  post.title = fields.title
  post.description = fields.description

  return post
}

export const getEntries = () => {
  return (dispatch) => {
    return client.getEntries({'sys.contentType.sys.id': []})
      .then((entry) => {
        let videos = []
        let gigs = []
        let posts = []

        entry.items.map(item => {
          const identifier = item.sys.contentType.sys.id;
          switch (identifier) {
            case 'indexPage':
              dispatch(addIndexPage(buildIndexPage(item)))
              return;
            case 'galleryPage':
              console.log(item)
              dispatch(addGalleryPage(buildGalleryPage(item)))
              return;
            case 'videos':
              console.log(item)
              videos.push(buildVideo(item))
              return;
            case 'gigs':
              gigs.push(buildGig(item))
              return;
            case 'blog':
              posts.push(buildPost(item))
              return;
            default:
              return;
          }
        })

        dispatch(addVideos(videos))
        dispatch(addGigs(gigs))
        dispatch(addPosts(posts))
      })
  }
}
