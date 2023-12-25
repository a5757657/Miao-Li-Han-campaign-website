import MantouText from "./../components/MantouText";
import styled from "styled-components";
import bg from "./../assets/images/Group 14.png";
import man from "./../assets/images/image 5-1.png";
import SocialLinks from "../components/SocialLinks";

const BannerWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrap = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
  align-items: center;
  gap: var(--space-16);
  padding: var(--space-96) 0 var(--space-16);
  @media (max-width: ${(props) => props.theme.desktop}) {
    padding-top: var(--space-32);
  }
`;

const Slogan = styled.div`
  display: flex;
  @media (max-width: ${(props) => props.theme.table}) {
    flex-direction: column;
    align-items: center;
  }
`;

const DesktopMantou = styled.div`
  font-size: 96px !important;
  @media (max-width: ${(props) => props.theme.desktop}) {
    font-size: 52px !important;
  }
  @media (max-width: ${(props) => props.theme.table}) {
    display: none;
  }
`;

const TableMantou = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  font-size: 52px !important;
  @media (max-width: ${(props) => props.theme.table}) {
    display: flex;
  }
`;

const Title = styled.div`
  display: flex;
  gap: var(--space-16);
  justify-content: center;
  align-items: center;
  h3 {
    background-color: var(--text-primary);
    color: #fff;
    font-weight: 700;
    padding: 12px var(--space-16);
    border-radius: var(--space-16);

    @media (max-width: ${(props) => props.theme.desktop}) {
      font-size: 20px;
    }
  }
  h1 {
    display: flex;
    align-items: center;
    gap: var(--space-16);
    box-shadow: 0px 4px 12px 0px #a3b4cb33;
    background: #fff;
    padding: 12px var(--space-16);
    border-radius: var(--space-16);
    color: var(--color-primary);
    span {
      display: flex;
      width: 50px;
      height: 50px;
      background: linear-gradient(90deg, #e6793b 1.54%, #ff4185 97.86%);
      color: #fff;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      font-size: 32px;
      @media (max-width: ${(props) => props.theme.desktop}) {
        font-size: 26px;
      }
      @media (max-width: ${(props) => props.theme.table}) {
        width: 40px;
        height: 40px;
      }
    }
    @media (max-width: ${(props) => props.theme.desktop}) {
      font-size: 28px;
    }
  }
  @media (max-width: ${(props) => props.theme.mobile}) {
    flex-direction: column;
  }
`;

const ImgWrap = styled.div`
  position: relative;
  display: flex;
  height: fit-content;
  margin-bottom: -1px;
  .man {
    width: 420px;
    @media (max-width: ${(props) => props.theme.table}) {
      width: 197px;
    }
  }
  .bgc {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    @media (max-width: ${(props) => props.theme.table}) {
      width: 343px;
    }
  }
`;

const Marquee = styled.div`
  width: 100%;
  height: 87px;
  background-color: var(--color-primary);
  position: relative;
  overflow: hidden;
  div {
    position: absolute;
    left: 0px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    gap: 10px;
    animation: marquee infinite linear 20s;
    span {
      width: 1820px;
      color: #fff;
      font-size: 64px;
      font-weight: 400;
      line-height: 1;
      font-family: Mantou;
      white-space: nowrap;
      @media (max-width: ${(props) => props.theme.table}) {
        font-size: 40px;
        width: 1140px;
      }
    }
    @media (max-width: ${(props) => props.theme.table}) {
      font-size: 40px;
      animation: marquee-table infinite linear 20s;
    }
    @keyframes marquee {
      0% {
        left: 0px;
      }
      100% {
        left: -3660px;
      }
    }
    @keyframes marquee-table {
      0% {
        left: 0px;
      }
      100% {
        left: -2300px;
      }
    }
  }
  @media (max-width: ${(props) => props.theme.table}) {
    height: 62px;
  }
`;

const Banner = () => {
  return (
    <>
      <BannerWrap>
        <TitleWrap>
          <Slogan>
            <DesktopMantou>
              <MantouText>台灣的明天 喵先鋪路</MantouText>
            </DesktopMantou>
            <TableMantou>
              <MantouText>台灣的明天</MantouText>
              <MantouText>喵先鋪路</MantouText>
            </TableMantou>
          </Slogan>
          <Title>
            <h3>2024 立委參選人</h3>
            <h1>
              <span>3</span>喵立翰 Miao Li-Han
            </h1>
          </Title>
        </TitleWrap>
        <ImgWrap>
          <img className="man" src={man}></img>
          <img className="bgc" src={bg}></img>
          <SocialLinks/>
        </ImgWrap>
      </BannerWrap>
      <Marquee>
        <div>
          <span>為喵星人，護台灣！ 從喵的眼中，看見台灣 喵的未來，人的希望</span>
          <span>為喵星人，護台灣！ 從喵的眼中，看見台灣 喵的未來，人的希望</span>
          <span>為喵星人，護台灣！ 從喵的眼中，看見台灣 喵的未來，人的希望</span>
        </div>
      </Marquee>
    </>
  );
};

export default Banner;
