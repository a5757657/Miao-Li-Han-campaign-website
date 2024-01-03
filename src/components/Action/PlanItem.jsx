import PropTypes from "prop-types";
import styled from "styled-components";

const Item = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-24) var(--space-16);
  border: 2px solid ${(props) => (props.$isSelect ? "var(--color-primary)" : "var(--slate-200)")};
  border-radius: var(--space-16);
  transition: 0.3s;
  cursor: pointer;
  h5.name {
    color: var(--color-primary);
    padding-left: 1em;
  }
  div.priceWrap {
    display: flex;
    align-items: center;
    gap: 24px;
    div.price {
      display: flex;
      align-items: center;
      gap: 12px;
      p {
        font-size: 16px;
      }
    }
    span {
      font-size: 14px;
      color: var(--text-secondary);
    }
  }
  @media (max-width: ${(props) => props.theme.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    div.priceWrap {
      width: 100%;
      justify-content: space-between;
    }
  }
`;

// 捐款方案的選項元件
const PlanItem = ({ name, price, count, isSelect, onClick }) => {
  return (
    <Item $isSelect={isSelect} onClick={onClick}>
      <h5 className="name">{name}</h5>
      <div className="priceWrap">
        <div className="price">
          <p>NT$</p>
          <h4>{new Intl.NumberFormat().format(price)}</h4>
        </div>
        <span>{`已有${new Intl.NumberFormat().format(count)}人贊助`}</span>
      </div>
    </Item>
  );
};

PlanItem.prototype = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  isSelect: PropTypes.bool,
  onClick: PropTypes.func,
};

PlanItem.defaultProps = {
  isSelect: false,
  onClick: () => {},
};

export default PlanItem;
