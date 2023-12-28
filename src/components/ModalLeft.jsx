import styled from "styled-components";
import PropTypes from "prop-types";
import facebook from "./../assets/icons/facebook.svg";
import instagram from "./../assets/icons/instagram.svg";
import line from "./../assets/icons/line.svg";
import twitter from "./../assets/icons/twitter.svg";

const LeftWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 40%;
  p {
    font-size: 14px;
  }
  span {
    font-size: 16px;
  }
  img {
    width: 100%;
  }
  div.infoWrap {
    display: flex;
    flex-direction: column;
    gap: 8px;
    div.link {
      display: flex;
      gap: 16px;
      align-items: center;
      img {
        width: 32px;
        height: 32px;
        cursor: pointer;
      }
    }
  }
  @media (max-width: ${(props) => props.theme.desktop}) {
    width: 100%;
    p {
      font-size: 16px;
    }
    img {
      width: 100%;
    }
  }
`;

const ModalLeft = ({ title, src }) => {
  return (
    <LeftWrap>
      <img src={src}></img>
      <div className="infoWrap">
        <p>{title}</p>
        <div className="link">
          <span>分享</span>
          <img src={facebook}></img>
          <img src={instagram}></img>
          <img src={line}></img>
          <img src={twitter}></img>
        </div>
      </div>
    </LeftWrap>
  );
};

ModalLeft.prototype = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

ModalLeft.defaultProps = {
  title: "標題",
};

export default ModalLeft;
