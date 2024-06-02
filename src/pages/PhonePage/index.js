import styled from "@emotion/styled/macro";
import AppLayout from "../../components/common/AppLayout";
import { NoticeContainer, Title } from "../../components/Notice/styles";

const data = {
  data: {
    notices: [
      {
        phoneId: 1,
        title: "시스템경영공학과",
        telephone: "Tel. 031-290-7590",
      },
      {
        phoneId: 2,
        title: "인공지능융합전공",
        telephone: "Tel. 02-740-1782",
      },
      {
        phoneId: 3,
        title: "경영학과",
        telephone: "Tel. 02-760-0855",
      },
      {
        phoneId: 4,
        title: "유학동양학과",
        telephone: "Tel. 02-760-1030",
      },
    ],
  },
};

function PhonePage() {
  const TelephoneList = data.data.notices.map((telephone) => (
    <NoticeContainer key={telephone.phoneId}>
      <Title>{telephone.title}</Title>
      <Number>{telephone.telephone}</Number>
    </NoticeContainer>
  ));

  return (
    <>
      <AppLayout>
        <SearchContainer>
          <TitleText>Telephone</TitleText>
          <WarningText>* 학과 사무실 전화번호입니다.</WarningText>
        </SearchContainer>
        {TelephoneList}
      </AppLayout>
    </>
  );
}

export default PhonePage;

export const SearchContainer = styled.div`
  width: 100%;
  margin: 50px 0;
  border-bottom: 1px solid;
`;

export const TitleText = styled.div`
  width: 100%;
  text-align: left;
  font-size: 30px;
  margin-bottom: 60px;
  font-family: "GmarketSansMedium";
`;

const WarningText = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.color.btnOrange};
  font-family: GmarketSansMedium;
  margin-bottom: 10px;
`;

export const Number = styled.div`
  color: black;
  font-size: 17px;
  font-family: "NanumBarunpen";
`;
