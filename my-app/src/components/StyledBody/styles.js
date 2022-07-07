import styled from "styled-components";

export const StyledBody = styled.body`
  margin-left: 45rem;
  margin-right: 45rem;
  font-family: "Poppins";
  @media only screen and (max-width: 800px) {
    margin-left: 10rem;
    margin-right: 10rem;
  }
  @media only screen and (max-width: 600px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;
