import SectionContainer from "../components/SectionContainer";
import MantouText from "./../components/MantouText";
import styled from "styled-components";

const C_SectionContainer = styled(SectionContainer)`
  background-color: var(--bg-color-theme1);
`;

const DesktopMantou = styled.div`
  font-size: 96px !important;
  @media (max-width: ${(props) => props.theme.desktop}) {
    font-size: 52px !important;
  }
  @media (max-width: ${(props) => props.theme.table}) {
    display: none;
  }
`;

const TableMantou = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  font-size: 52px !important;
  @media (max-width: ${(props) => props.theme.table}) {
    display: flex;
  }
`;

const Title = styled.div`
  display: flex;
  gap: var(--space-16);
  justify-content: center;
  align-items: center;
  h1 {
    display: flex;
    align-items: center;
    gap: var(--space-16);
    box-shadow: 0px 4px 12px 0px #a3b4cb33;
    background: #fff;
    padding: 12px var(--space-16);
    border-radius: var(--space-16);
    color: var(--color-primary);
    margin-top: 16px;
    span {
      display: flex;
      width: 50px;
      height: 50px;
      background: linear-gradient(90deg, #e6793b 1.54%, #ff4185 97.86%);
      color: #fff;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      font-size: 32px;
      @media (max-width: ${(props) => props.theme.desktop}) {
        font-size: 26px;
      }
      @media (max-width: ${(props) => props.theme.table}) {
        width: 40px;
        height: 40px;
      }
    }
    @media (max-width: ${(props) => props.theme.desktop}) {
      font-size: 28px;
    }
    @media (max-width: ${(props) => props.theme.table}) {
      margin-top: 24px;
    }
  }
  @media (max-width: ${(props) => props.theme.mobile}) {
    flex-direction: column;
  }
`;

const EndTitle = () => {
  return (
    <C_SectionContainer style={{ flexDirection: 'column', alignItems: 'center' }}>
      <DesktopMantou>
        <MantouText>台灣的明天 喵先鋪路</MantouText>
      </DesktopMantou>
      <TableMantou>
        <MantouText>台灣的明天</MantouText>
        <MantouText>喵先鋪路</MantouText>
      </TableMantou>
      <Title>
        <h1>
          <span>3</span>喵立翰 Miao Li-Han
        </h1>
      </Title>
    </C_SectionContainer>
  );
};

export default EndTitle;
