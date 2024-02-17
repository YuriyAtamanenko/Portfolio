import styled from '@emotion/styled';

export const Card = styled.li`
  width: 350px;
  height: 350px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  &:hover,
  &:focus {
    box-shadow: rgba(99, 99, 99, 0.8) 2px 8px 32px 2px;
    scale: 1.1;
  }
`;

export const InfoBlock = styled.div`
  padding: 8px;
`;

export const ProjectTitle = styled.h2`
  margin-bottom: 8px;
`;
export const Text = styled.p`
  margin-bottom: 6px;

  font-size: 14px;
  font-weigth: 200;
`;

export const SubTitle = styled.span`
  opacity: 0.3;
`;

export const ProjectLink = styled.a`
  display: flex;
  margin-top: auto;
  border: 1px solid gold;
  width: 100px;
  height: 25px;
`;
