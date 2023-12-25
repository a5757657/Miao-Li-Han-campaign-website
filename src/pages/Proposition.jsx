import styled from "styled-components";
import image from "./../assets/images/image 8.png";
import SectionTitle from "../components/SectionTitle";
import SectionContainer from "../components/SectionContainer";
import ContentWrap from "../components/ContentWrap";

const C_SectionContainer = styled(SectionContainer)`
  background-color: var(--bg-color-theme2);
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: var(--space-64) 40px;
  h3 {
    mark {
      background-color: transparent;
      color: var(--color-primary);
    }
  }
  p {
    font-size: 18px;
    @media (max-width: ${(props) => props.theme.table}) {
      font-size: 16px;
    }
  }
  @media (max-width: ${(props) => props.theme.table}) {
    padding: 40px var(--space-24);
  }
`;

const Img = styled.img`
  flex-grow: 1;
  object-fit: cover;
`;

const Proposition = () => {
  return (
    <C_SectionContainer id="user">
      <ContentWrap>
        <Content>
          <SectionTitle mainTitle="候選人主張" subTitle="ADVOCATE" />
          <h3>
            我堅信 ! 藉由推動更完善的<mark>貓咪福利</mark>和相關政策，更是間接地投資於<mark>台灣的未來</mark>。
          </h3>
          <p>
            畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。
            因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
          </p>
        </Content>
        <Img src={image} />
      </ContentWrap>
    </C_SectionContainer>
  );
};

export default Proposition;
