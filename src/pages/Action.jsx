import styled from "styled-components";
import SectionContainer from "../components/SectionContainer";
import Mail from "../components/Action/Mail";
import Donate from "../components/Action/Donate";

const C_SectionContainer = styled(SectionContainer)`
  background-color: var(--bg-color-theme1);
`;

const ContentWrap = styled.div`
  max-width: 1320px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  gap: 24px;
  width: 100%;
  @media (max-width: ${(props) => props.theme.table}) {
    flex-direction: column;
  }
`;

const Action = () => {
  return (
    <C_SectionContainer id="money">
      <ContentWrap>
        <Donate data-aos-duration="1000"  data-aos="fade-right"/>
        <Mail data-aos-duration="1000"  data-aos="fade-left"/>
      </ContentWrap>
    </C_SectionContainer>
  );
};

export default Action;
