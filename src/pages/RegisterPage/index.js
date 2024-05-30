import styled from "@emotion/styled/macro";
import Logo from "../../components/common/Logo";
import InputBox from "../../components/common/InputBox";
import React, { useState } from "react";
import { commonAxios } from "../../utils/commonAxios";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [major, setMajor] = useState("");
  const user = localStorage.getItem("googleId");
  const navigate = useNavigate();
  console.log(user);
  console.log(nickname, major, email);

  const postRegisterInfo = () => {
    commonAxios
      .post(
        `/mem/register`,
        {
          nickname: nickname,
          userMajor: major,
          email: email,
        },
        {
          headers: { googleId: user },
        }
      )
      .then((res) => {
        localStorage.setItem("authToken", true);
        localStorage.setItem("major", major);
        navigate("/");
        console.log(res);
      })
      .catch((err) => {
        localStorage.setItem("authToken", false);
        console.log(nickname, major, email);
        console.error(err);
      });
  };

  return (
    <PageContainer>
      <Container>
        <LogoContainer>
          <Logo variant={150} />
        </LogoContainer>
        <Text>E-mail</Text>
        <InputBox
          value={email.title}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Text>Nickname</Text>
        <InputBox
          value={nickname.title}
          onChange={(event) => setNickname(event.target.value)}
        />
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
        <RegisterButton onClick={postRegisterInfo}>REGISTER</RegisterButton>
        <WarningText>
          회원 정보는 수정이 불가능하니 신중하게 입력해 주세요.
        </WarningText>
      </Container>
    </PageContainer>
  );
}

export default RegisterPage;

export const RegisterButton = styled.button`
  border-radius: 5px;
  border: none;
  background-color: ${({ theme }) => theme.color.btnGreen};
  color: #ffffff;
  height: 50px;
  width: fit-content;
  font-family: Inter, sans-serif;
  font-style: italic;
  font-size: 17px;
  margin-bottom: 10px;
  padding: 0 20px;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.deepBlue};
  }
`;
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
  margin-bottom: 15px;
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
