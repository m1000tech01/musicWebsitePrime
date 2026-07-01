/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTENTFUL_SPACE_ID: string
  readonly VITE_CONTENTFUL_ACCESS_TOKEN: string
  readonly VITE_CONTENTFUL_ENVIRONMENT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Allow importing image assets in TS
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.svg'
