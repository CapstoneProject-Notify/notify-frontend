import styled from "@emotion/styled/macro";
import GlobalStyles from "../../styles/GlobalStyles";
import GoogleLoginButton from "../../components/common/GoogleLoginButton";
import Logo from "../../components/common/Logo";
import InputBox from "../../components/common/InputBox";
import RegisterButton from "../../components/common/RegisterButton";
import React, { useState } from "react";

const Text = styled.div`
  height: 40px;
  width: 100%;
  justify-content: left;
  align-items: left;
  font-family: Inter, sans-serif;
  font-weight: 100;
  font-size: 40px;
  font-style: italic;
  color: ${({ theme }) => theme.color.deepBlue};
  margin-bottom: 10px;
`;

const MajorContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-bottom: 40px;
`;
const MagorContent = styled.span`
  padding-left: 15px;
  margin-right: 15px;
`;
const PageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 화면 전체 높이 */
  width: 100vh;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const WarningText = styled.div`
  font-size: 14px;
  margin-top: 20px;
  color: ${({ theme }) => theme.color.btnOrange};
`;

function RegisterPage() {
  const [major, setMajor] = useState();

  return (
    <PageContainer>
      <Container>
        <LogoContainer>
          <Logo variant={150} />
        </LogoContainer>
        <Text>E-mail</Text>
        <InputBox />
        <Text>Nickname</Text>
        <InputBox />
        <Text>Major</Text>
        <MajorContainer>
          <MagorContent>
            <input
              type="radio"
              value="AAI"
              checked={major === "AAI"}
              onChange={(event) => setMajor(event.target.value)}
            />
            <label>인공지능융합전공</label>
          </MagorContent>
          <MagorContent>
            <input
              type="radio"
              value="BUS"
              checked={major === "BUS"}
              onChange={(event) => setMajor(event.target.value)}
            />
            <label>경영학과</label>
          </MagorContent>
          <MagorContent>
            <input
              type="radio"
              value="COS"
              checked={major === "COS"}
              onChange={(event) => setMajor(event.target.value)}
            />
            <label>유학동양학과</label>
          </MagorContent>
          <MagorContent>
            <input
              type="radio"
              value="ESM"
              checked={major === "ESM"}
              onChange={(event) => setMajor(event.target.value)}
            />
            <label>시스템경영공학과</label>
          </MagorContent>
        </MajorContainer>
        <RegisterButton />
        <WarningText>
          회원 정보는 수정이 불가능하니 신중하게 입력해 주세요.
        </WarningText>
      </Container>
    </PageContainer>
  );
}

export default RegisterPage;
