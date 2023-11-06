import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  :root {
  --background-primary: #151515;
  --background-secondary: #1f1f1f;
  --neutral-color: #FFFFFF;
  --neutral-color-gray900: #131313;
}
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 16px;
  transition: all 0.2s ease;
}
`;

export default GlobalStyles;