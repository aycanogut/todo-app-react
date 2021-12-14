import styled from "styled-components";

import helpers from "../helpers";

import Form from "../Form/Form";
// import Brand from "../Brand/Brand";

const StyledWrapper = styled.div`
  max-width: 590px;
  margin: 40px auto 0 auto;
  color: ${helpers.colors.white};

  @media only screen and ${helpers.device.md} {
    margin: 90px auto 0 auto;
  } ;
`;

const Wrapper = () => {
  return (
    <>
      {/* <Brand /> */}
      <StyledWrapper>
        <Form />
      </StyledWrapper>
    </>
  );
};

export default Wrapper;
