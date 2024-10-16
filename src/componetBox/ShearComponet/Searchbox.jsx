import { cn } from "../../../lib/utilites/cn";

//  search componet
export const Searchbox = ({ className }) => {
  return (
    <div
      className={cn(
        "border lg:max-w-[240px] md:max-w-[200px] bg-textbgcolor dark:bg-darkcofeecolor dark:border-darkgreencolor w-full  rounded-[6px] relative flex items-center   h-[42px] gap-[5px]",
        className
      )}
    >
      {/* icons */}
      <i className=" text-lg font-bold ps-[10px] text-textsecondarycolor ri-search-line"></i>
      {/* search input */}
      <input
        type="search"
        required
        placeholder="Search incident"
        className="h-full outline-none px-1 rounded-e-[6px] placeholder:text-textsecondarycolor text-sm   text-textsecondarycolor  lg:w-[100%] w-full bg-transparent border-0"
      />
    </div>
  );
};
