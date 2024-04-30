import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode as jwt_decode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { commonAxios } from "../../../utils/commonAxios";

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const postLogin = (memId) => {
    commonAxios
      .post(`/mem/login`, { googleId: memId })
      .then((res) => {
        console.log(res);
        if (res.data.code == 404) {
          navigate("/mem/register");
        } else if (res.data.code == 200) {
          localStorage.setItem("authToken", true);
          navigate("/");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
