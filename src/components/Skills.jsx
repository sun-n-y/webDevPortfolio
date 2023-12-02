import { skills } from '../data';
import SectionTitle from './SectionTitle';
import SkillsCard from './SkillsCard';

const Skills = () => {
  return (
    <section
      className="py-12 md:py-14 lg:py-16 dark:bg-dark-grey duration-200"
      id="skills"
    >
      <div className="align-elements">
        <SectionTitle text="tech stack" />
        <div className="py-12 grid gap-8 md:py-14 md:grid-cols-2 lg:py-16 lg:grid-cols-3">
          {skills.map((skill) => {
            return <SkillsCard key={skill.id} {...skill} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Skills;
