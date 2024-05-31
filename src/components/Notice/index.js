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
import { useEffect, useState } from "react";
import PopModal from "../common/PopModal";

function Notice({ data, type }) {
  //   const scrapped = scrap ? true : data.isScrapped;
  const [isScrapped, setIsScrapped] = useState(data.isScrapped);
  const user = localStorage.getItem("googleId");
  const major = localStorage.getItem("major");
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  console.log("user", user);
  console.log("scrap", isScrapped, data.isScrapped);

  const handleScrapClick = (e) => {
    e.stopPropagation();
    if (!user) {
      setIsOpen(true);
      setMessage("로그인이 필요한 기능입니다.");
      e.stopPropagation();
    }
    if (data.isScrapped) {
      commonAxios
        .delete(
          `/scrap`,
          {
            type: type,
            googleId: user,
            noticeId: data.noticeId,
          },
          {
            headers: {
              googleId: user,
            },
          }
        )
        .then((res) => {
          setIsScrapped(!isScrapped);
          e.stopPropagation();
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
            type: type,
            googleId: user,
            noticeId: data.noticeId,
          },
          {
            googleId: user,
          }
        )
        .then((res) => {
          setIsScrapped(!isScrapped);
          e.stopPropagation();
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
          {"작성일 :"} {data.noticeDate}
        </CreatedAt>
        <Like
          src={isScrapped ? FillLikeIcon : NotFillLikeIcon}
          onClick={handleScrapClick}
        />
        <PopModal isOpen={isOpen} setIsOpen={setIsOpen} message={message} />
      </RightContainer>
    </NoticeContainer>
  );
}

export default Notice;
