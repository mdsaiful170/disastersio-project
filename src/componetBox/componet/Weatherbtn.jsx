import { cn } from "../../../lib/utilites/cn";
import { Weather } from "./Icons";

export const Weatherbtn = () => {
  return (
    <>
      <button
        className={cn(
          "p-[12px] gap-[5px]  rounded-full flex items-center justify-center bg-textbgcolor "
        )}
      >
        <Weather />
        <p className="text-[#18181B] font-bold text-base">Weather</p>
      </button>
    </>
  );
};
