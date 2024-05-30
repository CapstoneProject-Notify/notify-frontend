import styled from "@emotion/styled";

export const BoxBackground = styled.input`
  background-color: ${({ theme }) => theme.color.gray};
  height: 50px;
  font-size: 20px;
  width: 65%;
  padding: 0 15px;
  border-radius: 10px;
  margin-bottom: 30px;
  border: none;
  :focus {
    outline: none;
  }
`;
