import { Card } from './ProjectsCard.styled';

export default function ProjectsCard({ project }) {
  console.log(project);
  return <Card>{project.id}</Card>;
}
