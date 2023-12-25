import styled from "styled-components";
import MantouText from "./../MantouText";
import ArrowButton from "./../ArrowButton";
import img from "./../../assets/images/image 14.png";

const Box = styled.div`
  padding: 96px;
  background-color: var(--text-primary);
  width: calc((100% - 24px) / 2);
  color: #fff;
  border-radius: var(--space-32);
  p {
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    color: #fff;
    margin-top: 16px;
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

const Mail = () => {
  return (
    <Box id="mail">
      <Title>民眾服務信箱</Title>
      <p>親愛的鄉親，每一位市民的意見都是我們社區前進的原動力</p>
      <div>
        <div>
          <ArrowButton label='填寫表單' />
        </div>
        <img src={img}></img>
      </div>
    </Box>
  );
};

export default Mail;
