import styled from "styled-components";
import PropTypes from "prop-types";
import arrowIcon from "./../assets/icons/arrow_forward.svg";
import arrowIconWhite from "./../assets/icons/arrow_forward_white.svg";

const Button = styled.button`
  display: flex;
  height: 64px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: fit-content;
  border: none;
  border-radius: 500px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  cursor: pointer;
  white-space: nowrap;
`;

const ButtonDef = styled(Button)`
  padding: var(--space-16) var(--space-24);
  color: var(--text-primary);
  background-color: var(--slate-100);
`;

const ButtonV1 = styled(Button)`
  padding: var(--space-16) var(--space-24);
  color: var(--text-primary);
  background-color: #fff;
`;

const ButtonV2 = styled(Button)`
  width: 100%;
  padding: var(--space-16) var(--space-24);
  color: #fff;
  background-color: var(--color-primary);
  transition: 0.3s;
  &:disabled {
    background-color: var(--slate-400);
  }
`;

const ArrowButton = ({ buttonType, arrow, label, onClick, disabled }) => {
  const btnObj = {
    default: () => (
      <ButtonDef onClick={onClick}>
        {label}
        {arrow && <img alt="arrow" src={arrowIcon}></img>}
      </ButtonDef>
    ),
    variant2: () => (
      <ButtonV1 onClick={onClick}>
        {label}
        {arrow && <img alt="arrow" src={arrowIcon}></img>}
      </ButtonV1>
    ),
    variant3: () => (
      <ButtonV2 onClick={onClick} disabled={disabled}>
        {label}
        {arrow && <img alt="arrow" src={arrowIconWhite}></img>}
      </ButtonV2>
    ),
  };

  return <>{btnObj[buttonType]()}</>;
};

ArrowButton.prototype = {
  buttonType: PropTypes.oneOf(["default", "variant2", "variant3"]),
  arrow: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

ArrowButton.defaultProps = {
  buttonType: "default",
  arrow: true,
  label: "按鈕文字",
  onClick: () => {},
  disabled: false
};

export default ArrowButton;
