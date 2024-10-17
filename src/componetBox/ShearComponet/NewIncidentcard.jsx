import { cn } from "../../../lib/utilites/cn";

export const NewIncidentcard = (props) => {
  const { icon, title, click, active } = props || {};
  return (
    <>
      <button
        onClick={click}
        className={cn(
          "p-5 btn-border w-full transition-all duration-300 sm:w-[180px] rounded-[6px] dark:border-darkgreencolor bg-[#F4F4F5] dark:bg-darkcofeecolor cursor-pointer hover:bg-bgcolored group dark:hover:bg-darkgreencolor",
          active && "bg-bgcolored dark:bg-darkgreencolor"
        )}
      >
        <div className="flex  items-center gap-[10px]  ">
          <img
            src={icon}
            className={cn(
              "max-w-full group-hover:filter group-hover:brightness-0 group-hover:invert  dark:filter dark:grayscale dark:brightness-75 dark:invert object-cover",
              active &&
                "filter  brightness-0 invert dark:filter dark:brightness-0 dark:invert"
            )}
            alt="img"
          />
          <h2
            className={cn(
              "text-sm group-hover:text-textbgcolor  font-normal text-textsecondarycolor dark:text-darktextdipcolor",
              active && "text-textbgcolor dark:text-textbgcolor"
            )}
          >
            {title}
          </h2>
        </div>
      </button>
    </>
  );
};
