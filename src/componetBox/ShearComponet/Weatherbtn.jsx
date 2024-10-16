import { cn } from "../../../lib/utilites/cn";
import { Weather } from "./icon";

export const Weatherbtn = ({className, children}) => {
  return (
    <>
      <button
        className={cn(
          "p-[10px] gap-[5px]  rounded-full flex items-center justify-center bg-textbgcolor", className
        )}
      >
        <Weather />
        <p className="text-[#18181B] font-bold text-sm">Weather</p>
        {children}
      </button>
    </>
  );
};
