import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 55px;
  padding: 20px 0;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-top: 0px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 120px;
    padding: 40px 0;
    margin-top: 0px;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 325px;

  @media screen and (min-width: 1440px) {
    width: 375px;
  }
`;

export const HeroPhoto = styled.img`
  width: 325px;

  border-radius: 40px;

  @media screen and (min-width: 1440px) {
    width: 375px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
`;

export const SubTitle = styled.h2`
  font-size: 32px;
`;

export const NavBtn = styled(NavLink)`
  display: flex;
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

  border: 0 solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, 0.5);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);

  &:hover,
  &:focus {
    border: 1px solid gold;
    color: gold;
    box-shadow: inset 0 0 20px rgba(255, 215, 0, 0.5),
      0 0 20px rgba(255, 215, 0, 0.2);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    text-shadow: 1px 1px 2px #427388;
  }
`;

export const LinkBtn = styled.a`
  display: flex;
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

  border: 0 solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, 0.5);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);

  &:hover,
  &:focus {
    border: 1px solid gold;
    color: gold;
    box-shadow: inset 0 0 20px rgba(255, 215, 0, 0.5),
      0 0 20px rgba(255, 215, 0, 0.2);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    text-shadow: 1px 1px 2px #427388;
  }
`;

export const Gold = styled.span`
  color: gold;
`;

export const BtnBox = styled.div`
  display: flex;
  gap: 24px;
`;
