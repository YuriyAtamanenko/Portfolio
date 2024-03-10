import styled from '@emotion/styled';

export const SkillCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 16px;

  padding: 20px;
  width: 200px;
  height: 150px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  &:hover,
  &:focus {
    box-shadow: rgba(99, 99, 99, 0.8) 2px 8px 32px 2px;
    scale: 1.1;
  }
`;

export const IMGBox = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
`;
