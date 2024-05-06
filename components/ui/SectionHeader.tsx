type SectionHeaderProps = {
  title: String;
};

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <h2 className="text-3xl font-semibold tracking-tight mb-10 pl-6 ">
      {title}
    </h2>
  );
};

export default SectionHeader;
