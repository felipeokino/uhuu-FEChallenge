import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  :root {
  --background-primary: #E73980;
  --background-secondary: #861040;
  --neutral-color: #FFFFFF;
  --neutral-color-gray900: #131313;
  --neutral-color-black: #000000;
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