import MantouText from "./components/MantouText";
import { ThemeProvider } from "styled-components";
import LoadingPage from "./components/LoadingPage";
import { useState, Fragment, useEffect } from "react";
import Aos from "aos";
import "./styles/aos.css";
import Navbar from "./components/Navbar";
import ButtomNavbar from "./components/ButtomNavbar";

import theme from "./theme";

function App() {
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {/* <LoadingPage display={display} setDisplay={setDisplay} /> */}
      {display && (
        <>
          <Navbar />
          <ButtomNavbar />
          <div style={{ height: 2000, background: "#faf" }}></div>
          {/* <MantouText data-aos="fade-up">哈囉</MantouText>
          <h1>asdasdasdasd</h1> */}
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
