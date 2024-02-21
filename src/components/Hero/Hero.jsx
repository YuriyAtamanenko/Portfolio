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
          Fullstack <Gold>Developer</Gold>
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
