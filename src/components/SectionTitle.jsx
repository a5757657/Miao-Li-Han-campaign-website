import styled from "styled-components";
import MantouText from "./MantouText";
import PropTypes from 'prop-types'

const SubTitle = styled.h6`
  color: #fff;
  padding: var(--space-8) 12px;
  background-color: var(--text-primary);
  width: fit-content;
  border-radius: var(--space-8);
  margin-left: auto;
  margin-right: auto;
`;

const PageTitle = styled.div`
  text-align: center;
`;

const Title = styled(MantouText)`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5 !important;
  font-size: 64px;
  @media (max-width: ${(props) => props.theme.table}) {
    font-size: 52px;
  }
`;

const SectionTitle = ({ mainTitle, subTitle }) => {
  return (
    <PageTitle>
      <SubTitle data-aos-duration="1000" data-aos-delay="200" data-aos="fade-up">{subTitle}</SubTitle>
      <Title data-aos-duration="1000" data-aos-delay="400" data-aos="fade-up">{mainTitle}</Title>
    </PageTitle>
  );
};

SectionTitle.prototype = {
  mainTitle: PropTypes.string,
  subTitle: PropTypes.string
}

SectionTitle.defaultProps = {
  mainTitle: '請輸入標題',
  subTitle: '請輸入標題',
}

export default SectionTitle;
