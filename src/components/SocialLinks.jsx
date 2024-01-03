import facebook from "./../assets/icons/facebook.svg";
import instagram from "./../assets/icons/instagram.svg";
import youtube from "./../assets/icons/youtube.svg";
import styled from "styled-components";

const LinkWrap = styled.div`
  display: none;
  padding: var(--space-8) 40px;
  box-shadow: 0px 1px 4px 0px #0000001a;
  background-color: #fff;
  border-radius: var(--space-16);
  gap: 18px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 21px;
  a {
    display: flex;
  }
  @media (max-width: ${(props) => props.theme.mobile}) {
    display: flex;
  }
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;
`;

// 手機尺寸互吹現在banner區塊的社群連結
const SocialLinks = () => {
  return (
    <LinkWrap>
      <a href="#">
        <Icon src={facebook} alt="facebook"></Icon>
      </a>
      <a href="#">
        <Icon src={instagram} alt="instagram"></Icon>
      </a>
      <a href="#">
        <Icon src={youtube} alt="youtube"></Icon>
      </a>
    </LinkWrap>
  );
};

export default SocialLinks;
