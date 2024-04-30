import Notice from "../../components/Notice";
import AppLayout from "../../components/common/AppLayout";
import SearchBox from "../../components/common/SearchBox";
import SearchButton from "../../components/common/SearchButton";

import styled from "@emotion/styled/macro";
import { commonAxios } from "../../utils/commonAxios";
import { useState } from "react";
import NoticeList from "../../components/NoticeList";
import Pagenation from "../../components/Pagenation";
import { useLocation } from "react-router-dom";

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

function PostPage() {
  const [postInfo, setPostInfo] = useState([]);
  const [page, setPage] = useState(1);
  const location = useLocation();
  const type = location.search;

  const getPost = () => {
    commonAxios
      .get(`/notice${type}&page=${page}`, {
        // headers: {
        //     Authorization: `Bearer ${JWT token}`
        // }
      })
      .then((res) => {
        setPostInfo(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <AppLayout>
        <SearchContainer>
          <TitleText>
            {type == "?type=com" ? "School Post" : "Department Post"}
          </TitleText>
          <SearchInput>
            <SearchBox></SearchBox>
            <SearchButton></SearchButton>
          </SearchInput>
        </SearchContainer>
        {/* <NoticeList info={postInfo.notices} />
        <Pagenation
          limit={postInfo.notices.length}
          page={page}
          setPage={setPage}
          totalPages={data.totalPages}
        /> */}
        <Notice data={data.data.notices[0]} />
        <Notice data={data.data.notices[1]} />
        <Notice data={data.data.notices[2]} />
      </AppLayout>
    </>
  );
}

export default PostPage;

export const SearchContainer = styled.div`
  width: 100%;
  margin: 50px 0;
  border-bottom: 1px solid;
  
`;

export const TitleText = styled.div`
  width: 100%;
  text-align: left;
  font-size: 30px;
  margin-bottom: 20px;
  font-family: "GmarketSansMedium";
`;

export const SearchInput = styled.div`
  display: flex;
  width: 100%;
  text-align: right;
  justify-content: flex-end;
  margin-bottom: 50px;
  
`;
