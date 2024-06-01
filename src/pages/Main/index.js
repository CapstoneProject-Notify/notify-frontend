import styled from "@emotion/styled/macro";
import ImageSlider from "../../components/ImageSlider";
import Notice from "../../components/Notice";
import AppLayout from "../../components/common/AppLayout";
import Title from "../../components/common/Title";
import { commonAxios } from "../../utils/commonAxios";
import { useEffect, useState } from "react";

function MainPage() {
  const [newPost, setNewPost] = useState([]);
  const [scrap, setScrap] = useState(false);
  const user = localStorage.getItem("googleId");
  const memId = user ? user : "";

  const getPost = () => {
    commonAxios
      .get(`/notice?type=com&page=1`, {
        headers: { googleId: memId },
      })
      .then((res) => {
        setNewPost(res.data.data.notices);
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getPost();
  }, [scrap]);

  return (
    <>
      <ImageSlider />
      <AppLayout>
        <TitleContainer>
          <Title text1="NEW" text2=" POST!" />
        </TitleContainer>
        {newPost && newPost.length > 0 ? (
          <>
            <Notice
              data={newPost[0]}
              type="COM"
              scrap={scrap}
              setScrap={setScrap}
            />
            <Notice
              data={newPost[1]}
              type="COM"
              scrap={scrap}
              setScrap={setScrap}
            />
            <Notice
              data={newPost[2]}
              type="COM"
              scrap={scrap}
              setScrap={setScrap}
            />
          </>
        ) : (
          "공지사항 조회를 실패했습니다."
        )}
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
