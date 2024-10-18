import { cn } from "../../../lib/utilites/cn";

export const InputTextbox = ({ className }) => (
  <input
    className={cn(
      "w-full mt-6 bg-[#F4F4F5] px-[10px] py-5 rounded-[6px] placeholder:text-textsecondarycolor dark:bg-darkcofeecolor  text-lg font-normal text-textblackcolor dark:text-darktextdipcolor outline-none btn-border dark:border-darkgreencolor focus:outline-none focus:border-bgcolored dark:focus:border-bgcolored/40 valid:focus:border-darkgreencolor dark:valid:focus:border-emerald-600/50  valid:border-darkgreencolor dark:valid:border-emerald-600/50 placeholder:text-sm",
      className
    )}
    placeholder="Add title here"
    type="text"
    required
  />
);
export const InputTextareabox = ({ className }) => (
  <textarea
    className={cn(
      "w-full mt-6 bg-[#F4F4F5] px-[10px] py-5 rounded-[6px] placeholder:text-textsecondarycolor placeholder:text-sm dark:bg-darkcofeecolor  text-lg font-normal text-textblackcolor dark:text-darktextdipcolor outline-none btn-border dark:border-darkgreencolor focus:outline-none focus:border-bgcolored dark:focus:border-bgcolored/40 valid:focus:border-darkgreencolor dark:valid:focus:border-emerald-600/50  valid:border-darkgreencolor dark:valid:border-emerald-600/50 h-[127px] resize-none",
      className
    )}
    placeholder="Type here"
    type="text"
    required
  ></textarea>
);

export const Inputfrom = (props) => {
  const { title, subtext, componet } = props || {};
  return (
    <>
      <div className=" pb-5 sm:pb-6">
        <h3 className="mx-auto sm:max-w-full sm:w-full text-textblackcolor text-xl text-left sm:text-2xl font-bold ">
          {title}
        </h3>
        <p className="text-sm font-normal text-textsecondarycolor dark:text-darktextcolor pt-3">
          {subtext}
        </p>

        {componet}
      </div>
    </>
  );
};
