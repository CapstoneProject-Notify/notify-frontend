import {
  NoticeContainer,
  Title,
  RightContainer,
  CreatedAt,
  Like,
} from "./styles";
import FillLikeIcon from "../../assets/fill_like.svg";
import NotFillLikeIcon from "../../assets/not_fill_like.svg";
import { useState } from "react";

function Notice({ data }) {
  const [isLiked, setIsLiked] = useState();
  return (
    <NoticeContainer>
      <Title>{data.title}</Title>
      <RightContainer>
        <CreatedAt>작성일 : {data.noticeDate}</CreatedAt>
        <Like src={NotFillLikeIcon} />
      </RightContainer>
    </NoticeContainer>
  );
}

export default Notice;