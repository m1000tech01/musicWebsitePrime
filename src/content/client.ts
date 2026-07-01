import { createClient } from 'contentful'

const space = import.meta.env.VITE_CONTENTFUL_SPACE_ID
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
const environment = import.meta.env.VITE_CONTENTFUL_ENVIRONMENT || 'master'

export const hasContentfulConfig = Boolean(space && accessToken)

// Only create the client when configured, so the app can still boot and show a
// helpful message if the user hasn't added their .env yet.
export const client = hasContentfulConfig
  ? createClient({ space, accessToken, environment })
  : null
