import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  color: {
    baseWhite: '#ffffff',
    titleColor: '#000f30',
    pageBackground: '#f1f5f8',
    button: {
      success: '#00b950',
    },
    text: {
      dark: '#000f30',
      gray: '#476887',
      link: '#4094ff',
      error: '#ff623f',
    },
  },
  media: {
    small: '576px',
    medium: '768px',
    large: '992px',
    extraLarge: '1200px',
    extraExtraLarge: '1400px',
  }
}
