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

function Notice({ data, type, scrap, setScrap }) {
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const user = localStorage.getItem("googleId");

  const handleScrapClick = (e) => {
    e.stopPropagation();
    if (!user) {
      setIsOpen(true);
      setMessage("로그인이 필요한 기능입니다.");
    } else {
      if (data.isScrapped) {
        commonAxios
          .delete(
            `/scrap`,
            {
              data: {
                type: type,
                googleId: user,
                noticeId: data.noticeId,
              },
            },
            {
              googleId: user,
            }
          )
          .then((res) => {
            setScrap(!scrap);
            e.stopPropagation();
            console.log(res);
          })
          .catch((err) => {
            console.error(err);
            console.log("notice", type, user, data.noticeId);
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
            setScrap(!scrap);
            e.stopPropagation();
            console.log(res);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }
  };

  return (
    <NoticeContainer
      onClick={() => window.open(data.url, "_blank", "noopener, noreferrer")}
      isScrapped={data.isScrapped}
    >
      <Title>{data.title}</Title>
      <RightContainer>
        <CreatedAt>
          {"작성일 :"} {data.noticeDate}
        </CreatedAt>
        <Like
          src={data.isScrapped ? FillLikeIcon : NotFillLikeIcon}
          onClick={handleScrapClick}
        />
        <PopModal isOpen={isOpen} setIsOpen={setIsOpen} message={message} />
      </RightContainer>
    </NoticeContainer>
  );
}

export default Notice;
