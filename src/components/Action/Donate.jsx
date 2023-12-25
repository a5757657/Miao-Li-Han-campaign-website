import styled from "styled-components";
import MantouText from "./../MantouText";
import ArrowButton from "./../ArrowButton";
import img from "./../../assets/images/image 11.png";

const Box = styled.div`
  padding: 96px;
  background-color: var(--color-primary);
  width: calc((100% - 24px) / 2);
  height: fit-content;
  color: #fff;
  border-radius: var(--space-32);
  p {
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    color: #fff;
  }
  & > div {
    display: flex;
    margin-top: 16px;
    gap: 8px;
    align-items: center;
    & > div,
    & > img {
      object-fit: contain;
      width: calc((100% - 8px) / 2);
    }
    & > div {
      flex-shrink: 0;
    }
    & > img {
      @media (max-width: ${(props) => props.theme.mobile}) {
        height: 126px;
        width: 135px;
      }
    }
  }
  @media (max-width: ${(props) => props.theme.desktop}) {
    width: 100%;
    padding: 40px var(--space-24);
  }
`;

const Title = styled(MantouText)`
  font-size: 52px;
  color: #fff;
  line-height: 1.5;
  @media (max-width: ${(props) => props.theme.desktop}) {
    font-size: 40px;
  }
`;

const Donate = () => {
  return (
    <Box>
      <Title>小額支持喵喵</Title>
      <p>您的小筆捐款，是每隻毛孩未來的大大動力！</p>
      <div>
        <div>
          <ArrowButton label='小額捐款' />
        </div>
        <img src={img}></img>
      </div>
    </Box>
  );
};

export default Donate;
