import styled from '@emotion/styled';

export const ProjectCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
  display: flex;
  flex-direction: column;
`;

export const ProjectTitle = styled.h2`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const LengText = styled.p`
  margin-bottom: 6px;

  font-size: 14px;
  font-weigth: 200;
`;

export const LibText = styled.p`
  margin-bottom: 6px;

  font-size: 12px;
  font-weigth: 200;
`;

export const SubTitle = styled.span`
  opacity: 0.3;
`;

export const ProjectLink = styled.a`
  display: flex;
  width: 100px;
  height: 25px;
  gap: 6px;

  justify-content: center;
  align-items: center;

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: inherit;
  fill: white;

  border: 0 solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: gray;
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);

  &:hover,
  &:focus {
    border: 1px solid gold;
    color: gold;
    fill: gold;
    box-shadow: inset 0 0 20px rgba(255, 215, 0, 0.5),
      0 0 20px rgba(255, 215, 0, 0.2);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    text-shadow: 1px 1px 2px #427388;
  }
`;

export const LinksBlock = styled.div`
  padding: 8px;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;
export const TextBlock = styled.div`
  padding: 8px;
`;

export const Poster = styled.img`
  height: 190px;
  object-fit: cover;
`;
