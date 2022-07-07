import styled from "styled-components";

export const StyledImg = styled.img`
  width: 29rem;
  @media only screen and (max-width: 800px) {
    width: 25.8rem;
  }
  @media only screen and (max-width: 600px) {
    width: 31rem;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
