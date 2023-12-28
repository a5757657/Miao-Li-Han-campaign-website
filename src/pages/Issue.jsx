import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import SectionContainer from "../components/SectionContainer";
import ImgCard from "../components/ImgCard";
import a from "./../assets/images/image 5.png";
import b from "./../assets/images/image 6.png";
import c from "./../assets/images/image 9.png";
import issueData from "../assets/data/issueData";
import Modal from "../components/Modal";
import ModalLeft from "../components/ModalLeft";
import { Fragment, useState } from "react";

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

const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 32px;
  div.right {
    flex-grow: 1;
    overflow-y: scroll;
    div.title {
      padding-bottom: var(--space-32);
      h2 {
        color: var(--color-primary);
        @media (max-width: ${(props) => props.theme.mobile}) {
          font-size: 24px;
        }
      }
    }
    div.info {
      padding-bottom: 96px;
      display: flex;
      flex-direction: column;
      gap: 24px;
      & > div p {
        margin-top: 8px;
        @media (max-width: ${(props) => props.theme.mobile}) {
          font-size: 16px;
        }
      }
      @media (max-width: ${(props) => props.theme.desktop}) {
        padding-bottom: var(--space-32);
      }
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
    height: unset;
  }
`;

const Issue = () => {
  const [open, setOpen] = useState(false);
  const [dataIndex, setDataIndex] = useState(0);

  const handleClickEvent = (idx) => {
    setDataIndex(idx);
    setOpen(true);
  };

  return (
    <Fragment>
      <C_SectionContainer id="issue">
        <SectionTitle mainTitle="政策議題" subTitle="POLICY ISSUES" />
        <Spacing />
        <CardGrid>
          <Card onClick={() => handleClickEvent(0)}>
            <div className="title">
              <h4>為毛孩子謀福利！</h4>
              <h4>推動寵物醫療保障方案</h4>
            </div>
            <img src={a}></img>
          </Card>
          <Card onClick={() => handleClickEvent(1)}>
            <div className="title">
              <h4>打造休閒天堂！</h4>
              <h4>推廣寵物休閒與娛樂場所</h4>
            </div>
            <img src={b}></img>
          </Card>
          <Card onClick={() => handleClickEvent(2)}>
            <div className="title">
              <h4>推廣寵物飼養教育，讓愛更加專業</h4>
            </div>
            <img src={c}></img>
          </Card>
        </CardGrid>
      </C_SectionContainer>
      <Modal open={open} setOpen={setOpen} title="政策議題">
        <ModalContent>
          <ModalLeft title={issueData[dataIndex].mainTitle} src={issueData[dataIndex].img} />
          <div className="right">
            <div className="title">
              <h2>{issueData[dataIndex].mainTitle}</h2>
            </div>
            <div className="info">
              {issueData[dataIndex].info.map(({ title, info }) => (
                <div key={title}>
                  <h5>{title}</h5>
                  <p>{info}</p>
                </div>
              ))}
            </div>
            <div className="moreEvent">
              <h6>更多活動</h6>
              <div className="enevts">
                {issueData.map(({ mainTitle, img }, i) => {
                  if (i !== dataIndex) {
                    return <ImgCard key={mainTitle} title={mainTitle} src={img} onClick={() => handleClickEvent(i)} />;
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

export default Issue;
