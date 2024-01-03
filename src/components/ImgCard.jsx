import styled from "styled-components";
import PropTypes from "prop-types";

const Card = styled.div`
  width: 245px;
  cursor: pointer;
  img {
    width: 100%;
    height: 134px;
    object-fit: cover;
    border-radius: 8px;
  }
  p {
    margin-top: 12px;
    font-size: 16px;
  }
`;

// 最新活動使用的圖文字卡
const ImgCard = ({ title, src, onClick }) => {
  return (
    <Card onClick={onClick}>
      <img src={src}></img>
      <p>{title}</p>
    </Card>
  );
};

ImgCard.prototype = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

ImgCard.defaultProps = {
  title: "標題",
  onClick: () => {},
};

export default ImgCard;
