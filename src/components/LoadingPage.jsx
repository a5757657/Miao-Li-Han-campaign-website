import { useEffect } from "react";
import styled from "styled-components";
import Lottie from "lottie-react"; // Lottie 動畫套件
import loading from "./../assets/images/loading.json";
import { Fade } from "@mui/material";

const Layer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  z-index: 2000;
  touch-action: none;
  pointer-events: none;
  div {
    width: 100px;
  }
`;

// 一進入網站的loading頁面
const LoadingPage = ({ setDisplay, show, setShow }) => {
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setDisplay(false);
    }, 1500);
    const timer2 = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  });

  return (
    <Fade
      timeout={{
        exit: 1000,
      }}
      in={show}
    >
      <Layer>
        <Lottie loop={true} animationData={loading} />
      </Layer>
    </Fade>
  );
};

export default LoadingPage;
