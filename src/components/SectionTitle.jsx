const SectionTitle = ({ text }) => {
  return (
    <div className="border-b border-gray-200 pb-5 dark:border-emerald-500 duration-200">
      <h2 className="font-medium capitalize tracking-wider text-3xl dark:text-slate-200 duration-200">
        {text}
      </h2>
    </div>
  );
};
export default SectionTitle;
