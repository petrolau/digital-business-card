import { StyledButton, StyledButton1, StyledDiv } from "./styles";
import { AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";

const ButtonCard = () => {
  return (
    <StyledDiv>
      <StyledButton>
        <AiOutlineMail />
        Email
      </StyledButton>
      <StyledButton1>
        <AiOutlineLinkedin />
        Linkedin
      </StyledButton1>
    </StyledDiv>
  );
};

export default ButtonCard;
