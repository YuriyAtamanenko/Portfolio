import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from 'components/Layout/Layout';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ProjectsPage = lazy(() => import('pages/ProjectsPage/ProjectsPage'));
const AboutPage = lazy(() => import('pages/AboutPage/AboutPage'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
