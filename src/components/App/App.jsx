import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from 'components/Layout/Layout';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ProjectsPage = lazy(() => import('pages/ProjectsPage/ProjectsPage'));
const AboutPage = lazy(() => import('pages/AboutPage/AboutPage'));
const CertificatePage = lazy(() =>
  import('pages/CerteficatsPage/CerteficatsPage')
);
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="certificate" element={<CertificatePage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
