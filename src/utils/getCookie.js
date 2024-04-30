export const getCookie = (cookieName) => {
  const cookies = document.cookie.split(";");
  console.log(cookies);
  const cookie = cookies.find((cookie) =>
    cookie.trim().startsWith(`${cookieName}=`)
  );
  console.log(cookie);

  return cookie ? cookie.split("=")[1] : null;
};
