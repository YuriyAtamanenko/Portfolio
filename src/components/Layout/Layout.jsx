import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import { Suspense } from 'react';
import { Body, Container } from './Layout.styled';
import Footer from 'components/Footer/Footer';

export default function Layout() {
  return (
    <Body>
      <AppBar />
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
    </Body>
  );
}
