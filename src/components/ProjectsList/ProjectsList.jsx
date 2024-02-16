import ProjectsCard from 'components/ProjectsCard/ProjectsCard';
import { List } from './ProjectsList.styled';
import { projects } from 'myProjects';

export default function ProjectsList() {
  console.log(projects);
  return (
    <List>
      {projects.map(project => (
        <ProjectsCard key={project.id} project={project} />
      ))}
    </List>
  );
}
