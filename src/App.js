import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import styled from "@emotion/styled/macro";
import GlobalStyles from "./styles/GlobalStyles";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
// import NotFound from "./components/common/NotFound";

// Pages import
import MainPage from "./pages/Main";
import PostPage from "./pages/Post";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const ContentBox = styled.div`
  padding: 50px 0px;
`;

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Container>
            <NavBar />
            <ContentBox>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/notice" element={<PostPage />} />
                {/* <Route path="/login" exact={true} element={<LoginPage />} /> */}

                {/* NotFound 페이지 */}
                {/* <Route path="*" exact={true} element={<NotFound />} /> */}
              </Routes>
            </ContentBox>
            <Footer />
          </Container>
        </Router>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
