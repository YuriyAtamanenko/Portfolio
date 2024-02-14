import ProjectsList from 'components/ProjectsList/ProjectsList';

const projectsList = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
];

export default function Projects() {
  return <ProjectsList projects={projectsList} />;
}
