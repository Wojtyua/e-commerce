import { cn } from "@/lib/utils";

type IconButtonProps = {
  icon: React.ReactNode;
  className?: string;
  onClick: () => void;
};

const IconButton = ({ icon, className }: IconButtonProps) => {
  return (
    <div
      className={`size-9 rounded-full hover:bg-neutral-200 flex items-center justify-center transition-colors ${className}`}
    >
      {icon}
    </div>
  );
};

export default IconButton;
