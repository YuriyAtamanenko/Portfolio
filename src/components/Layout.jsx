import { Outlet } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import Footer from './Footer/Footer';
import { Suspense } from 'react';

export default function Layout() {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
}
