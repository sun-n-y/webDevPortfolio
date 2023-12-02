const SkillsCard = ({ icon, title, text }) => {
  return (
    <article>
      <span>{icon}</span>
      <h4 className="mt-6 font-bold dark:text-slate-200 duration-200">
        {title}
      </h4>
      <p className="mt-2 text-slate-500 dark:text-slate-400 duration-200">
        {text}
      </p>
    </article>
  );
};
export default SkillsCard;
