import { StyledDiv, StyledImg } from "./styles";
import image from "../../images/jennie.jpg";

const ImageCard = () => {
  return (
    <StyledDiv>
      <StyledImg src={image} alt="Jennie"></StyledImg>
    </StyledDiv>
  );
};

export default ImageCard;
