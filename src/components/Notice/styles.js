import styled from "@emotion/styled";

export const NoticeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-radius: 10px;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
  justify-content: space-between;
  padding: 0px 20px;
  background-color: ${(props) =>
    props.isScrapped
      ? ({ theme }) => theme.color.lightOrange
      : ({ theme }) => theme.color.lightGreen};
  margin-bottom: 20px;
`;

export const Title = styled.div`
  color: black;
  font-size: 20px;
`;

export const RightContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const CreatedAt = styled.div`
  color: black;
  font-size: 12px;
`;

export const Like = styled.img`
  :focus {
    cursor: pointer;
  }
  width: 25px;
  height: 25px;
  margin-top: 12px;
`;
