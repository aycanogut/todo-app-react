import styled from "styled-components";

import helpers from "../helpers";

import BrandLogo from "../../assets/logo.png";

const StyledBrand = styled.img`
  display: flex;
  width: 149px;
  height: auto;
  height: auto;
  margin: 2rem auto;

  @media only screen and ${helpers.device.md} {
    margin: 19px 0 0 37px;
  }
`;

const Brand = () => {
  return <StyledBrand src={BrandLogo} alt="Brand Logo" />;
};

export default Brand;
