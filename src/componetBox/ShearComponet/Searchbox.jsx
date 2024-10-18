import { cn } from "../../../lib/utilites/cn";
// ##########################
//  search componet
// ##########################
export const Searchbox = ({ className, placetext }) => {
  return (
    <div
      className={cn(
        "border md:max-w-[190px] max-w-full  bg-textbgcolor dark:bg-darkcofeecolor dark:border-darkgreencolor   rounded-[6px] relative flex items-center h-[45px] gap-[5px]",
        className
      )}
    >
      {/* icons */}
      <i className=" text-lg font-bold ps-[10px] text-textsecondarycolor ri-search-line"></i>
      {/* search input */}
      <input
        type="search"
        required
        placeholder={placetext}
        className="h-full outline-none px-1 rounded-e-[6px] placeholder:text-textsecondarycolor text-sm   text-textsecondarycolor  lg:w-[100%] w-full bg-transparent border-0 dark:text-darktextdipcolor"
      />
    </div>
  );
};
