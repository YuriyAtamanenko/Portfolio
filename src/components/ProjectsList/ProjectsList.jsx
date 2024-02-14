import ProjectsCard from 'components/ProjectsCard/ProjectsCard';
import { List } from './ProjectsList.styled';

export default function ProjectsList({ projects }) {
  return (
    <List>
      {projects.map(project => (
        <ProjectsCard key={project.id} project={project} />
      ))}
    </List>
  );
}
