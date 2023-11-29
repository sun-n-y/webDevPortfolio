import SectionTitle from './SectionTitle';
import { FaChevronRight } from 'react-icons/fa';

const About = () => {
  return (
    <section className="bg-white py-14 md:py-16 lg:py-24" id="about">
      <div className="align-elements">
        <SectionTitle text={'about'} />
      </div>
      <div className="grid pt-12 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 align-elements">
        <div className="div flex items-center  gap-2">
          <FaChevronRight className="text-emerald-500" />
          <h4 className="font-bold">Phone:</h4>
          <h4 className="">(808) 649 8220</h4>
        </div>
        <div className="div flex items-center  gap-2">
          <FaChevronRight className="text-emerald-500" />
          <h4 className="font-bold">City:</h4>
          <h4 className="">Dalton, Georgia</h4>
        </div>
        <div className="div flex items-center  gap-2">
          <FaChevronRight className="text-emerald-500" />
          <h4 className="font-bold">Email:</h4>
          <h4 className="">sunnykpatel.skp@gmail.com</h4>
        </div>
        <div className="div flex items-center  gap-2">
          <FaChevronRight className="text-emerald-500" />
          <h4 className="font-bold">Nationality:</h4>
          <h4 className="">U.S. Citizen</h4>
        </div>{' '}
        <div className="div flex items-center  gap-2">
          <FaChevronRight className="text-emerald-500" />
          <h4 className="font-bold">Hobbies:</h4>
          <h4 className="">Sports, Travel, Meditation</h4>
        </div>
      </div>
    </section>
  );
};
export default About;
