type IconButtonProps = {
  icon: React.ReactElement;
  className?: string;
  onClick?: () => void;
  label?: string;
  count?: number;
};

const IconButton = ({
  icon,
  className,
  onClick,
  label,
  count,
}: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full p-2 hover:bg-neutral-200 flex items-center justify-center transition-colors ${className}`}
    >
      <div className="flex ">
        {icon}
        <div className="absolute">
          {count && count > 0 ? (
            <div className="relative bg-black-primary rounded-full -bottom-3 -right-3 size-4">
              <span className="flex items-center justify-center  text-white-primary text-xs">
                {count}
              </span>
            </div>
          ) : null}
        </div>
        {label && <span className="mx-4">{label}</span>}
      </div>
    </button>
  );
};

export default IconButton;
