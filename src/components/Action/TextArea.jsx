import styled from "styled-components";

const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: var(--space-16);
  gap: 8px;
  transition: 0.3s;
  cursor: pointer;
  flex-grow: 1;
`;

const InputWrap = styled.div`
  display: flex;
  gap: 10px;
  border-radius: var(--space-8);
  background-color: var(--slate-100);
  padding: var(--space-16) 15px;
  align-items: center;
  height: 100%;
  @media (max-width: ${(props) => props.theme.desktop}) {
    height: 176px;
    align-items: flex-start;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  font-size: 18px;
  border: none;
  background-color: transparent;
  resize: none;
  &:focus-visible {
    outline: none;
  }
`;

const TextArea = () => {
  return (
    <Item>
      <h5 className="name">您的建言</h5>
      <InputWrap>
        <Textarea type="text" placeholder="輸入內容" />
      </InputWrap>
    </Item>
  );
};

export default TextArea;
