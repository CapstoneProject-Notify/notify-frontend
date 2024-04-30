import styled from "@emotion/styled/macro";
import GlobalStyles from "../../styles/GlobalStyles";
import GoogleLoginButton from "../../components/common/GoogleLoginButton";
import Logo from "../../components/common/Logo";
import { useState } from "react";
import { commonAxios } from "../../utils/commonAxios";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 화면 전체 높이 */
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

function LoginPage() {
  return (
    <div>
      <Container>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <GoogleLoginButton />
      </Container>
    </div>
  );
}

export default LoginPage;
