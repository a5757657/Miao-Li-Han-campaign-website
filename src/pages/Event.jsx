import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import SectionContainer from "../components/SectionContainer";
import ContentWrap from "../components/ContentWrap";
import catfirst from "./../assets/images/Frame 32.png";
import eventData from "../assets/data/eventData";
import ArrowButton from "../components/ArrowButton";

const C_SectionContainer = styled(SectionContainer)`
  flex-direction: column;
  align-items: center;
`;

const C_ContentWrap = styled(ContentWrap)`
  padding-top: var(--space-64);
  border-radius: 0px;
  @media (max-width: ${(props) => props.theme.desktop}) {
    gap: 24px;
  }
`;

const MainEvent = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 12px);
  img {
    border-radius: var(--space-16);
    object-fit: cover;
    @media (max-width: ${(props) => props.theme.mobile}) {
      gap: 24px;
    }
  }
  @media (max-width: ${(props) => props.theme.desktop}) {
    width: 100%;
  }
`;

const SubEventWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 24px;
  width: calc(50% - 12px);
  div {
    padding-top: 0px;
    h5 {
      font-size: 16px;
    }
    p {
      font-size: 16px;
      height: 48px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  @media (max-width: ${(props) => props.theme.desktop}) {
    width: 100%;
  }
`;

const EventWrap = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 16px;
  cursor: pointer;
  img {
    width: 201px;
    // height: 134px;
    border-radius: 8px;
    object-fit: cover;
    @media (max-width: ${(props) => props.theme.table}) {
      width: 109px;
    }
    @media (max-width: ${(props) => props.theme.mobile}) {
      width: 109px;
    }
  }
`;

const InfoContent = styled.div`
  padding-top: var(--space-16);
  display: flex;
  flex-direction: column;
  gap: 8px;
  span {
    color: var(--slate-400);
  }
  h6 {
    font-size: 20px;
  }
  p {
    font-size: 16px;
  }
`;

const Event = () => {
  return (
    <C_SectionContainer id="list_check">
      <SectionTitle mainTitle="最新活動" subTitle="LATEST EVENTS" />
      <C_ContentWrap>
        <MainEvent>
          <img alt="catfirst" src={catfirst}></img>
          <InfoContent>
            <span>2023/12/26</span>
            <h5>參與台北寵物論壇，爭取貓咪友善環境</h5>
            <p>
              炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的
              VIP 休憩空間。
            </p>
          </InfoContent>
        </MainEvent>
        <SubEventWrap>
          {eventData.map(({ date, title, info, img }) => (
            <EventWrap key={title}>
              <img alt={title} src={img}></img>
              <InfoContent>
                <span>{date}</span>
                <h5>{title}</h5>
                <p>{info}</p>
              </InfoContent>
            </EventWrap>
          ))}
          <ArrowButton label="查看更多" />
        </SubEventWrap>
      </C_ContentWrap>
    </C_SectionContainer>
  );
};

export default Event;
