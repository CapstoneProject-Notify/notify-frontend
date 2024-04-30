
import styled from "@emotion/styled/macro";
import GlobalStyles from "../../styles/GlobalStyles";
import GoogleLoginButton from "../../components/common/GoogleLoginButton";
import Logo from "../../components/common/Logo";
import InputBox from "../../components/common/InputBox";
import RegisterButton from "../../components/common/RegisterButton";
import React, {useState} from "react";
import WithdrawalButton from "../../components/common/WithdrawalButton";

const Text = styled.div`
  height: 52px;
  width: 500px;
  justify-content: left;
  align-items: left;
  padding-left: 10px;
  font-family: Inter;
  font-weight: 100;
  font-size: 40px;
  font-style: italic;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.color.deepBlue};
`;

const TextContainer = styled.span`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
`
const AccountContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`
const AccountDetail = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
`
const OrangeText = styled.span`
    font-family: Inter;
    font-weight: 100;
    font-size: 40px;
    font-style: italic;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.color.orange};   
`
const GreenText = styled.span`
    font-family: Inter;
    font-weight: 100;
    font-size: 40px;
    font-style: italic;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.color.green};   
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
  height: 1000px; 
  width: 900px;
`;


const WarningText = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.color.btnOrange};
`

function ProfilePage() {
  const [x, setX] = useState([]);
  const handleClickRadioButton = (e) => {
    console.log(e.tatget.value)
    setX(e.target.value)
  }

  return (
    <PageContainer>
      <Container>
       
        <TextContainer><OrangeText>Your</OrangeText><GreenText>Account</GreenText></TextContainer>
        <AccountContainer>
            <AccountDetail><Text>E-mail</Text>loving5917@gmail.com</AccountDetail>
            <AccountDetail><Text>Nickname</Text>율전이</AccountDetail>
            <AccountDetail><Text>Major</Text>인공지능융합전공</AccountDetail>
        </AccountContainer>
        <TextContainer><OrangeText>Key</OrangeText><GreenText>Words</GreenText></TextContainer>
        <WarningText>* 키워드가 포함된 공지사항이 게시되면 이메일로 알림을 해드립니다.</WarningText>
        <TextContainer><OrangeText>Membership Withdrawal</OrangeText><GreenText>Account</GreenText></TextContainer>
        <WithdrawalButton />
      </Container>
    </PageContainer>
  );
}

export default ProfilePage;
