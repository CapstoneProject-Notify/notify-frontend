import ImageSlider from "../../components/ImageSlider";
import Notice from "../../components/Notice";
import AppLayout from "../../components/common/AppLayout";
import Title from "../../components/common/Title";
import styled from "@emotion/styled/macro";
import { commonAxios } from "../../utils/commonAxios";
import { useEffect, useState } from "react";

const data = {
  code: 200,
  message: "공지사항 조회 성공",
  data: {
    page: 1,
    totalPages: 41,
    notices: [
      {
        noticeId: 1,
        title: "장학금안내",
        noticeDate: "2024-02-02",
        isScrapped: false,
        url: "www.aaa.com",
      },
      {
        noticeId: 1,
        title: "장학금",
        noticeDate: "2024-02-02",
        isScrapped: false,
        url: "www.aaa.com",
      },
      {
        noticeId: 1,
        title: "장학",
        noticeDate: "2024-02-02",
        isScrapped: false,
        url: "www.aaa.com",
      },
    ],
  },
};

function MainPage() {
  const [newPost, setNewPost] = useState([]);

  const getPost = () => {
    commonAxios
      .get(`/notice?type=com&page=1`, {
        // headers: {
        //     Authorization: `Bearer ${JWT token}`
        // }
      })
      .then((res) => {
        setNewPost(res.data.notices);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <ImageSlider />
      <AppLayout>
        <TitleContainer>
          <Title text1="NEW" text2=" POST!" />
        </TitleContainer>
        {newPost.length > 0 ? (
          <>
            <Notice data={newPost[0]} type={true} />
            <Notice data={newPost[1]} type={true} />
            <Notice data={newPost[2]} type={true} />
          </>
        ) : (
          ""
        )}
        <Notice data={data.data.notices[0]} type={true} />
        <Notice data={data.data.notices[1]} type={true} />
        <Notice data={data.data.notices[2]} type={true} />
      </AppLayout>
    </>
  );
}

export default MainPage;

export const TitleContainer = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  margin: 30px;
  font-weight: 800;
`;
