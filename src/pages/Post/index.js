import styled from "@emotion/styled/macro";

import AppLayout from "../../components/common/AppLayout";
import SearchBox from "../../components/common/SearchBox";
import SearchButton from "../../components/common/SearchButton";

import { commonAxios } from "../../utils/commonAxios";
import { useEffect, useState, useRef } from "react";
import NoticeList from "../../components/NoticeList";
import { useLocation } from "react-router-dom";
import data from "../../constants/test.json";
import categoryData from "../../constants/category.json";
import Pagination from "../../components/Pagination";


const categories = {
  com: [
    "all", "adm", "emp", "rec", "sch", "evt_sem", "gen", "etc"
  ],
  bus: [
    "all", "acad", "adm", "emp", "rec", "sch", "evt_sem", "gen", "sc", "etc"
  ],
  cos: [
    "all", "acad", "sug", "adm", "emp", "rec", "sch", "evt_sem", "gen", "etc"
  ],
  aai: [
    "all", "acad", "sug", "adm", "emp", "rec", "sch", "evt_sem", "gen", "etc"
  ],
  esm: [
    "all", "acad", "grad", "abeek", "int", "sch", "rec", "con_sem", "etc"
  ]
};



function PostPage() {
  const [postInfo, setPostInfo] = useState(data.data);
  const [page, setPage] = useState(1);
  //const totalPages = postInfo.totalPages;
  const totalPages = postInfo?.totalPages || 0;
  const location = useLocation();
  const typeUrl = location.search;
  const user = localStorage.getItem("googleId");
  const memId = user ? user : "";
  const major = localStorage.getItem("major");
  const type = typeUrl == "?type=com" ? "COM" : major;
  const [scrap, setScrap] = useState(false);
  const dropdownRef = useRef(null);

  // 이번에 추가한 부분
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  // get 부분의 url과 useEffect 부분에 두 변수 넣어서 바뀌면 재렌더되도록 수정했습니다!!

  const getNotice = () => {
    commonAxios
      .get(
        `/notice${typeUrl}&page=${page}&category=${category}&search=${search}`,
        {
          headers: { googleId: memId },
        }
      )
      .then((res) => {
        setPostInfo(res.data.data);
        console.log(res);
        console.log(category);
      })
      .catch((err) => {
        console.error(err);
        setPostInfo(null);
      });
  };

  // 키워드 추가하기
  const addSearch = () => {
    // 키워드가 빈 문자열인 경우 추가하지 않음
    if (search.trim() === "") {
      return;
    }

    getNotice();
  };

  

  useEffect(() => {
    getNotice();
  }, [page, scrap, typeUrl, category]);


  

  return (
    <>
      <AppLayout>
        <SearchContainer>
          <TitleText>
            {typeUrl == "?type=com" ? "School Post" : "Department Post"}
          </TitleText>
          
          
          <SearchInput>
          <Dropdown
            ref={dropdownRef}
            value={category}
            onChange ={(e) => {
                setCategory(e.target.value);
            }}
          >
            {categories[typeUrl.slice(6,)].map((cat) => {
              const categoryOption = categoryData.category.find(option => option.value === cat);
              const displayName = categoryOption ? categoryOption.name : cat;
              return (
                <option key={cat} value={cat}>
                  {displayName}
                </option>
              );
            })}
          </Dropdown>
            <SearchBox
              value={search}
              change={(event) => setSearch(event.target.value)}
            ></SearchBox>
            <SearchButton click={addSearch}></SearchButton>
          </SearchInput>
          
        </SearchContainer>
        {console.log(postInfo, totalPages, page)}
        {postInfo && postInfo.notices.length > 0 ? (
          <>
            <NoticeList
              info={postInfo.notices}
              type={type}
              scrap={scrap}
              setScrap={setScrap}
            />
            <Pagination
              page={page}
              scrap={scrap}
              setPage={setPage}
              totalPages={totalPages}
            />
          </>
        ) : (
          <><div>게시글이 존재하지 않습니다.</div></>
          
        )}
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
const Dropdown = styled.select`
  margin-right: 20px;
  font-size: 18px;
  border-radius: 5%;
  padding: 5px;
`;