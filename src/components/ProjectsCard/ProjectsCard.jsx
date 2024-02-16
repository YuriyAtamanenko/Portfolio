import { Card } from './ProjectsCard.styled';

export default function ProjectsCard({ project }) {
  return (
    <Card>
      <img src={project.poster} alt={project.title} height={300} width={350} />
      <h2>{project.title}</h2>
      <p>{project.languages.map(language => language).join(', ')}</p>
      <p>{project.libraries.map(librarie => librarie).join(', ')}</p>
      <p>{project.description}</p>
      <a href={project.link}>View</a>
      <a href={project.git}>Code</a>
    </Card>
  );
}
