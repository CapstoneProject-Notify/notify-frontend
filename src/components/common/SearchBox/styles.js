import styled from "@emotion/styled";

export const BoxBackground = styled.input`
  background-color: ${({ theme }) => theme.color.gray};
  height: 50px;
  width: 760px;
  border-radius: 10px;
  font-size: 20px;
  padding: 0 15px;
  border: none;
  :focus {
    outline: none;
  }
`;
