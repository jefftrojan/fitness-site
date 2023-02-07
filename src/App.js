import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { lightTheme } from './styles/theme'
import { NavBar } from "./components";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
        <ThemeProvider theme={lightTheme}>
      {" "}
      <GlobalStyle />

      <NavBar />

        
    </ThemeProvider>
    </Router>
  );
}

export default App;
