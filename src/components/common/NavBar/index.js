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

function NavBar() {
  const { location } = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("autoToken");
    localStorage.removeItem("googleId");
    setIsLoggedIn(false);
    googleLogout();
    navigate("/");
  };

  const handlePopModal = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      console.log("asfljdl");
      setIsOpen(true);
      setMessage("로그인을 해주세요!");
    }
  };

  useEffect(() => {
    const authToken = /true/i.test(localStorage.getItem("authToken"));
    setIsLoggedIn(authToken);
    if (authToken === false) {
      googleLogout();
      setIsLoggedIn(false);
    }
    console.log("authToken", authToken);
  }, []);

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
          <Link to={location}>
            <NoticeMenuText>
              <NavBarMenuText>공지사항</NavBarMenuText>
              <NoticeMenuContainer>
                <Link to="/notice?type=com">
                  <NoticeMenu>학교</NoticeMenu>
                </Link>
                <Link to="/notice?type=aai" onClick={handlePopModal}>
                  <NoticeMenu>학과</NoticeMenu>
                </Link>
              </NoticeMenuContainer>
            </NoticeMenuText>
          </Link>
          <Link to="/strap" onClick={handlePopModal}>
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
