import Notice from "../Notice";

function NoticeList({ info }) {
  return (
    <>
      {info !== undefined
        ? info.map((data, idx) => {
            return <Notice data={data} key={idx} />;
          })
        : "loading"}
    </>
  );
}

export default NoticeList;
