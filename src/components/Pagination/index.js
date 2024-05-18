import { PaginationContainer, Nav, PageButton } from "./styles";

function Pagination({ limit, page, setPage, totalPages }) {
  const numPages = Math.ceil(totalPages / limit);
  return (
    <PaginationContainer>
      <PageButton onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </PageButton>
      {Array(numPages)
        .fill()
        .map((_, i) => {
          return (
            <PageButton key={i + 1} onClick={() => setPage(i + 1)}>
              {i + 1}
              {console.log(i + 1)}
            </PageButton>
          );
        })}
      <PageButton
        onClick={() => setPage(page + 1)}
        disabled={page === numPages}
      >
        &gt;
      </PageButton>
    </PaginationContainer>
  );
}

export default Pagination;
