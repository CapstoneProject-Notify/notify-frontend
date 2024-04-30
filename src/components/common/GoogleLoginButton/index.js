/*import { GoogleLogin } from "@react-oauth/google";
import { googleLogout } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode as jwt_decode } from "jwt-decode";

const GoogleLoginButton = () => {

    const onLogoutSuccess = () => {
        console.log('로그아웃하였습니다.')
    }

    const clientId = '274293442288-o0a6h7fujbrdcsfob1993uje484mpim5.apps.googleusercontent.com'
    return (
        <>
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={(res) => {
                        console.log(jwt_decode(res.credential));
                        
                        
                    }}
                    onFailure={(err) => {
                        console.log(err);
                    }}
                />
                
                
            </GoogleOAuthProvider>
        </>
    );
};
export default GoogleLoginButton;*/

import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { jwtDecode as jwt_decode } from "jwt-decode";

const CustomButton = () => {

}

const GoogleLoginButton = () => {
    const clientId = '274293442288-o0a6h7fujbrdcsfob1993uje484mpim5.apps.googleusercontent.com'

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 로그인 정보를 로컬 스토리지에서 확인
    useEffect(() => {
        const authToken = localStorage.getItem('authToken');
        if (authToken) {
            setIsLoggedIn(true);
        }
    }, []);

    // 로그인 함수
    const login = () => {
        setIsLoggedIn(true);
        localStorage.setItem('authToken', true); // 로그인 정보를 로컬 스토리지에 저장
    };

    // 로그아웃 함수
    const logout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('authToken'); // 로그아웃 시 로컬 스토리지에서 로그인 정보 삭제
    };
    

    return (
        <>
            {isLoggedIn ? (
                <button onClick={logout}>로그아웃</button>
            ) : (
                <GoogleOAuthProvider clientId={clientId}>
                    <GoogleLogin
                        onSuccess={(res) => {
                            console.log(jwt_decode(res.credential));
                            login(); // 로그인 성공 시 로그인 상태를 변경
                            
                        }}
                        onFailure={(err) => {
                            console.log(err);
                        }}
                    />
                </GoogleOAuthProvider>
            )}
        </>
    );
};

export default GoogleLoginButton;

