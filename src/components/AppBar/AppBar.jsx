import { NavLink } from 'react-router-dom';
import { Container } from 'components/App/App.styled';

export default function AppBar() {
  return (
    <header>
      <Container>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
      </Container>
      ;
    </header>
  );
}
