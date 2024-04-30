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
import { getCookie } from "../../../utils/getCookie";
import { useNavigate } from "react-router-dom";
import { deleteCookie } from "../../../utils/deleteCookie";
import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";

function NavBar() {
  const { location } = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    googleLogout();

    navigate("/");
  };

  const isLoggedIn = getCookie("g_state") !== null;
  console.log(isLoggedIn);

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
                <Link to="/notice?type=aai">
                  <NoticeMenu>학과</NoticeMenu>
                </Link>
              </NoticeMenuContainer>
            </NoticeMenuText>
          </Link>
          <Link to="/strap">
            <NavBarMenuText>스크랩</NavBarMenuText>
          </Link>
          <Link to="/phone">
            <NavBarMenuText>전화번호</NavBarMenuText>
          </Link>
          <Link to="/mem/profile">
            <NavBarMenuText>프로필</NavBarMenuText>
          </Link>
          {/* <Link to="/mem/login">
            <NavBarMenuText>로그인</NavBarMenuText>
          </Link> */}
          {false ? (
            <NavBarMenuText onClick={handleLogout}>로그아웃</NavBarMenuText>
          ) : (
            <Link to="/mem/login">
              <NavBarMenuText>로그인</NavBarMenuText>
            </Link>
          )}
        </NavBarMenuContainer>
      </NavBarContainer>
    </StyledNavBar>
  );
}

export default NavBar;
