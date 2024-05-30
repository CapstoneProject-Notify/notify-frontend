import {
  NoticeContainer,
  Title,
  RightContainer,
  CreatedAt,
  Like,
} from "./styles";
import FillLikeIcon from "../../assets/fill_like.svg";
import NotFillLikeIcon from "../../assets/not_fill_like.svg";
import { commonAxios } from "../../utils/commonAxios";
import { useState } from "react";

function Notice({ data, type, like }) {
  const [isScrapped, setIsScrapped] = useState(data.isScrapped);
  const user = localStorage.getItem("googleId");
  const major = localStorage.getItem("major");

  const handleScrapClick = (e) => {
    e.stopPropagation();
    if (data.isScrapped) {
      commonAxios
        .delete(
          `/scrap`,
          {
            type: major,
            googleId: user,
            noticeId: data.noticeId,
          },
          {
            googleId: user,
          }
        )
        .then((res) => {
          setIsScrapped(!isScrapped);
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      commonAxios
        .post(
          `/scrap`,
          {
            type: major,
            googleId: user,
            noticeId: data.noticeId,
          },
          {
            googleId: user,
          }
        )
        .then((res) => {
          setIsScrapped(!isScrapped);
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  return (
    <NoticeContainer
      onClick={() =>
        window.open("https://" + data.url, "_blank", "noopener, noreferrer")
      }
      isScrapped={isScrapped}
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
