import Notice from "../Notice";

function NoticeList({ info, type, scrap, setScrap }) {
  return (
    <>
      {info !== undefined
        ? info.map((data, idx) => {
            return (
              <Notice
                data={data}
                key={idx}
                type={type}
                scrap={scrap}
                setScrap={setScrap}
              />
            );
          })
        : "loading"}
    </>
  );
}

export default NoticeList;
