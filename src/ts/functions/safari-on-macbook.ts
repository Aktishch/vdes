declare global {
  interface Window {
    safari: boolean
  }
}

export const safariOnMacbook = (): boolean => {
  return window.safari !== undefined
}
