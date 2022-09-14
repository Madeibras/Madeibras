import styled from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme<any>{

      light: {
        body: string;
        color: string;
      };
      dark: {
        body: string;
        color: string;
      };
  }
}