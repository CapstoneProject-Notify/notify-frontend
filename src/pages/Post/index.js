import Notice from "../../components/Notice";
import AppLayout from "../../components/common/AppLayout";
import SearchBox from "../../components/common/SearchBox";
import SearchButton from "../../components/common/SearchButton";

import styled from "@emotion/styled/macro";
import { commonAxios } from "../../utils/commonAxios";
import { useEffect, useState } from "react";
import NoticeList from "../../components/NoticeList";
import { useLocation } from "react-router-dom";
import data from "../../constants/test.json";

import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";
// import PaginationItem from "@mui/material/PaginationItem";

function PostPage() {
  const [postInfo, setPostInfo] = useState(data.data);
  const [page, setPage] = useState(1);
  //   const limit = 10;
  //   const offset = (page - 1) * limit;
  const totalPages = postInfo.totalPages;
  const location = useLocation();
  const type = location.search;
  const user = localStorage.getItem("googleId");
  const memId = user ? user : "";

  const getPost = () => {
    commonAxios
      .get(`/notice${type}&page=${page}`, {
        headers: { googleId: memId },
      })
      .then((res) => {
        setPostInfo(res.data.data);
        // totalPages = res.data.data.
        console.log(res);
        console.log(res.data.data.notices);
        // console.log(res.data.notices);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  //   const postData = (post) => {
  //     if (post) {
  //       let result = post.slice(offset, offset + limit);
  //       return result;
  //     }
  //   };

  //   const handlePageChange = (event) => {
  //     const pageIndex = Number(event.target.outerText);
  //     setPage(pageIndex);
  //   };

  useEffect(() => {
    // handlePageChange();
    getPost();
    console.log("hihi");
  }, [page]);

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
        {console.log(postInfo, totalPages, page)}
        {postInfo && postInfo.notices.length > 0 ? (
          <>
            <NoticeList info={postInfo.notices} />
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
          </>
        ) : (
          console.log("by")
        )}
        {/* <PaginationLink /> */}
        {/* <PaginationContainer>
          {location && (
            <Pagination
            //   page={page}
            //   count={totalPages}
            //   defaultPage={1}
            //   onChange={handlePageChange}
            />
          )}
        </PaginationContainer> */}
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
