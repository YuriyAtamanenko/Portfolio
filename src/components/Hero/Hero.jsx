import { NavLink } from 'react-router-dom';
import { InfoBox, PhotoBox, Title, SubTitle, BoxWrapper } from './Hero.styled';

export default function Hero() {
  return (
    <BoxWrapper>
      <InfoBox>
        <Title>Hi, I'm Yurii</Title>
        <SubTitle>Fullstack Developer</SubTitle>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nihil
          sequi mollitia corporis accusantium eos reiciendis, eum, dignissimos
          debitis ipsam a.
        </p>
        <NavLink to="/projects">View projects</NavLink>
      </InfoBox>
      <PhotoBox></PhotoBox>
    </BoxWrapper>
  );
}
