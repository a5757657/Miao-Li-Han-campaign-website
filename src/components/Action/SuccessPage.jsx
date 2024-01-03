import styled from "styled-components";
import PropTypes from "prop-types";
import donate_success from "./../../assets/icons/donate_success.svg";
import ArrowButton from "../ArrowButton";

const Success = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  button {
    padding: var(--space-16) 96px;
  }
`;

// 送出資料時成功的畫面狀態
const SuccessPage = ({ title, setOpen }) => {
  return (
    <Success>
      <h3>{title}</h3>
      <img src={donate_success}></img>
      <ArrowButton arrow={false} onClick={() => setOpen(false)} label="關閉" />
    </Success>
  );
};

SuccessPage.prototype = {
  title: PropTypes.string,
};

SuccessPage.defaultProps = {
  title: "標題文字",
};

export default SuccessPage;
