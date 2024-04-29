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

function Notice({ data, type }) {
  const [isScrapped, setIsScrapped] = useState(data.isScrapped);

  const handleScrapClick = (e) => {
    e.stopPropagation();
    setIsScrapped(!isScrapped);
  };

  return (
    <NoticeContainer
      onClick={() =>
        window.open("https://" + data.url, "_blank", "noopener, noreferrer")
      }
    >
      <Title>{data.title}</Title>
      <RightContainer>
        <CreatedAt>
          {type ? "작성일 :" : ""} {data.noticeDate}
        </CreatedAt>
        <Like
          src={isScrapped ? FillLikeIcon : NotFillLikeIcon}
          onClick={handleScrapClick}
        />
      </RightContainer>
    </NoticeContainer>
  );
}

export default Notice;
