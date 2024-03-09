import SkillsCard from 'components/Skills/SkillsCard/SkillsCard';
import { List } from './SkillsList.styled';
import { skills } from 'skills';

export default function SkillsList() {
  return (
    <List>
      {skills.map(skills => (
        <SkillsCard key={skills.icon} skills={skills} />
      ))}
    </List>
  );
}
