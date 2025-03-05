import { cn } from "../../utils";
import FeatherIcon from "feather-icons-react";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // AP-TODO: NEED A BETTER NAME. SIZE CLASHES WITH BASE SIZE PROP
  s?: "sm" | "md";
}

const sizeStyles = {
  sm: "h-8",
  md: "h-9",
};

const SearchInput: React.FC<SearchInputProps> = (props) => {
  const { className, s = "md", ...rest } = props;

  return (
    <div className={cn("relative flex items-center")}>
      <input
        type="text"
        className={cn(
          "placeholder:color-zinc-500 rounded-[6px] border border-zinc-300 bg-white pr-3 pl-8 text-sm drop-shadow-xs",
          sizeStyles[s],
          className,
        )}
        {...rest}
      />

      <FeatherIcon
        icon="search"
        className={cn("absolute top-1/2 left-2 -translate-y-1/2 text-zinc-500")}
        size={16}
      />
    </div>
  );
};

export default SearchInput;
