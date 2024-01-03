import styled from "styled-components";

export default styled.div`
  padding: 104px 36px;
  background-color: #fff;
  display: flex;
  justify-content: center;
    @media (max-width: ${(props) => props.theme.desktop}) {
    padding: var(--space-64) 36px;
  }
  @media (max-width: ${(props) => props.theme.mobile}) {
    padding: var(--space-64) var(--space-16);
  }
`;
