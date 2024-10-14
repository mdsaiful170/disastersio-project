import { cn } from "../../../lib/utilites/cn";

// button component
export const Button = ({ children, className }) => {
  return (
    <>
      <button
        className={cn(
          " md:py-3 md:lg:px-5 py-2 text-[16px] tracking-wider font-bold px-4 text-textbgcolor bg-bgcolored rounded-[6px] lg:px-6 lg:py-4",
          className
        )}
      >
        {children}
      </button>
    </>
  );
};
