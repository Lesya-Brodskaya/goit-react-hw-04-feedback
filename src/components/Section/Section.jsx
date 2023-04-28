import PropTypes from 'prop-types';
import { Title, SectionBox } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionBox>
      <Title>{title}</Title>
      {children}
    </SectionBox>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default Section;
