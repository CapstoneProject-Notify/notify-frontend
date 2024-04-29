import styled from "@emotion/styled/macro";
import { NAVBAR_HEIGHT } from "../../../constants/navbar";

export const StyledNavBar = styled.header`
  position: fixed;
  width: 100%;
  height: ${NAVBAR_HEIGHT}px;
  background-color: ${({ theme }) => theme.color.white};
  z-index: 100;
  box-shadow: 0px 0px 5px 0px gray;
  align-items: center;
`;

export const NavBarContainer = styled.nav`
  margin: auto auto;
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
`;

export const NavBarLogoContainer = styled.div`
  padding-top: 5px;
  display: flex;
  column-gap: 4px;
  align-items: center;
`;

export const NavBarMenuContainer = styled.ul`
  display: flex;
  column-gap: 20px;
  align-items: center;
  padding-right: 30px;
`;

export const NavBarMenuText = styled.li`
  padding-top: 5px;
  font-weight: 400;
  font-size: 12px;
  min-width: 80px;
  line-height: 50px;
  text-align: center;
  padding: 0px 20px;
  cursor: