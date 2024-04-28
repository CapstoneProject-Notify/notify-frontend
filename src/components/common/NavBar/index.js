import {
  NavBarContainer,
  NavBarLogoContainer,
  NavBarMenuContainer,
  NavBarMenuText,
  StyledNavBar,
} from "./styles";
import Logo from "../Logo";
import { Link } from "react-router-dom";
//   import { getCookie } from '../../../utils/getCookie';
//   import { useNavigate } from 'react-router-dom';
//   import { deleteCookie } from '../../../utils/deleteCookie';

function NavBar() {
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   // access_token 쿠키 삭제
  //   deleteCookie('access_token');

  //   navigate('/');
  // };

  // const isLoggedIn = getCookie('access_token') !== null;

  return (
    <StyledNavBar>
      <NavBarContainer>
        <Link to="/">
          <NavBarLogoContainer>
            <Logo variant="40" />
          </NavBarLogoContainer>
        </Link>
        <NavBarMenuContainer>
          <Link to="/notice">
            <NavBarMenuText>공지사항</NavBarMenuText>
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
          <Link to="/mem/login">
            <NavBarMenuText>로그인</NavBarMenuText>
          </Link>
          {/* {isLoggedIn ? (
              <NavBarMenuText onClick={handleLogout}>로그아웃</NavBarMenuText>
            ) : (
              <Link to="/login">
                <NavBarMenuText>로그인</NavBarMenuText>
              </Link>
            )} */}
        </NavBarMenuContainer>
      </NavBarContainer>
    </StyledNavBar>
  );
}

export default NavBar;
