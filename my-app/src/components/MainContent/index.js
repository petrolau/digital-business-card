import { StyledDiv, StyledH2, StyledSpan } from "./styles";

const MainContent = () => {
  return (
    <StyledDiv>
      <StyledH2>About</StyledH2>
      <StyledSpan>
        I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn.
      </StyledSpan>
      <StyledH2>Interests</StyledH2>
      <StyledSpan>
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
        Entrepeneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </StyledSpan>
    </StyledDiv>
  );
};

export default MainContent;
