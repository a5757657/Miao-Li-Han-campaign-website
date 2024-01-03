import styled from "styled-components";
import MantouText from "./../MantouText";
import ArrowButton from "./../ArrowButton";
import img from "./../../assets/images/image 11.png";
import Modal from "../Modal";
import { Fragment, useState, useEffect } from "react";
import CountUp from "react-countup";
import PlanItem from "./PlanItem";
import planData from "../../assets/data/planData";
import DonateInput from "./DonateInput";
import SuccessPage from "./SuccessPage";

const Box = styled.div`
  padding: 96px;
  background-color: var(--color-primary);
  width: calc((100% - 24px) / 2);
  height: fit-content;
  color: #fff;
  border-radius: var(--space-32);
  p {
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    color: #fff;
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
  display: flex;
  gap: 32px;
  @media (max-width: ${(props) => props.theme.desktop}) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  border-radius: var(--space-24);
  padding: 60px;
  background-color: var(--bg-color-theme2);
  width: 60%;
  display: flex;
  flex-direction: column;
  div.textWrap {
    flex-grow: 1;
    p {
      margin-top: 16px;
      font-size: 16px;
    }
    h1 {
      color: var(--color-primary);
    }

    @media (max-width: ${(props) => props.theme.table}) {
      h1 {
        font-size: 24px;
      }
    }
  }
  div.imgWrap {
    text-align: center;
    img {
      width: 336px;
      height: 348px;
      object-fit: contain;
    }
  }
  @media (max-width: ${(props) => props.theme.desktop}) {
    width: 100%;
    flex-direction: row;
    padding: var(--space-24);
    div.imgWrap {
      display: flex;
      align-items: center;
      width: 30%;
      height: fit-content;
      align-self: center;
      img {
        width: 100%;
        height: unset;
      }
    }
  }
  @media (max-width: ${(props) => props.theme.table}) {
    div.imgWrap {
    }
  }
  @media (max-width: ${(props) => props.theme.mobile}) {
    div.textWrap {
      h1 {
        font-size: 16px;
      }
      p {
        font-size: 14px;
      }
      h2 {
        font-size: 20px;
      }
    }
    div.imgWrap {
      img {
        width: 95px;
        height: 98px;
      }
    }
  }
`;

const Right = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Donate = ({ ...rest }) => {
  const [open, setOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(987655873);
  const [selectPlan, setSelectPlan] = useState(null);
  const [customPrice, setCustomPrice] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleItemOnClick = (index) => {
    if (selectPlan === index) {
      setSelectPlan(null);
    } else {
      setSelectPlan(index);
    }
  };

  const handleCheckDisabled = () => {
    if (selectPlan !== null && selectPlan < 3) {
      return false;
    } else if (selectPlan === 3 && customPrice > 0) {
      return false;
    }
    return true;
  };

  const initState = () => {
    setSelectPlan(null);
    setCustomPrice(null);
    setIsSuccess(false);
  };

  const handleDonate = () => {
    const price = selectPlan === 3 ? customPrice : planData[selectPlan].price;
    setTotalPrice((prev) => prev + price);
    setIsSuccess(true);
  };

  useEffect(() => {
    if (open) {
      initState();
    }
  }, [open]);

  return (
    <Fragment>
      <Box {...rest}>
        <Title>小額支持喵喵</Title>
        <p>您的小筆捐款，是每隻毛孩未來的大大動力！</p>
        <div>
          <div>
            <ArrowButton onClick={() => setOpen(true)} label="小額捐款" />
          </div>
          <img src={img}></img>
        </div>
      </Box>
      <Modal open={open} setOpen={setOpen} title="小額捐款">
        <ModalContent>
          <Left>
            <div className="textWrap">
              <h1>您的小筆捐款</h1>
              <h1>是每隻毛孩未來的大大動力！</h1>
              <p>目前小額贊助總金額</p>
              <h2>
                <CountUp end={totalPrice} />
              </h2>
            </div>
            <div className="imgWrap">
              <img src={img}></img>
            </div>
          </Left>
          {isSuccess ? (
            <SuccessPage title='感謝您的捐款' setOpen={setOpen}/>
          ) : (
            <Right>
              <h5>捐款方案</h5>
              {planData.map(({ name, price, count }, i) => (
                <PlanItem
                  key={name}
                  name={name}
                  price={price}
                  count={count}
                  isSelect={selectPlan === i}
                  onClick={() => handleItemOnClick(i)}
                />
              ))}
              <DonateInput
                onChange={(price) => {
                  if (price.match(/^[0-9]*$/)) {
                    setCustomPrice(+price ? +price : null);
                  }
                }}
                onClick={() => handleItemOnClick(3)}
                isSelect={selectPlan === 3}
                inputValue={customPrice}
              />
              <ArrowButton onClick={handleDonate} buttonType="variant3" label="前往捐款" disabled={handleCheckDisabled()} />
            </Right>
          )}
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default Donate;
