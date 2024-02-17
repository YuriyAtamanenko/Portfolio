import {
  Card,
  InfoBlock,
  ProjectTitle,
  Text,
  SubTitle,
  ProjectLink,
} from './ProjectsCard.styled';

export default function ProjectsCard({ project }) {
  const maping = list => {
    return list.map(item => item).join(', ');
  };

  return (
    <Card>
      <img src={project.poster} alt={project.title} height={300} width={350} />
      <InfoBlock>
        <ProjectTitle>{project.title}</ProjectTitle>
        <Text>
          <SubTitle>Languages:</SubTitle> {maping(project.languages)}
        </Text>
        <Text>
          <SubTitle>Libraries:</SubTitle> {maping(project.libraries)}
        </Text>
        <ProjectLink href={project.link}>View</ProjectLink>
        <ProjectLink href={project.git}>Code</ProjectLink>
      </InfoBlock>
    </Card>
  );
}
