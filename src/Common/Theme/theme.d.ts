import styled from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme<any>{

      light: {
        body: string;
        color: string;
        card: string
        description: string
        cardDepoiment: string
        headerCard: string
        navBar: string
        primaryGradient: string
        secondGradient: string
      };
      dark: {
        body: string
        color: string
        card: string
        description: string
        cardDepoiment: string
        headerCard: string
        navBar: string
        primaryGradient: string
        secondGradient: string
      };
  }
}