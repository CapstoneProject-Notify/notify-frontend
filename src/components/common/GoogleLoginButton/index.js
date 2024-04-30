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
          localStorage.setItem("authToken", false);
        } else if (res.data.code == 200) {
          localStorage.setItem("authToken", true);
          navigate("/");
        }
        localStorage.setItem("googleId", memId);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <GoogleLogin
      onSuccess={(res) => {
        let info = jwt_decode(res.credential);
        console.log(info);
        postLogin(info.email.split("@")[0]);
      }}
      onFailure={(err) => {
        console.log(err);
      }}
      isSignedIn={true}
    />
  );
};

export default GoogleLoginButton;