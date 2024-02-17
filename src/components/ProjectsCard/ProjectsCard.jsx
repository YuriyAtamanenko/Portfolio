import { Card } from './ProjectsCard.styled';

export default function ProjectsCard({ project }) {
  const maping = list => {
    return list.map(item => item).join(', ');
  };

  return (
    <Card>
      <img src={project.poster} alt={project.title} height={300} width={350} />
      <h2>{project.title}</h2>
      <p>{maping(project.languages)}</p>
      <p>{maping(project.libraries)}</p>
      <a href={project.link}>View</a>
      <a href={project.git}>Code</a>
    </Card>
  );
}
