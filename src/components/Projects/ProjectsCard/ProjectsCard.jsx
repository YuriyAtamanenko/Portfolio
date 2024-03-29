import {
  ProjectCard,
  InfoBlock,
  ProjectTitle,
  LengText,
  LibText,
  SubTitle,
  ProjectLink,
  LinksBlock,
  TextBlock,
  Poster,
} from './ProjectsCard.styled';
import Icons from 'images/symbol-defs.svg';

export default function ProjectsCard({ project }) {
  const maping = list => {
    return list.map(item => item).join(', ');
  };

  return (
    <ProjectCard>
      <InfoBlock>
        <Poster
          src={project.poster}
          alt={project.title}
          width={350}
          height={200}
        />
        <TextBlock>
          <ProjectTitle>{project.title}</ProjectTitle>
          <LengText>
            <SubTitle>Languages:</SubTitle> {maping(project.languages)}
          </LengText>
          <LibText>
            <SubTitle>Libraries:</SubTitle> {maping(project.libraries)}
          </LibText>
          <LibText>
            <SubTitle>Responsive & Adaptive Design:</SubTitle>{' '}
            {project.responsive}
          </LibText>
        </TextBlock>
      </InfoBlock>
      <LinksBlock>
        <ProjectLink href={project.link} rel="noreferrer" target="_blank">
          <svg width={20} height={20}>
            <use href={Icons + '#icon-eye'} />
          </svg>
          View
        </ProjectLink>
        <ProjectLink href={project.git} rel="noreferrer" target="_blank">
          Code
          <svg width={20} height={20}>
            <use href={Icons + '#icon-embed'} />
          </svg>
        </ProjectLink>
      </LinksBlock>
    </ProjectCard>
  );
}
