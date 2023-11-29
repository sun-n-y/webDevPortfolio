import { skills } from '../data';
import SectionTitle from './SectionTitle';
import SkillsCard from './SkillsCard';

const Skills = () => {
  return (
    <section className="align-elements py-12 md:py-14 lg:py-16 " id="skills">
      <SectionTitle text="tech stack" />
      <div className="py-12 grid gap-8 md:py-14 md:grid-cols-2 lg:py-16 lg:grid-cols-3">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills;
