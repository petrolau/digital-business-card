import "./App.css";
import ImageCard from "./components/ImageCard";
import Header from "./components/Header";
import { StyledBody, StyledDiv } from "./components/StyledBody/styles";
import ButtonCard from "./components/ButtonCard";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <StyledBody>
      <StyledDiv>
        <ImageCard />
        <Header />
        <ButtonCard />
        <MainContent />
        <Footer />
      </StyledDiv>
    </StyledBody>
  );
}

export default App;
