import styled from "styled-components";
import ResumeBodyContent from "../components/ResumeBodyContent";

const MainContainer = styled.div`
  background-color: #f8f8f8; /* Set your desired off-white color code */
  min-height: 100vh; /* Ensure the container takes at least the full height of the viewport */
  display: flex;
  flex-direction: column;
`;

function ResumePage() {
  return (
    <MainContainer>
      <ResumeBodyContent />
    </MainContainer>
  );
}

export default ResumePage;
