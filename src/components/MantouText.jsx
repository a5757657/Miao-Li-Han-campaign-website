import styled from "styled-components";

export default styled.div`
  font-family: Mantou !important;
  font-size: 64px;
  color: transparent;
  display: flex;
  width: fit-content;
  background: var(--color-primary);
  background-clip: text;
  -webkit-background-clip: text;
  @media (max-width: ${(props) => props.theme.mobile}) {
    font-size: 52px;
  }
`;