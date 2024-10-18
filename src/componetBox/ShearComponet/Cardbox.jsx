import { cn } from "../../../lib/utilites/cn";
import { Weatherbtn } from "./Weatherbtn";

export const Cardbox = (props) => {
  const { img, title, subtitle, amount, id, className } = props || {};
  return (
    <>
      <div
        key={id}
        className={cn(
          "sm:w-full md:max-w-[306px] min-h-[337px] rounded-[10px] relative overflow-hidden",
          className
        )}
      >
        <Weatherbtn className="absolute top-[10px] right-[10px]" />
        <img
          src={img}
          alt=""
          className=" md:h-[253px] sm:max-w-full object-cover rounded-[10px]"
        />
        <div className="pt-5">
          <h3 className="text-base font-bold text-textblackcolor">{title}</h3>
          <p className="text-sm py-2 font-normal leading-[20px] md:leading-[30px]  text-textsecondarycolor">
            {subtitle}
          </p>
          <h4 className="text-base text-textblackcolor font-bold">{amount}</h4>
        </div>
      </div>
    </>
  );
};

export const LocationCard = (props) => {
  const { img, title, subtitle, amount, id, className } = props || {};
  return (
    <>
      <div
        key={id}
        className={cn(
          " w-full sm:w-full md:max-w-[216px] min-h-[250px] rounded-[10px] relative overflow-hidden",
          className
        )}
      >
        <Weatherbtn className="absolute top-[10px] right-[10px]" />
        <img
          src={img}
          alt=""
          className=" md:h-[177px] sm:max-w-full object-cover rounded-[7px]"
        />
        <div className="pt-[14px]">
          <h3 className="text-base font-bold text-textblackcolor">{title}</h3>
          <p className="text-sm py-2 font-normal leading-[20px] md:leading-[30px]  text-textsecondarycolor">
            {subtitle}
          </p>
          <h4 className="text-base text-textblackcolor font-bold">{amount}</h4>
        </div>
      </div>
    </>
  );
};

export const LocationActiveDocumentCard = (props) => {
  const { id, title, img, location, amount, className } = props || {};
  return (
    <>
      <div
        key={id}
        className={cn(
          "w-full max-w-full bg-[#F4F4F5] dark:bg-darkcofeecolor rounded-[10px] px-[10px] py-[15px] pb-4",
          className
        )}
      >
        <div className="flex items-center gap-4">
          <img
            src={img}
            alt="img"
            className="size-[78px] object-cover rounded-[10px]"
          />
          <h3 className="text-base font-bold text-textblackcolor dark:text-darktextdipcolor">
            {title}
          </h3>
          <p className="py-3 text-textsecondarycolor dark:text-darktextcolor font-normal text-sm">
            {location}
          </p>
          <h3 className="text-base font-bold text-textblackcolor dark:text-darktextdipcolor">
            {amount}
          </h3>
        </div>
      </div>
    </>
  );
};
