type Media = {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  xxl: number
}

declare global {
  interface Window {
    media: Media
  }
}

export const media: Media = {
  xs: 459.98,
  sm: 575.98,
  md: 767.98,
  lg: 991.98,
  xl: 1365.98,
  xxl: 2559.98,
}

window.media = media
