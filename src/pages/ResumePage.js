import styled from "styled-components";

const MainContainer = styled.div`
  background-color: #f8f8f8; /* Set your desired off-white color code */
  min-height: 100vh; /* Ensure the container takes at least the full height of the viewport */
  display: flex;
  flex-direction: column;
`;

function ResumePage() {
  return (
    <MainContainer>
      I should have my resume here soon!
    </MainContainer>
  );
}

export default ResumePage;
