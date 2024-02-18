import {
  Card,
  InfoBlock,
  ProjectTitle,
  LengText,
  LibText,
  SubTitle,
  ProjectLink,
  LinksBlock,
  TextBlock,
} from './ProjectsCard.styled';

export default function ProjectsCard({ project }) {
  const maping = list => {
    return list.map(item => item).join(', ');
  };

  return (
    <Card>
      <InfoBlock>
        <img src={project.poster} alt={project.title} width={350} />
        <TextBlock>
          <ProjectTitle>{project.title}</ProjectTitle>
          <LengText>
            <SubTitle>Languages:</SubTitle> {maping(project.languages)}
          </LengText>
          <LibText>
            <SubTitle>Libraries:</SubTitle> {maping(project.libraries)}
          </LibText>
        </TextBlock>
      </InfoBlock>
      <LinksBlock>
        <ProjectLink href={project.link} rel="noreferrer" target="_blank">
          View
        </ProjectLink>
        <ProjectLink href={project.git} rel="noreferrer" target="_blank">
          Code
        </ProjectLink>
      </LinksBlock>
    </Card>
  );
}
