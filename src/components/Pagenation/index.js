import { Button } from "@mui/material";
import Notice from "../Notice";

function Pagenation({ page, setPage, totalPages }) {
  return (
    <>
      <>
        {Array(totalPages).map((_, i) => {
          return (
            <Button key={i + 1} onClick={() => setPage(i + 1)}>
              {i + 1}
            </Button>
          );
        })}
      </>
    </>
  );
}

export default Pagenation;
