import ProjectsCard from 'components/Projects/ProjectsCard/ProjectsCard';
import { List } from './ProjectsList.styled';
import { projects } from 'myProjects';

export default function ProjectsList() {
  return (
    <List>
      {projects.map(project => (
        <ProjectsCard key={project.id} project={project} />
      ))}
    </List>
  );
}
