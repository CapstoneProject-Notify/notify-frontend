import styled from "@emotion/styled/macro";
import InputBox from "../../components/common/InputBox";
import React, { useState, useEffect } from "react";
import WithdrawalButton from "../../components/common/WithdrawalButton";
import { commonAxios } from "../../utils/commonAxios";

const Text = styled.div`
  height: 52px;
  width: 350px;
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
`;

const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  justify-content: left;
  width: 650px;
`;

const AccountDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;

const OrangeText = styled.span`
  font-family: Inter;
  font-weight: 100;
  font-size: 40px;
  font-style: italic;
  margin-bottom: 10px;
  margin-right: 10px;
  color: ${({ theme }) => theme.color.orange};
`;

const GreenText = styled.span`
  font-family: Inter;
  font-weight: 100;
  font-size: 40px;
  font-style: italic;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.color.green};
`;

const PageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 1000px;
  width: 1000px;
  box-shadow: 10px 10px 40px -15px;
  border-radius: 10px;
`;

const WarningText = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.color.btnOrange};
  font-family: GmarketSansMedium;
  margin-bottom: 40px;
`;

export const KeywordContainer = styled.div`
  display: flex;
  width: 100%;
  text-align: right;
  justify-content: center;
  margin-bottom: 20px;
`;

export const GreenBackground = styled.button`
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.btnGreen};
  color: #ffffff;
  height: 50px;
  width: max-content;
  padding: 0 20px;
  font-size: 20px;
  margin-left: 20px;
  font-family: Inter;
  font-weight: 150;
  font-style: italic;
`;

const ListItem = styled.span`
  display: flex;
  height: 40px;
  width: fit-content;
  background-color: #ddeaff;
  border-color: #072b61;
  margin-left: 5px;
  border-radius: 10px;
  padding: 15px;
  margin-right: 20px;
  align-items: center;
  justify-content: center;
`;

const Keywords = styled.span`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-bottom: 60px;
`;
const Deletebutton = styled.button`
  background-color: none;
  border: none;
  margin-left: 10px;
`;

function ProfilePage() {
  const [profileInfo, setProfileInfo] = useState("");
  const [keyword, setKeyword] = useState("");
  const user = localStorage.getItem("googleId");
  const [withdrawal, setWithdrawal] = useState(false);

  //프로필 정보 불러오기
  const getProfileInfo = async () => {
    try {
      const res = await commonAxios.get(`/mem/profile`, {
        headers: { googleId: user },
      });

      // 응답 결과를 로컬 스토리지에 저장
      localStorage.setItem("authToken", true);
      console.log(res);

      // res.data 값을 반환하여 함수 호출 시 사용할 수 있도록 함
      setProfileInfo(res.data.data);
    } catch (err) {
      localStorage.setItem("authToken", false);
      console.error(err);
      // 필요 시 에러 값을 반환하거나 처리
      throw err;
    }
  };

  useEffect(() => {
    getProfileInfo();
  }, []);

  // 키워드 추가하기
  const addKeyword = () => {
    // 키워드가 빈 문자열인 경우 추가하지 않음
    if (keyword.trim() === "") {
      return;
    }

    // 중복된 키워드인지 확인
    if (profileInfo.keywords.includes(keyword)) {
      alert("중복된 키워드입니다.");
      setKeyword("");
      return;
    }

    // 중복되지 않은 경우 키워드 추가
    commonAxios
      .post(
        `/keyword`,
        {
          keyword: keyword,
        },
        {
          headers: { googleId: user },
        }
      )
      .then((res) => {
        localStorage.setItem("authToken", true);
        setKeyword("");
        getProfileInfo(); // 키워드를 추가한 후 다시 프로필 정보를 가져와서 상태를 업데이트
      })
      .catch((err) => {
        localStorage.setItem("authToken", false);
        console.log(keyword);
        console.error(err);
      });
  };

  // 키워드 제거하기
  const deleteKeyword = (keywordToDelete) => {
    commonAxios
      .delete(`/keyword`, {
        data: { keyword: keywordToDelete },
        headers: { googleId: user },
      })
      .then((res) => {
        localStorage.setItem("authToken", true);
        console.log(`Deleted keyword: ${keywordToDelete}`);
        // 키워드 삭제 후 프로필 정보 갱신
        getProfileInfo();
      })
      .catch((err) => {
        localStorage.setItem("authToken", false);
        console.error(err);
      });
  };

  const handleWithdrawalClick = (e) => {
    if (withdrawal) {
      commonAxios
        .delete(`/mem/delete`, {
          data: {
            googleId: user,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  /*const deleteAccount = () => {
    commonAxios
      .delete(`/mem/delete`, {
          headers: { googleId: user },
      })
      .then((res) => {
        localStorage.setItem("authToken", true);
        console.log(`회원 탈퇴 성공`);
        
        navigate("/");
      })
      .catch((err) => {
        localStorage.setItem("authToken", false);
        console.error(err);
      });
  };*/

  return (
    <PageContainer>
      <Container>
        <TextContainer>
          <OrangeText>Your</OrangeText>
          <GreenText>Account</GreenText>
        </TextContainer>
        <AccountContainer>
          <AccountDetail>
            <Text>E-mail</Text>
            {profileInfo.email}
          </AccountDetail>
          <AccountDetail>
            <Text>Nickname</Text>
            {profileInfo.nickname}
          </AccountDetail>
          <AccountDetail>
            <Text>Major</Text>
            {profileInfo.major === "esm"
              ? "시스템경영공학과"
              : profileInfo.major === "aai"
              ? "인공지능융합전공"
              : profileInfo.major === "cos"
              ? "유학동양학과"
              : profileInfo.major === "bus"
              ? "경영학과"
              : profileInfo.major}
          </AccountDetail>
        </AccountContainer>
        <TextContainer>
          <OrangeText>Key</OrangeText>
          <GreenText>Words</GreenText>
        </TextContainer>
        <WarningText>
          * 키워드가 포함된 공지사항이 게시되면 이메일로 알림을 해드립니다.
        </WarningText>
        <KeywordContainer>
          <InputBox
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
          />
          <GreenBackground onClick={addKeyword}>STORAGE</GreenBackground>
        </KeywordContainer>
        <Keywords>
          {profileInfo.keywords &&
            profileInfo.keywords.length > 0 &&
            profileInfo.keywords.map((item, index) => (
              <ListItem key={index}>
                {item}
                <Deletebutton onClick={() => deleteKeyword(item)}>
                  {" "}
                  X
                </Deletebutton>
              </ListItem>
            ))}
        </Keywords>
        <TextContainer>
          <OrangeText>Membership</OrangeText>
          <GreenText> Withdrawal</GreenText>
        </TextContainer>
        <WithdrawalButton onClick={handleWithdrawalClick} />
      </Container>
    </PageContainer>
  );
}

export default ProfilePage;
