import styled from "styled-components";
import user from "./../assets/icons/user.svg";
import issue from "./../assets/icons/issue.svg";
import list_check from "./../assets/icons/list_check.svg";
import mail from "./../assets/icons/mail.svg";
import money from "./../assets/icons/money.svg";

const Nav = styled.div`
  display: none;
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0px var(--space-8);
  background-color: var(--slate-50);
  justify-content: center;
  align-items: center;
  gap: 8px;
  z-index: 999;
  @media (max-width: ${(props) => props.theme.desktop}) {
    display: flex;
  }
`;

const Item = styled.a`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 12px 4px var(--space-16) 4px;
  img {
    width: 24px;
  }
  p {
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: center;
  }
`;

const arr = [
  { label: "候選人主張", href: '#user', src: user },
  { label: "最新活動", href: '#list_check', src: list_check },
  { label: "政策議題", href: '#issue', src: issue },
  { label: "小額捐款", href: '#money', src: money },
  { label: "服務信箱", href: '#mail', src: mail },
];

const BottomNavbar = () => {
  return (
    <Nav>
      {arr.map(({ label, src, href }) => (
        <Item href={href} key={label}>
          <img alt={label} src={src}></img>
          <p>{label}</p>
        </Item>
      ))}
    </Nav>
  );
};

export default BottomNavbar;
