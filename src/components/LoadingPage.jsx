import { useEffect } from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
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
  div {
    width: 100px;
  }
`;

const LoadingPage = ({ display, setDisplay }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <Fade
      timeout={{
        exit: 500,
      }}
      in={display}
    >
      <Layer>
        <Lottie loop={true} animationData={loading} />
      </Layer>
    </Fade>
  );
};

export default LoadingPage;
