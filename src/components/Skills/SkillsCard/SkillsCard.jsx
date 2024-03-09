import { SkillCard } from './SkillsCard.styled';

export default function SkillsCard({ skills }) {
  return (
    <SkillCard>
      <img src={skills.icon} alt={skills.name} width={70} />
      <h2>{skills.name}</h2>
    </SkillCard>
  );
}
