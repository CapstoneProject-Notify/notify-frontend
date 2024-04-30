import axios from "axios";
import { deleteCookie } from "./deleteCookie";

const commonAxios = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  withCredentials: true,
});

// 401 에러 처리(로그인이 필요한 API인 경우 메인 페이지로 리다이렉트)
commonAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error);
    if (error.response.status === 401) {
      deleteCookie("access_token");
      window.location.href = "/";

      return;
    }

    return Promise.reject(error);
  }
);

export { commonAxios };
