import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  gap: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #212529;

  @media screen and (min-width: 768px) {
    position: relative;
    gap: 50px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 20px 0px;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  color: white;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }

  &.active {
    color: gold;
  }
`;
