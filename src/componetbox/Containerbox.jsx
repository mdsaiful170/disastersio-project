import {cn} from "../../lib/utilites/cn"
// ##########################
//   Container componet
// ##########################
export const Container = ({ className, children }) => {
  return (
    <>
      <div
        className={cn(
          "max-w-[1300px] mx-auto md:px-10 pt-10 px-[10px] lg:px-[60px] xl:px-[70px]",
          className
        )}
      >
        {children}
      </div>
    </>
  );
};
