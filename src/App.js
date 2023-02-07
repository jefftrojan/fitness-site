import { ThemeProvider } from "styled-components";
import { lightTheme } from 'styles/theme'
function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      {" "}

        <h1> Fitness site</h1>
    </ThemeProvider>
  );
}

export default App;
