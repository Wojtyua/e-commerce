type IconButtonProps = {
  icon: React.ReactElement;
  className?: string;
  onClick?: () => void;
  label?: string;
};

const IconButton = ({ icon, className, onClick, label }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full p-2 hover:bg-neutral-200 flex items-center justify-center transition-colors ${className}`}
    >
      <div className="flex">
        {icon}
        {label && <span className="mx-4">{label}</span>}
      </div>
    </button>
  );
};

export default IconButton;
