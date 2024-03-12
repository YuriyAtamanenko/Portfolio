import { TypeAnimation } from 'react-type-animation';
import {
  InfoBox,
  Title,
  SubTitle,
  BoxWrapper,
  NavBtn,
  Gold,
  BtnBox,
  HeroPhoto,
  LinkBtn,
} from './Hero.styled';
import heroPhoto from './../../images/hero-photo.jpg';

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
          I offer full-cycle development services for websites and web
          applications. I have more than 1,5 year of practical experience with
          HTML, CSS, JavaScript, React.js, Node.js
        </p>
        <BtnBox>
          <NavBtn to="/projects">View Projects</NavBtn>
          <LinkBtn
            href="https://drive.google.com/file/d/12GWKqsraOZVWnSQyZfgJaSB5rZsvutaJ/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
          >
            Resume
          </LinkBtn>
        </BtnBox>
      </InfoBox>
      <div>
        <HeroPhoto src={heroPhoto} alt="portret photo" />
      </div>
    </BoxWrapper>
  );
}
