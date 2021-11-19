import styled from "styled-components";
import PropTypes from "prop-types";

const StyledIcon = styled.img`
  /* css */
`;

const Icon = ({ source }) => {
  return <StyledIcon src={source} />;
};

Icon.propTypes = {
  source: PropTypes.string.isRequired
};

export default Icon;
