import styled from "@emotion/styled";

export const StyledTitle = styled.div`
  min-width: max-content;
  display: flex;
  font-size: 30px;
`;

export const OrangeText = styled.p`
  color: ${({ theme }) => theme.color.orange};
`;

export const GreenText = styled.p`
  color: ${({ theme }) => theme.color.green};
`;
