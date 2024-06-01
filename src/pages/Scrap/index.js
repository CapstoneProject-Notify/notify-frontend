import AppLayout from "../../components/common/AppLayout";
import SearchBox from "../../components/common/SearchBox";
import SearchButton from "../../components/common/SearchButton";

import styled from "@emotion/styled/macro";
import { commonAxios } from "../../utils/commonAxios";
import { useEffect, useState } from "react";
import NoticeList from "../../components/NoticeList";
import { useLocation } from "react-router-dom";
import data from "../../constants/test.json";
import Pagination from "../../components/Pagination";

function ScrapPage() {
  const [postInfo, setPostInfo] = useState(data.data);
  const [page, setPage] = useState(1);
  const [scrap, setScrap] = useState(false);

  const totalPages = postInfo.totalPages;
  const user = localStorage.getItem("googleId");
  const memId = user ? user : "";

  const getPost = () => {
    commonAxios
      .get(`/scrap?page=${page}`, {
        headers: { googleId: memId },
      })
      .then((res) => {
        setPostInfo(res.data.data);
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getPost();
  }, [page, scrap]);

  return (
    <>
      <AppLayout>
        <SearchContainer>
          <TitleText>{"Scrap Post"}</TitleText>
          <SearchInput>
            <SearchBox></SearchBox>
            <SearchButton></SearchButton>
          </SearchInput>
        </SearchContainer>
        {console.log(postInfo, totalPages, page)}
        {postInfo && postInfo.notices.length > 0 ? (
          <>
            <NoticeList
              info={postInfo.notices}
              scrap={scrap}
              setScrap={setScrap}
            />
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
          </>
        ) : (
          console.log("bye")
        )}
      </AppLayout>
    </>
  );
}

export default ScrapPage;

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
