import { MouseEventHandler } from "react";

type IconButtonProps = {
  icon: React.ReactElement;
  className?: string;
  onClick: () => void;
};

const IconButton = ({ icon, className, onClick }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`size-9 rounded-full hover:bg-neutral-200 flex items-center justify-center transition-colors ${className}`}
    >
      {icon}
    </button>
  );
};

export default IconButton;
