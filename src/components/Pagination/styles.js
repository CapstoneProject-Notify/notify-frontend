import styled from "@emotion/styled";

export const PaginationContainer = styled.div`
  width: 100%;
  margin: 50px 0;
  height: 100px;
  justify-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

export const PageButton = styled.button`
  border: none;
  border-radius: 50%;
  padding: 8px;
  margin: 0;
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.color.black};
  background-color: transparent;
  font-size: 1rem;

  &:hover {
    background: ${({ theme }) => theme.color.lightOrange};
    cursor: pointer;
    color: ${({ theme }) => theme.color.orange};
    transform: translateY(-2px);
  }

  &[disabled] {
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    color: ${({ theme }) => theme.color.orange};
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;
