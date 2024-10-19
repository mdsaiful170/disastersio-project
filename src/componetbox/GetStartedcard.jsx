import {cn} from "../../lib/utilites/cn"
// ##########################
//   Getstarted componet
// ##########################
export const GetStartedcard = (props) => {
  const { title,img, subtitle, id, className } = props || {};
  return (
    <>
      <div
       key={id}
        className={cn(
          "w-full md:w-[235px] bg-[#F4F4F5] dark:bg-darkcofeecolor  dark:border-darkgreencolor btn-border rounded-[10px] px-5 py-6",
          className
        )}
      >
        <img src={img} alt="svg" className="pb-16" />
        <h3 className="text-[20px] font-bold pb-5 text-textblackcolor ">
          {title}
        </h3>
        <p className="text-sm font-normal text-textsecondarycolor leading-[22px]">
          {subtitle}
        </p>
      </div>
    </>
  );
};
