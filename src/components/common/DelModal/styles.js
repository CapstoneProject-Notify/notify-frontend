export const customModalStyles = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
  },
  content: {
    width: "360px",
    height: "180px",
    zIndex: "150",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "30px",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    overflow: "auto",
    fontSize: "20px",
    fontFamily: "Inter, sans-serif",
    flexDirection: "column",
  },
};

export const customBtnStyles = {
  marginTop: "15px",
  borderRadius: "10px",
  border: "none",
  backgroundColor: "#FF6C0F",
  color: "#ffffff",
  height: "30px",
  fontSize: "20px",
  width: "70px",
};

export const customImgStyles = {
  height: "30px",
  marginBottom: "10px",
};
