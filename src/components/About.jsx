import SectionTitle from './SectionTitle';
import { FaChevronRight } from 'react-icons/fa';

const About = () => {
  return (
    <section
      className="bg-white dark:bg-[#000000] duration-200 py-14 md:py-16 lg:py-24"
      id="about"
    >
      <div className="align-elements">
        <SectionTitle text={'about me'} />
      </div>
      <div className="grid pt-12 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 align-elements">
        <div className="div flex items-center  gap-2">
          <FaChevronRight className="text-emerald-500" />
          <h4 className="font-bold dark:text-slate-200 duration-200">
            Hobbies:
          </h4>
          <h4 className="dark:text-slate-400 duration-200">
            Sports, Travel, Meditation
          </h4>
        </div>
        {/* <div className="div flex items-center  gap-2">
          <FaChevronRight className="text-emerald-500" />
          <h4 className="font-bold dark:text-slate-200 duration-200">City:</h4>
          <h4 className="dark:text-slate-400 duration-200">Dalton, Georgia</h4>
        </div> */}
        <div className="div flex items-center  gap-2">
          <FaChevronRight className="text-emerald-500" />
          <h4 className="font-bold dark:text-slate-200 duration-200">
            Nationality:
          </h4>
          <h4 className="dark:text-slate-400 duration-200">U.S. Citizen</h4>
        </div>
        <div className="div flex items-center  gap-2">
          <FaChevronRight className="text-emerald-500" />
          <h4 className="font-bold dark:text-slate-200 duration-200">Email:</h4>
          <a
            href="mailto:sunnykpatel.skp@gmail.com"
            className="dark:text-slate-400 duration-200 hover:text-emerald-500 dark:hover:text-emerald-500"
          >
            sunnykpatel.skp@gmail.com
          </a>
        </div>
        <div className="div flex items-center  gap-2">
          <FaChevronRight className="text-emerald-500" />
          <h4 className="font-bold dark:text-slate-200 duration-200">Phone:</h4>
          <a
            href="tel:808-649-8220"
            className="hover:text-emerald-500 dark:hover:text-emerald-500 dark:text-slate-400 duration-200"
          >
            (808) 649-8220
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
