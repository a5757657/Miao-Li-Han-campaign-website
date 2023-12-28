import styled from "styled-components";
import PropTypes from "prop-types";

const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: var(--space-16);
  gap: 8px;
  transition: 0.3s;
  cursor: pointer;
`;

const InputWrap = styled.div`
  display: flex;
  gap: 10px;
  border-radius: var(--space-8);
  background-color: var(--slate-100);
  padding: var(--space-16) 15px;
  align-items: center;
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

const LabelInput = ({ title, value, type, placeholder }) => {
  return (
    <Item>
      <h5 className="name">{title}</h5>
      <InputWrap>
        <Input type={type} value={value} onWheel={(e) => e.target.blur()} placeholder={placeholder} required />
      </InputWrap>
    </Item>
  );
};

LabelInput.prototype = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default LabelInput;
