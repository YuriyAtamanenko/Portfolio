import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const BoxWrapper = styled.div`
  display: flex;
  gap: 120px;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 375px;
`;

export const PhotoBox = styled.div`
  width: 375px;
  height: 450px;
  border: solid 2px black;
  background-color: #cecece;
`;

export const Title = styled.h1`
  font-size: 32px;
`;

export const SubTitle = styled.h2`
  font-size: 32px;
`;

export const NavBtn = styled(NavLink)`
  display: flex;
  border: 0.5px solid grey;
  width: 150px;
  height: 35px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: inherit;

  &:hover,
  &:focus {
    color: gold;
    border: 1px solid gold;
  }
`;

export const Gold = styled.span`
  color: gold;
`;
