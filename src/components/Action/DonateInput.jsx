import PropTypes from "prop-types";
import styled from "styled-components";

const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--space-24) var(--space-16);
  border: 2px solid ${({ $isSelect }) => ($isSelect ? "var(--color-primary)" : "var(--slate-200)")};
  border-radius: var(--space-16);
  gap: 8px;
  transition: 0.3s;
  cursor: pointer;
  h5.name {
    color: var(--color-primary);
  }
`;

const InputWrap = styled.div`
  display: flex;
  gap: 10px;
  border-radius: var(--space-8);
  background-color: var(--slate-100);
  padding: var(--space-16) 15px;
  align-items: center;
  span {
    font-size: 16px;
  }
`;

const Input = styled.input`
  font-size: 18px;
  border: none;
  background-color: transparent;
  &:focus-visible {
    outline: none;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

// 自行輸入贊助金額的input
const DonateInput = ({ isSelect, onClick, inputValue, onChange }) => {
  return (
    <Item $isSelect={isSelect} onClick={onClick}>
      <h5 className="name">自訂贊助金額</h5>
      <InputWrap>
        <span>NT$</span>
        <Input
          onClick={event => event.stopPropagation()}
          onChange={(e) => onChange(e.target.value)}
          value={inputValue === null ? '' : inputValue}
          min={0}
          onWheel={(e) => e.target.blur()}
          type="number"
          placeholder="輸入金額"
        />
      </InputWrap>
    </Item>
  );
};

DonateInput.prototype = {
  isSelect: PropTypes.bool,
  onClick: PropTypes.func,
};

DonateInput.defaultProps = {
  isSelect: false,
  onClick: () => {},
};

export default DonateInput;
