import styled from "styled-components";
import facebook from "./../assets/icons/facebook.svg";
import instagram from "./../assets/icons/instagram.svg";
import youtube from "./../assets/icons/youtube.svg";

const Container = styled.div`
  width: 100%;
  padding: var(--space-64) 276px;
  display: flex;
  gap: 8px;
  background-color: var(--bg-color-theme2);
  div.right,
  div.left {
    width: calc(50% - 4px);
    display: flex;
    flex-direction: column;
    gap: 16px;
    p {
      font-size: 14px;
    }
    @media (max-width: ${(props) => props.theme.desktop}) {
      width: 100%;
    }
  }
  div.right {
    p {
      font-size: 16px;
    }
  }
  @media (max-width: ${(props) => props.theme.desktop}) {
    padding: var(--space-64) 36px;
    flex-direction: column;
    gap: 24px;
    padding-bottom: 132px;
  }
`;

const Title = styled.div`
  gap: var(--space-16);
  h3 {
    display: flex;
    align-items: center;
    gap: var(--space-8);
    color: var(--color-primary);
    span {
      display: flex;
      width: 32px;
      height: 32px;
      background: linear-gradient(90deg, #e6793b 1.54%, #ff4185 97.86%);
      color: #fff;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      font-size: 20px;
    }
  }
`;

const ImgWrap = styled.div`
  display: flex;
  gap: 8px;
  div {
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 50%;
    img {
      width: 28px;
      height: 28px;
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <div className="left">
        <Title>
          <h3>
            <span>3</span>喵立翰 Miao Li-Han
          </h3>
        </Title>
        <ImgWrap>
          <div>
            <img src={facebook}></img>
          </div>
          <div>
            <img src={instagram}></img>
          </div>
          <div>
            <img src={youtube}></img>
          </div>
        </ImgWrap>
        <p>© 2023 喵立翰 Miao Li-Han 版權所有</p>
      </div>
      <div className="right">
        <h4>競選總部</h4>
        <div className="info">
          <p>辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓</p>
          <p>電話：(02) 888-5678</p>
          <p>電子郵件地址：meowoffice@linmeow.tw</p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
