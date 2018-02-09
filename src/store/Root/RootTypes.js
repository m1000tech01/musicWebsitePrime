export const ADD_INDEX_PAGE = 'ADD_INDEX_PAGE';
export const ADD_GALLERY_PAGE = 'ADD_GALLERY_PAGE';
export const ADD_VIDEOS = 'ADD_VIDEOS';
export const ADD_GIGS = 'ADD_GIGS';
export const ADD_POSTS = 'ADD_POSTS';

export const addIndexPage = (indexPage) => {
  return {
    type: ADD_INDEX_PAGE,
    indexPage,
  }
}

export const addGalleryPage = (galleryPage) => {
  return {
    type: ADD_GALLERY_PAGE,
    galleryPage,
  }
}

export const addVideos = (videos) => {
  return {
    type: ADD_VIDEOS,
    videos,
  }
}

export const addGigs = (gigs) => {
  return {
    type: ADD_GIGS,
    gigs,
  }
}

export const addPosts = (posts) => {
  return {
    type: ADD_POSTS,
    posts,
  }
}