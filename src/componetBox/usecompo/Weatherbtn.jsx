import { cn } from "../../../lib/utilites/cn";
import { Weather } from "./Icon";
// ##########################
//   Weatherbtn component
// ##########################
export const Weatherbtn = ({ className, children }) => {
  return (
    <>
      <button
        className={cn(
          "p-[10px] gap-[5px] dark:bg-darkgreencolor  rounded-full flex items-center justify-center bg-textbgcolor",
          className
        )}
      >
        <Weather className={"dark:text-darktextdipcolor text-[#18181B]"} />
        <p className="text-[#18181B] font-bold text-sm dark:text-darktextdipcolor">
          Weather
        </p>
        {children}
      </button>
    </>
  );
};
