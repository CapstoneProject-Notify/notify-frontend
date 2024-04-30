
import styled from "@emotion/styled/macro";
import GlobalStyles from "../../styles/GlobalStyles";
import GoogleLoginButton from "../../components/common/GoogleLoginButton";
import Logo from "../../components/common/Logo";
import InputBox from "../../components/common/InputBox";
import RegisterButton from "../../components/common/RegisterButton";
import React, {useState} from "react";

const Text = styled.div`
  height: 46px;
  width: 1000px;
  justify-content: left;
  align-items: left;
  padding-left: 10px;
  font-family: Inter;
  font-weight: 100;
  font-size: 40px;
  font-style: italic;
  color: ${({ theme }) => theme.color.deepBlue};
  margin-bottom: 10px;
`;


const MajorContainer = styled.div`
  height: 46px;
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-bottom: 30px;
`
const MagorContent = styled.span`
  padding-left: 15px;
  margin-right: 15px;
`
const PageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 화면 전체 높이 */
  width: 80vh;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  
`;

const WarningText = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.color.btnOrange};
`

function RegisterPage() {
  const [x, setX] = useState([]);
  const handleClickRadioButton = (e) => {
    console.log(e.tatget.value)
    setX(e.target.value)
  }

  return (
    <PageContainer>
      <Container>
        <LogoContainer>
        <Logo variant={180}/>
        </LogoContainer>
        <Text>E-mail</Text>
        <InputBox />
        <Text>Nickname</Text>
        <InputBox />
        <Text>Major</Text>
        <MajorContainer>
          <MagorContent>
        <input 
          type='radio'
          value="2"
          checked={x === '1'}
          onChange={handleClickRadioButton}
          />
          <label>인공지능융합전공</label>
          </MagorContent>
          <MagorContent>
          <input 
          type='radio'
          value="2"
          checked={x === '2'}
          onChange={handleClickRadioButton}
          />
          <label>경영학과</label>
          </MagorContent>
          <MagorContent>
          <input 
          type='radio'
          value="2"
          checked={x === '3'}
          onChange={handleClickRadioButton}
          />
          <label>유학동양학과</label>
          </MagorContent>
          <MagorContent>
          <input 
          type='radio'
          value="2"
          checked={x === '4'}
          onChange={handleClickRadioButton}
          />
          <label>시스템경영공학과</label>
          </MagorContent>
          </MajorContainer>
        <RegisterButton />
        <WarningText>회원 정보는 수정이 불가능하니 신중하게 입력해 주세요.</WarningText>
      </Container>
    </PageContainer>
  );
}

export default RegisterPage;
