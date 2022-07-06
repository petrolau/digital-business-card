import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import { StyledFooter } from "./styles";

const Footer = () => {
  return (
    <StyledFooter>
      <AiFillTwitterSquare />
      <AiFillFacebook />
      <AiFillInstagram />
      <AiFillGithub />
    </StyledFooter>
  );
};

export default Footer;
