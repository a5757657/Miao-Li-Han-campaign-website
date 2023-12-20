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
  padding: var(--space-16) var(--space-24) var(--space-16) var(--space-24);
  .fixedWrap {
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    padding: var(--space-16) var(--space-24) var(--space-16) var(--space-24);
    .navWrap {
      border-radius: var(--space-16);
      padding: var(--space-12) var(--space-24) var(--space-12) var(--space-24);
      width: 100%;
      background-color: #fff;
      opacity: 0.9;
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
        }
        @media (max-width: ${props => props.theme.desktop}) {
          display: none;
        }
      }
      .logoWrap {
        display: flex;
        gap: var(--space-16);
        align-items: center;
        a {
          text-decoration: none;
        }
      }
    }
    @media (max-width: ${props => props.theme.mobile}) {
      display: none;
    }
  }
  @media (max-width: ${props => props.theme.mobile}) {
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

const TitleWrap = styled.div`
  gap: var(--space-8);
  align-items: center;
  h4 {
    color: var(--color-primary);
  }
  display: ${(props) => props.display};
  @media (max-width: ${props => props.theme.mobile}) {
    display: flex;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="fixedWrap">
        <div className="navWrap">
          <TitleWrap display="flex">
            <img src={logo}></img>
            <h4>喵立翰 Miao Li-Han</h4>
          </TitleWrap>
          <div className="linkWrap">
            <a href="#user">候選人主張</a>
            <a href="#list_check">最新活動</a>
            <a href="#issue">政策議題</a>
            <a href="#money">小額捐款</a>
            <a href="#mail">民眾服務信箱</a>
          </div>
          <div className="logoWrap">
            <a href="#">
              <img src={facebook}></img>
            </a>
            <a href="#">
              <img src={instagram}></img>
            </a>
            <a href="#">
              <img src={youtube}></img>
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
