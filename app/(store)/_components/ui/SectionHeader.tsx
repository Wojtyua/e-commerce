type SectionHeaderProps = {
  title: String;
  className?: String;
};

const SectionHeader = ({ title, className }: SectionHeaderProps) => {
  return (
    <h2
      className={`text-3xl font-semibold tracking-wide capitalize mb-10 pl-6 ${className}`}
    >
      {title}
    </h2>
  );
};

export default SectionHeader;
