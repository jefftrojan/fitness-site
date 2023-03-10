import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { lightTheme } from './styles/theme'
import { Hero, NavBar } from "./components";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
        <ThemeProvider theme={lightTheme}>
          <h1> Fitness Gym site</h1>
      {" "}
      <GlobalStyle />

      <NavBar />
      <Hero />

        
    </ThemeProvider>
    </Router>
  );
}

export default App;
