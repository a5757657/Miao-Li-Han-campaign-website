import styled from "styled-components";

// 每個區塊的最外層容器
export default styled.div`
  max-width: 1320px;
  display: flex;
  justify-content: center;
  border-radius: 50px;
  overflow: hidden;
  gap: 24px;
  width: 100%;
  background-color: #fff;
  @media (max-width: ${(props) => props.theme.desktop}) {
    flex-direction: column;
    gap: unset;
  }
`;
