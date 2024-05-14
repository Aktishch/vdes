export const timeFormat = (value: number): string => {
  switch (value < 10 || value === 0) {
  case true: {
    return `0${value}`
  }

  case false: {
    return `${value}`
  }
  }
}
