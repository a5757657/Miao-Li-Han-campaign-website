import { ThemeProvider } from "styled-components";
import { ThemeProvider as Provider, createTheme } from "@mui/material";
import LoadingPage from "./components/LoadingPage";
import { useState, useEffect } from "react";
import Aos from "aos";
import "./styles/aos.css";
import Navbar from "./components/Navbar";
import BottomNavbar from "./components/BottomNavbar";
import Banner from "./pages/Banner";
import Proposition from "./pages/Proposition";
import Event from "./pages/Event";
import Issue from "./pages/Issue";
import Action from "./pages/Action";
import EndTitle from "./pages/EndTitle";
import Footer from "./pages/Footer";

import theme from "./theme"; // styled-component用的斷點資料

function App() {
  const [display, setDisplay] = useState(true); // 控制loading頁面是出現
  const [show, setShow] = useState(true); // 控制頁面內容區塊是否出現
  const muiTheme = createTheme({  // mui斷點設定，主要是給dialog用的
    breakpoints: {
      values: {
        desktop: 1200,
        table: 768,
        mobile: 576,
      },
    },
  });
  useEffect(() => { // AOS的初始化設定
    Aos.init({
      debounceDelay: 1000,
      once: false,
      mirror: true,
    });
  }, [show]);
  return (
    <ThemeProvider theme={theme}>
      <Provider theme={muiTheme}>
        <LoadingPage display={display} setDisplay={setDisplay} show={show} setShow={setShow} />
        {!display && (
          <div style={show ? { overflow: "hidden", width: "100vw", height: "100vh" } : {}}>
            <Navbar />
            <BottomNavbar />
            <Banner />
            <Proposition />
            <Event />
            <Issue />
            <Action />
            <EndTitle />
            <Footer />
          </div>
        )}
      </Provider>
    </ThemeProvider>
  );
}

export default App;
