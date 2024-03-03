import { TypeAnimation } from 'react-type-animation';
import {
  InfoBox,
  PhotoBox,
  Title,
  SubTitle,
  BoxWrapper,
  NavBtn,
  Gold,
  BtnBox,
} from './Hero.styled';

export default function Hero() {
  return (
    <BoxWrapper>
      <InfoBox>
        <Title>
          Hi, <Gold>I'm Yurii</Gold>
        </Title>
        <SubTitle>
          <TypeAnimation
            sequence={['Frontend', 3000, 'Backend', 3000, 'Fullstack', 5000]}
            wrapper="span"
            speed={1}
            style={{ fontSize: '32px' }}
            repeat={Infinity}
          />
          <Gold>Developer</Gold>
        </SubTitle>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nihil
          sequi mollitia corporis accusantium eos reiciendis, eum, dignissimos
          debitis ipsam a.
        </p>
        <BtnBox>
          <NavBtn to="/projects">View Projects</NavBtn>
          <NavBtn to="/about">About Me</NavBtn>
        </BtnBox>
      </InfoBox>
      <PhotoBox></PhotoBox>
    </BoxWrapper>
  );
}
