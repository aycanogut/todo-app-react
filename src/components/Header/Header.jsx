import styled from "styled-components";

import helpers from "../helpers";

const StyledHeader = styled.header`
  padding: 1.6rem 0;
  font-size: 2rem;
  text-align: center;
  color: ${helpers.colors.body};

  @media only screen and ${helpers.device.lg} {
    padding: 2.4rem 0 1.6rem 0;
  } ;
`;

const Header = () => {
  return <StyledHeader>ToDo List</StyledHeader>;
};

export default Header;
