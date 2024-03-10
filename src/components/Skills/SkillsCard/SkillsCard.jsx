import { SkillCard, IMGBox } from './SkillsCard.styled';

export default function SkillsCard({ skills }) {
  return (
    <SkillCard>
      <IMGBox>
        <img src={skills.icon} alt={skills.name} width={70} />
      </IMGBox>

      <h2>{skills.name}</h2>
    </SkillCard>
  );
}
