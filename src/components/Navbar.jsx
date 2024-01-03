import styled from "styled-components";
import logo from "./../assets/icons/logo.svg";
import facebook from "./../assets/icons/facebook.svg";
import instagram from "./../assets/icons/instagram.svg";
import youtube from "./../assets/icons/youtube.svg";

const Nav = styled.div`
  width: 100%;
  height: 100px;
  background-color: var(--bg-color-theme1);
  position: relative;
  padding: var(--space-16) var(--space-24);
  .fixedWrap {
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    padding: var(--space-16) var(--space-24);
    z-index: 999;
    .navWrap {
      border-radius: var(--space-16);
      padding: 12px var(--space-24);
      width: 100%;
      background-color: #fff;
      filter: blur(10);
      display: flex;
      justify-content: space-between;
      align-items: center;
      .linkWrap {
        display: flex;
        gap: var(--space-16);
        align-items: center;
        a {
          text-decoration: none;
          position: relative;
          &::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 0%;
            height: 2px;
            border-radius: 2px;
            background-color: var(--color-primary);
            transition: 0.3s;
          }
          &:hover::before{
            width: 100%;
          }
        }
        @media (max-width: ${(props) => props.theme.desktop}) {
          display: none;
        }
      }
      .logoWrap {
        display: flex;
        gap: var(--space-16);
        align-items: center;
        a {
          width: 32px;
          height: 32px;
          text-decoration: none;
          img {
            transition: .3s;
          }
          &:hover {
            img {
            }
          }
        }
      }
    }
    @media (max-width: ${(props) => props.theme.mobile}) {
      display: none;
    }
  }
  @media (max-width: ${(props) => props.theme.mobile}) {
    height: 56px;
    display: flex;
    align-items: center;
    background-color: #fff;
    img {
      width: 34px;
    }
    h4 {
      font-size: 20px;
    }
  }
`;

const TitleWrap = styled.a`
  gap: var(--space-8);
  align-items: center;
  text-decoration: none;
  h4 {
    color: var(--color-primary);
  }
  display: ${(props) => props.display};
  @media (max-width: ${(props) => props.theme.mobile}) {
    display: flex;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="fixedWrap">
        <div className="navWrap">
          <TitleWrap href="#" display="flex">
            <img alt="logo" src={logo}></img>
            <h4>喵立翰 Miao Li-Han</h4>
          </TitleWrap>
          <div className="linkWrap">
            <a href="#user">候選人主張</a>
            <a href="#list_check">最新活動</a>
            <a href="#issue">政策議題</a>
            <a href="#money">小額捐款</a>
            <a href="#money">民眾服務信箱</a>
          </div>
          <div className="logoWrap">
            <a href="#">
              <img alt="facebook" src={facebook}></img>
            </a>
            <a href="#">
              <img alt="instagram" src={instagram}></img>
            </a>
            <a href="#">
              <img alt="youtube" src={youtube}></img>
            </a>
          </div>
        </div>
      </div>
      <div className="mobileWrap">
        <TitleWrap display="none">
          <img src={logo}></img>
          <h4>喵立翰 Miao Li-Han</h4>
        </TitleWrap>
      </div>
    </Nav>
  );
};

export default Navbar;
