import styled from "styled-components";
import SectionContainer from "../components/SectionContainer";
import Mail from "../components/Action/Mail";
import Donate from "../components/Action/Donate";

const ContentWrap = styled.div`
  max-width: 1320px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  gap: 24px;
  width: 100%;
  background-color: #fff;
  @media (max-width: ${(props) => props.theme.table}) {
    flex-direction: column;
  }
`;

const Action = () => {
  return (
    <SectionContainer id="money">
      <ContentWrap>
        <Donate />
        <Mail />
      </ContentWrap>
    </SectionContainer>
  );
};

export default Action;
