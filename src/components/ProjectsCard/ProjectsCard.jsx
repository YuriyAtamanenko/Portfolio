import { Card } from './ProjectsCard.styled';

export default function ProjectsCard({ project }) {
  return (
    <Card>
      <img src={project.poster} alt={project.title} height={300} width={350} />
      <h2>{project.title}</h2>
      <p>{project.languages.map(gener => gener).join(', ')}</p>
    </Card>
  );
}
