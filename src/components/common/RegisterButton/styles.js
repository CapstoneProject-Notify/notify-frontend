import styled from "@emotion/styled";

export const GreenBackground = styled.button`
  border-radius: 5px;
  border: none;
  background-color: ${({ theme }) => theme.color.btnGreen};
  color: #ffffff;
  height: 50px;
  width: fit-content;
  font-family: Inter, sans-serif;
  font-style: italic;
  font-size: 17px;
  margin-bottom: 10px;
  padding: 0 20px;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.deepBlue};
  }
`;
