import { PaginationContainer, PageButton } from "./styles";

function Pagination({ page, setPage, totalPages }) {
  const numPages = totalPages;

  return (
    <PaginationContainer>
      <PageButton onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </PageButton>
      {Array(numPages)
        .fill()
        .map((_, i) => {
          return (
            <PageButton
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : undefined}
            >
              {i + 1}
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
