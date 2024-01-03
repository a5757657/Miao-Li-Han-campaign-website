import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import SectionContainer from "../components/SectionContainer";
import ContentWrap from "../components/ContentWrap";
import catfirst from "./../assets/images/Frame 32.png";
import eventData from "../assets/data/eventData";
import ArrowButton from "../components/ArrowButton";
import Modal from "../components/Modal";
import ImgCard from "../components/ImgCard";
import ModalLeft from "../components/ModalLeft";
import { useState, Fragment } from "react";

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
  position: relative;
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
  &::before {
    content: '';
    position: absolute;
    background-color: var(--color-primary);
    transform: translateY(-50%);
    right: -5px;
    top: 50%;
    width: 5px;
    height: 100%;
    transition: 0.2s;
  }
  &:hover {
    &::before {
      right: 0px;
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

const ModalContent = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
  div.right {
    flex-grow: 1;
    div.title {
      h2 {
        color: var(--color-primary);
        @media (max-width: ${(props) => props.theme.mobile}) {
          font-size: 24px;
        }
      }
      p {
        margin-top: 8px;
        font-size: 14px;
        color: var(--text-secondary);
        padding-bottom: var(--space-32);
      }
    }
    & > p {
      font-size: 16px;
      padding-bottom: 96px;
    }
    div.moreEvent {
      width: 100%;
      padding: var(--space-16);
      background-color: var(--slate-50);
      border-radius: 12px;
      h6 {
        font-weight: 600;
      }
      div.enevts {
        display: flex;
        gap: 16px;
        margin-top: 16px;
      }
    }
  }
  @media (max-width: ${(props) => props.theme.desktop}) {
    flex-direction: column;
  }
`;

const Event = () => {
  const [open, setOpen] = useState(false);
  const [dataIndex, setDataIndex] = useState(0);

  const handleClickEvent = (idx) => {
    setDataIndex(idx);
    setOpen(true);
  };

  return (
    <Fragment>
      <C_SectionContainer id="list_check">
        <SectionTitle mainTitle="最新活動" subTitle="LATEST EVENTS" />
        <C_ContentWrap>
          <MainEvent>
            <img data-aos-duration="1000" data-aos-dalay="200" data-aos="fade-right" alt="catfirst" src={catfirst}></img>
            <InfoContent>
              <span data-aos-duration="1000" data-aos-dalay="200" data-aos="fade-right">2023/12/26</span>
              <h5 data-aos-duration="1000" data-aos-dalay="200" data-aos="fade-right">參與台北寵物論壇，爭取貓咪友善環境</h5>
              <p data-aos-duration="1000" data-aos-dalay="200" data-aos="fade-right">
                炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的
                VIP 休憩空間。
              </p>
            </InfoContent>
          </MainEvent>
          <SubEventWrap>
            {eventData.map(({ date, title, info, img }, index) => (
              <EventWrap data-aos-duration="1000" data-aos-dalay={`${index * 0 + 200}`} data-aos="fade-up" onClick={() => handleClickEvent(index)} key={title}>
                <img alt={title} src={img}></img>
                <InfoContent>
                  <span>{date}</span>
                  <h5>{title}</h5>
                  <p>{info}</p>
                </InfoContent>
              </EventWrap>
            ))}
            <ArrowButton data-aos-duration="1000" data-aos-dalay="200" data-aos="fade-up" label="查看更多" />
          </SubEventWrap>
        </C_ContentWrap>
      </C_SectionContainer>
      <Modal open={open} setOpen={setOpen} title="最新活動">
        <ModalContent>
          <ModalLeft title={eventData[dataIndex].mainTitle} src={eventData[dataIndex].img} />
          <div className="right">
            <div className="title">
              <h2>{eventData[dataIndex].title}</h2>
              <p>{eventData[dataIndex].date}</p>
            </div>
            <p>
              {eventData[dataIndex].info}
              {dataIndex === 2 && "我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。"}
            </p>
            <div className="moreEvent">
              <h6>更多活動</h6>
              <div className="enevts">
                {eventData.map(({ title, img }, i) => {
                  if (i !== dataIndex) {
                    return <ImgCard key={title} title={title} src={img} onClick={() => handleClickEvent(i)} />;
                  }
                })}
              </div>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default Event;
