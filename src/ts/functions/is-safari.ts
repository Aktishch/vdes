declare global {
  interface Window {
    safari: boolean
  }
}

export const isSafari = (): boolean => {
  return window.safari !== undefined
}
