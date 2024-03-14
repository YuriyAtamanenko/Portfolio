import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  background-color: #212529;
  font-size: 20px;

  @media screen and (min-width: 1440px) {
    gap: 50px;
    flex-direction: row;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 20px 0px;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  color: white;
  text-decoration: none;

  &.active {
    color: gold;
  }
`;
