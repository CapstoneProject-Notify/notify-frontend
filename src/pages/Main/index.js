import ImageSlider from "../../components/ImageSlider";
import Notice from "../../components/Notice";
import AppLayout from "../../components/common/AppLayout";
import Title from "../../components/common/Title";
import styled from "@emotion/styled/macro";
import { commonAxios } from "../../utils/commonAxios";
import { useEffect, useState } from "react";
import TestData from "../../constants/test.json";

function MainPage() {
  const [newPost, setNewPost] = useState([]);
  const data = TestData;
  const user = localStorage.getItem("googleId");
  const memId = user ? user : "";

  const getPost = () => {
    console.log(typeof memId);
    commonAxios
      .get(`/notice?type=com&page=1`, {
        headers: { googleId: memId },
      })
      .then((res) => {
        setNewPost(res.data.data.notices);
        console.log(res);
        // console.log(res.data.data);
        // console.log(res.data.notices);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <ImageSlider />
      <AppLayout>
        <TitleContainer>
          <Title text1="NEW" text2=" POST!" />
        </TitleContainer>
        {newPost && newPost.length > 0 ? (
          <>
            <Notice data={newPost[0]} type="COM" />
            <Notice data={newPost[1]} type="COM" />
            <Notice data={newPost[2]} type="COM" />
          </>
        ) : (
          ""
        )}
        {/* {console.log(newPost)}
        <Notice data={data.data.notices[0]} type={true} />
        <Notice data={data.data.notices[1]} type={true} />
        <Notice data={data.data.notices[2]} type={true} /> */}
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
