import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { lightTheme } from './styles/theme'
function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      {" "}
      <GlobalStyle />

        <h1> Fitness site</h1>
    </ThemeProvider>
  );
}

export default App;
