import {
  ADD_INDEX_PAGE,
  ADD_GALLERY_PAGE,
  ADD_VIDEOS,
  ADD_GIGS,
  ADD_POSTS
} from './RootTypes'

const initialState = {
  loading: true,
  indexPage: {

  },
  galleryPage: {
    gallery: []
  },
  videos: [],
  gigs: [],
  posts: [],
}

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INDEX_PAGE:
      return {...state, loading: false, indexPage: action.indexPage };
    case ADD_GALLERY_PAGE:
      return {...state, loading: false, galleryPage: action.galleryPage };
    case ADD_VIDEOS:
      return {...state, loading: false, videos: action.videos };
    case ADD_GIGS:
      return {...state, loading: false, gigs: action.gigs };
    case ADD_POSTS:
      return {...state, loading: false, posts: action.posts };
    default:
      return state;
  }
}

export const getVideos = state => state.Reducer.videos
export const getGigs = state => state.Reducer.gigs
export const getPosts = state => state.Reducer.posts
export const getIndexPage = state => state.Reducer.indexPage
export const getGalleryPage = state => state.Reducer.galleryPage
export const getLoading = state => state.Reducer.loading
