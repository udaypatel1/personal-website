import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import styled from "styled-components";

const MainContainer = styled.div`
  background-color: #f8f8f8; /* Set your desired off-white color code */
  min-height: 100vh; /* Ensure the container takes at least the full height of the viewport */
  display: flex;
  flex-direction: column;
`;


function App() {
  return (
    <MainContainer>
      <Navbar />
      <LandingPage />
      <Footer />
    </MainContainer>
  );
}

export default App;
