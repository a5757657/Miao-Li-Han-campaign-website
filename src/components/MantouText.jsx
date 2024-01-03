import styled from "styled-components";

// 使用饅頭體的標題元件
export default styled.div`
  font-family: Mantou !important;
  color: transparent;
  display: flex;
  width: fit-content;
  background: linear-gradient(90deg, #E6793B 1.54%, #FF4185 97.86%);
  background-clip: text;
  -webkit-background-clip: text;
  line-height: 1;
  @media (max-width: ${(props) => props.theme.table}) {
    font-size: 52px;
    line-height: 1;
  }
`;
