import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { jwtDecode as jwt_decode } from "jwt-decode";
import { deleteCookie } from "../../../utils/deleteCookie";
import { useNavigate } from "react-router-dom";
import { commonAxios } from "../../../utils/commonAxios";

const CustomButton = () => {};

const GoogleLoginButton = () => {
  const clientId =
    "274293442288-o0a6h7fujbrdcsfob1993uje484mpim5.apps.googleusercontent.com";

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginInfo, setLoginInfo] = useState([]);
  const navigate = useNavigate();

  // 로그인 정보를 로컬 스토리지에서 확인
  //   useEffect(() => {
  //     const authToken = localStorage.getItem("authToken");
  //     if (authToken) {
  //       setIsLoggedIn(true);
  //     }
  //   }, []);

  //   useEffect(() => {
  //     const authToken = localStorage.getItem("authToken");
  //     if (!authToken) return;
  //     navigate('/');
  //   }, [isLoggedIn]);

  // 로그인 함수
  //   const login = () => {
  //     setIsLoggedIn(true);
  //     localStorage.setItem("authToken", true); // 로그인 정보를 로컬 스토리지에 저장
  //     navigate("/");
  //   };

  const postLogin = (email) => {
    setIsLoggedIn(true);
    commonAxios
      .post(`/mem/login`, { googleId: email })
      .then((res) => {
        setIsLoggedIn(true);
        console.log(res);
        if (res.data.code == 404) {
          navigate("/mem/register");
        } else if (res.data.code == 200) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  //   // 로그아웃 함수
  //   const logout = () => {
  //     setIsLoggedIn(false);
  //     localStorage.removeItem("authToken"); // 로그아웃 시 로컬 스토리지에서 로그인 정보 삭제
  //   };

  //   return (
  //     <>
  //       {isLoggedIn ? (
  //         <button onClick={logout}>로그아웃</button>
  //       ) : (
  //         <GoogleOAuthProvider clientId={clientId}>
  //           <GoogleLogin
  //             onSuccess={(res) => {
  //               setIsLoggedIn(jwt_decode(res.credential));
  //               postLogin(isLoggedIn.email.split("@")[0]);
  //               //   login(); // 로그인 성공 시 로그인 상태를 변경
  //             }}
  //             onFailure={(err) => {
  //               console.log(err);
  //             }}
  //           />
  //         </GoogleOAuthProvider>
  //       )}
  //     </>
  //   );
  // };

  // export default GoogleLoginButton;

  return (
    <GoogleLogin
      onSuccess={(res) => {
        let info = jwt_decode(res.credential);
        postLogin(info.email.split("@")[0]);

        //   login(); // 로그인 성공 시 로그인 상태를 변경
      }}
      onFailure={(err) => {
        console.log(err);
      }}
      isSignedIn={true}
    />
  );
};

export default GoogleLoginButton;
