import { cn } from "../../../lib/utilites/cn";

// button component
export const Button = ({ children, className }) => {
  return (
    <>
      <button
        className={cn(
          " px-[17px]    inline-block py-[10px] text-[12px] tracking-wider font-bold  text-textbgcolor bg-bgcolored rounded-[6px] ",
          className
        )}
      >
        {children}
      </button>
    </>
  );
};
