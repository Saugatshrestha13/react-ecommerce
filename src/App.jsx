import styled from "styled-components";
import Home from "./pages/Home";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const App = () => {
  return (
    <MainContainer>
      <Home />
    </MainContainer>
  );
};

export default App;
