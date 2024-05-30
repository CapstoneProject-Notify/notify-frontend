import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import styled from "@emotion/styled/macro";
import GlobalStyles from "./styles/GlobalStyles";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import PhonePage from "./pages/PhonePage";



// import NotFound from "./components/common/NotFound";

// Pages import
import MainPage from "./pages/Main";
import PostPage from "./pages/Post";

const clientId = `${process.env.REACT_APP_GOOGLE_CLIENT_ID}`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const ContentBox = styled.div`
  padding: 50px 0px;
`;

// 페이지 레이아웃 설정
const Layout = ({ children }) => (
  <Container>
    <NavBar />
    <ContentBox>{children}</ContentBox>
    <Footer />
  </Container>
);

function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />

          <Router>
            <Routes>
              {/* 렌더링에 NavBar와 Footer 포함 */}
              <Route path="/" element={<Layout children={<MainPage />} />} />
              <Route
                path="/notice"
                element={<Layout children={<PostPage />} />}
              />
              <Route
                path="/mem/profile"
                element={<Layout children={<ProfilePage />} />}
              />
              <Route
                path="/phone"
                element={<Layout children={<PhonePage />} />}
              />
              {/* 렌더링에 NavBar와 Footer 제외  */}
              <Route path="/mem/login" element={<LoginPage />} />
              <Route path="/mem/register" element={<RegisterPage />} />

              {/* NotFound 페이지 */}
              {/* <Route path="*" exact={true} element={<NotFound />} /> */}
            </Routes>
          </Router>
        </ThemeProvider>
      </MuiThemeProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
