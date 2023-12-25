import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import SectionContainer from "../components/SectionContainer";
import a from "./../assets/images/image 5.png";
import b from "./../assets/images/image 6.png";
import c from "./../assets/images/image 9.png";

const C_SectionContainer = styled(SectionContainer)`
  flex-direction: column;
  align-items: center;
`;

const Spacing = styled.div`
  width: 100%;
  height: 64px;
`;

const CardGrid = styled.div`
  max-width: 1320px;
  width: 100%;
  display: flex;
  gap: 24px 64px;
  flex-wrap: wrap;
  & > div {
    width: calc((100% - (64px * 2)) / 3);
    @media (max-width: ${(props) => props.theme.desktop}) {
      width: calc((100% - 24px) / 2);
    }
    @media (max-width: ${(props) => props.theme.mobile}) {
      width: 100%;
    }
  }
  @media (max-width: ${(props) => props.theme.desktop}) {
    gap: 64px 24px;
  }
  @media (max-width: ${(props) => props.theme.table}) {
    padding-top: 40px;
  }
  @media (max-width: ${(props) => props.theme.mobile}) {
    padding-top: 0px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  div.title {
    height: 72px;
    overflow: hidden;
    margin: 0 var(--space-16) var(--space-16);
  }
  img {
    height: 267px;
    width: 100%;
    object-fit: cover;
    border-radius: var(--space-24);
    overflow: hidden;
  }
`;

const Issue = () => {
  return (
    <C_SectionContainer id="issue">
      <SectionTitle mainTitle="政策議題" subTitle="POLICY ISSUES" />
      <Spacing />
      <CardGrid>
        <Card>
          <div className="title">
            <h4>為毛孩子謀福利！</h4>
            <h4>推動寵物醫療保障方案</h4>
          </div>
          <img src={a}></img>
        </Card>
        <Card>
          <div className="title">
            <h4>打造休閒天堂！</h4>
            <h4>推廣寵物休閒與娛樂場所</h4>
          </div>
          <img src={b}></img>
        </Card>
        <Card>
          <div className="title">
            <h4>推廣寵物飼養教育，讓愛更加專業</h4>
          </div>
          <img src={c}></img>
        </Card>
      </CardGrid>
    </C_SectionContainer>
  );
};

export default Issue;
