import styled from "styled-components";

// 候選人主張、信箱、抖內、活動內容區塊的容器
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
