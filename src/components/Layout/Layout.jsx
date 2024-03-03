import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import { Suspense } from 'react';
import { Body, Container } from './Layout.styled';

export default function Layout() {
  return (
    <Body>
      <AppBar />
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </Body>
  );
}
