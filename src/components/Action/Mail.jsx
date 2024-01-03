import styled from "styled-components";
import MantouText from "./../MantouText";
import ArrowButton from "./../ArrowButton";
import img from "./../../assets/images/image 14.png";
import img2 from "./../../assets/images/image 10.png";
import Modal from "../Modal";
import SuccessPage from "./SuccessPage";
import { Fragment, useState, useEffect } from "react";
import LabelInput from "./LabelInput";
import inputType from "../../assets/data/inputType";
import TextArea from "./TextArea";

const Box = styled.div`
  padding: 96px;
  background-color: var(--text-primary);
  width: calc((100% - 24px) / 2);
  color: #fff;
  border-radius: var(--space-32);
  p {
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    color: #fff;
    margin-top: 16px;
  }
  & > div {
    display: flex;
    margin-top: 16px;
    gap: 8px;
    align-items: center;
    & > div,
    & > img {
      object-fit: contain;
      width: calc((100% - 8px) / 2);
    }
    & > div {
      flex-shrink: 0;
    }
    & > img {
      @media (max-width: ${(props) => props.theme.mobile}) {
        height: 126px;
        width: 135px;
      }
    }
  }
  @media (max-width: ${(props) => props.theme.desktop}) {
    width: 100%;
    padding: 40px var(--space-24);
  }
`;

const Title = styled(MantouText)`
  font-size: 52px;
  color: #fff;
  line-height: 1.5;
  @media (max-width: ${(props) => props.theme.desktop}) {
    font-size: 40px;
  }
`;

const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 32px;
  @media (max-width: ${(props) => props.theme.desktop}) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  border-radius: var(--space-24);
  background-color: #e3f8ff;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div.title {
    padding: var(--space-64) 60px 0px;
    h1 {
      @media (max-width: ${(props) => props.theme.desktop}) {
        font-size: 32px;
      }
      @media (max-width: ${(props) => props.theme.table}) {
        font-size: 24px;
      }
      @media (max-width: ${(props) => props.theme.mobile}) {
        font-size: 16px;
      }
    }
    @media (max-width: ${(props) => props.theme.desktop}) {
      padding: var(--space-24) 0px 51px var(--space-24);
    }
  }
  @media (max-width: ${(props) => props.theme.desktop}) {
    width: 100%;
    flex-direction: row;
    img {
      width: 55%;
      height: fit-content;
      align-self: flex-end;
    }
  }
`;

const Right = styled.form`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Mail = ({ ...rest }) => {
  const [open, setOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const initState = () => {
    setIsSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  useEffect(() => {
    if (open) {
      initState();
    }
  }, [open]);
  return (
    <Fragment>
      <Box id="mail" {...rest}>
        <Title>民眾服務信箱</Title>
        <p>親愛的鄉親，每一位市民的意見都是我們社區前進的原動力</p>
        <div>
          <div>
            <ArrowButton onClick={() => setOpen(true)} label="填寫表單" />
          </div>
          <img src={img}></img>
        </div>
      </Box>
      <Modal open={open} setOpen={setOpen} title="民眾服務信箱">
        <ModalContent>
          <Left>
            <div className="title">
              <h1>分享您的想法</h1>
              <h1>一同為我們的未來打造更美好！</h1>
            </div>
            <img src={img2}></img>
          </Left>
          {isSuccess ? (
            <SuccessPage title="感謝您的意見" setOpen={setOpen} />
          ) : (
            <Right onSubmit={handleSubmit}>
              {inputType.map(({ title, placeholder, type }) => (
                <LabelInput key={title} title={title} placeholder={placeholder} type={type} />
              ))}
              <TextArea />
              <ArrowButton arrow={false} buttonType="variant3" label="送出意見" />
            </Right>
          )}
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default Mail;
