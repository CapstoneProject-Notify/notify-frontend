import {
  NavBarContainer,
  NavBarLogoContainer,
  NavBarMenuContainer,
  NavBarMenuText,
  StyledNavBar,
  NoticeMenuText,
  NoticeMenuContainer,
  NoticeMenu,
} from "./styles";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import { useState, useEffect } from "react";
import PopModal from "../PopModal";
import { commonAxios } from "../../../utils/commonAxios";

function NavBar() {
  const { location } = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [major, setMajor] = useState("");
  const [user, setUser] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("googleId");
    localStorage.removeItem("major");
    setIsLoggedIn(false);
    googleLogout();
    navigate("/");
    window.location.replace("/");
  };

  const handlePopModal = (e) => {
    if (!isLoggedIn) {
      e.stopPropagation();
      e.preventDefault();
      setIsOpen(true);
      setMessage("로그인이 필요한 기능입니다.");
    }
  };

  const getMajorInfo = () => {
    commonAxios
      .get(`/mem/profile`, {
        headers: { googleId: user },
      })
      .then((res) => {
        setMajor(res.data.data.major);
        console.log(res);
        console.log(major);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    const token = /true/i.test(localStorage.getItem("authToken"));
    setIsLoggedIn(token);
    if (token === false) {
      googleLogout();
      setIsLoggedIn(false);
    } else {
      setUser(localStorage.getItem("googleId"));
      getMajorInfo();
      console.log(user, major);
    }
    console.log("authToken", token);
  }, [isLoggedIn]);

  console.log("isLoggedIn", isLoggedIn);

  return (
    <StyledNavBar>
      <NavBarContainer>
        <Link to="/">
          <NavBarLogoContainer>
            <Logo variant="40" />
          </NavBarLogoContainer>
        </Link>
        <NavBarMenuContainer>
          <NoticeMenuText>
            <Link to={location}>
              <NavBarMenuText>공지사항</NavBarMenuText>
            </Link>
            <NoticeMenuContainer>
              <Link to="/notice?type=com">
                <NoticeMenu>학교</NoticeMenu>
              </Link>
              <Link to={`/notice?type=${major}`} onClick={handlePopModal}>
                <NoticeMenu>학과</NoticeMenu>
              </Link>
            </NoticeMenuContainer>
          </NoticeMenuText>
          <Link to="/scrap" onClick={handlePopModal}>
            <NavBarMenuText>스크랩</NavBarMenuText>
          </Link>
          <Link to="/phone">
            <NavBarMenuText>전화번호</NavBarMenuText>
          </Link>
          <Link to="/mem/profile" onClick={handlePopModal}>
            <NavBarMenuText>프로필</NavBarMenuText>
          </Link>
          {isLoggedIn ? (
            <NavBarMenuText onClick={handleLogout}>로그아웃</NavBarMenuText>
          ) : (
            <Link to="/mem/login">
              <NavBarMenuText>로그인</NavBarMenuText>
            </Link>
          )}
        </NavBarMenuContainer>
      </NavBarContainer>
      <PopModal isOpen={isOpen} setIsOpen={setIsOpen} message={message} />
    </StyledNavBar>
  );
}

export default NavBar;
