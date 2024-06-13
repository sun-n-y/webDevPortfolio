import { FaArrowUpFromBracket } from 'react-icons/fa6';

const SectionTitle = ({ text, text2, link }) => {
  return (
    <div className="border-b border-gray-200 pb-5 dark:border-emerald-500 duration-200 flex items-center justify-between">
      <h2 className="font-medium capitalize tracking-wider text-3xl dark:text-slate-200 duration-200">
        {text}
      </h2>
      <a
        href={link || '#home'}
        target={link && '_blank'}
        rel={link && 'noreferrer'}
        className="self-end italic text-slate-400 hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-500 duration-200"
      >
        {text2 ? (
          <div className="flex gap-x-1">
            {text2}
            {/* <FaArrowUpFromBracket className="self-center" /> */}
          </div>
        ) : (
          <FaArrowUpFromBracket className="mb-1 h-6 w-6 md:h-5 md:w-5" />
        )}
      </a>
    </div>
  );
};
export default SectionTitle;
