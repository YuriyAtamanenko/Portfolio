import { SkillCard, IMGBox, SkillName } from './SkillsCard.styled';

export default function SkillsCard({ skills }) {
  return (
    <SkillCard>
      <IMGBox>
        <img src={skills.icon} alt={skills.name} width={70} />
      </IMGBox>

      <SkillName>{skills.name}</SkillName>
    </SkillCard>
  );
}
