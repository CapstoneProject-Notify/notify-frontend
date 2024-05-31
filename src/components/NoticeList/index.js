import Notice from "../Notice";

function NoticeList({ info, scrap }) {
  return (
    <>
      {info !== undefined
        ? info.map((data, idx) => {
            return <Notice data={data} key={idx} scrap={scrap} />;
          })
        : "loading"}
    </>
  );
}

export default NoticeList;
