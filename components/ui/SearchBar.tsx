import IconButton from "./IconButton";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center md:bg-neutral-50 rounded-full md:shadow-sm hover:bg-neutral-200 transition-colors">
      <div>
        <IconButton icon={<CiSearch size={22} />} onClick={() => {}} />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="hidden md:block ml-1 bg-transparent outline-none text-sm font-medium h-full"
      />
    </div>
  );
};

export default SearchBar;
