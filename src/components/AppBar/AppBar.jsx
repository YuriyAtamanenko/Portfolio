import { Header, StyledLink } from './AppBar.styled';

export default function AppBar() {
  return (
    <Header>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/projects">Projects</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/certificate">Certificate</StyledLink>
    </Header>
  );
}
