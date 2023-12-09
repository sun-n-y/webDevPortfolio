const SectionTitle = ({ text, text2, link }) => {
  return (
    <div className="border-b border-gray-200 pb-5 dark:border-emerald-500 duration-200 flex items-center justify-between">
      <h2 className="font-medium capitalize tracking-wider text-3xl dark:text-slate-200 duration-200">
        {text}
      </h2>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="self-end italic text-slate-500 hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-500 duration-200"
      >
        {text2}
      </a>
    </div>
  );
};
export default SectionTitle;
