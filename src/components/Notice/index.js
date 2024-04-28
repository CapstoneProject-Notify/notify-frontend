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

function Notice(props) {
  const [isLiked, setIsLiked] = useState();
  return (
    <NoticeContainer>
      <Title>{props.title}</Title>
      <RightContainer>
        <CreatedAt>작성일 : {props.created_at}</CreatedAt>
        <Like src={NotFillLikeIcon} />
      </RightContainer>
    </NoticeContainer>
  );
}

export default Notice;
