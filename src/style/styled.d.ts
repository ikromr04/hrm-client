import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      baseWhite: string,
      titleColor: string;
      pageBackground: string;
      button: {
        success: string,
      },
      text: {
        dark: string,
        gray: string,
        link: string,
        error: string,
      },
    };
    media: {
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
      extraExtraLarge: string;
    }
  }
}
