import {cn} from "../../lib/utilites/cn"
import { BulidingIcon } from "../usecompo/Icon";

// ##########################
// location cost componet
// ##########################
export const LocationCostbox = (props) => {
  const { className, img, subtitle, title } = props || {};
  return (
    <>
      <div
        className={cn("flex items-center  gap-[15px] justify-start", className)}
      >
        <div className=" bg-[#F4F4F5] dark:border-darkgreencolor btn-border  rounded-full p-[9px] dark:bg-darkcofeecolor ">
          <img
            src={img}
            className=" size-5 object-contain dark:filter dark:brightness-50 dark:invert "
            alt=""
          />
        </div>
        <div>
          <span className="text-sm  text-[#6B7280] dark:text-darktextcolor">
            {subtitle}
          </span>
          <h3 className=" sm:text-xl pt-[8px] font-bold text-darkbgcolor dark:text-darktextdipcolor">
            {title}
          </h3>
        </div>
      </div>
    </>
  );
};

// ##########################
// location articale componet
// ##########################
export const LocationArticlebox = (props) => {
  const { title, des } = props || {};
  return (
    <>
      <article>
        <h3 className="text-textblackcolor dark:text-darktextdipcolor text-base font-bold pb-2 md:pb-[10px]">
          {title}
        </h3>
        <p className="text-base  leading-[22px] text-textsecondarycolor dark:text-darktextcolor">
          {des}
        </p>
      </article>
    </>
  );
};

// ##########################
//   horizontal line component
// ##########################
export const Horizontalline = ({ className }) => (
  <div
    className={cn(
      "h-[1px] w-full bg-[#E4E4E7] my-10  dark:bg-darkcofeecolor",
      className
    )}
  ></div>
);
// ##########################
// location card buttion componet
// ##########################
export const Bulding = ({ className, children }) => (
  <button
    className={cn(
      "px-[8px] py-[7px] gap-[3px] dark:bg-darkgreencolor  rounded-full flex items-center justify-center bg-textbgcolor",
      className
    )}
  >
    <BulidingIcon className={"dark:text-darktextdipcolor text-[#000000]"} />
    <p className="text-[#18181B] font-bold text-sm dark:text-darktextdipcolor">
      Building
    </p>
    {children}
  </button>
);
// ##########################
// location card componet
// ##########################

export const LocationCardbox = (props) => {
  const { img, title, subtitle, amount, className } = props || {};
  return (
    <>
      <div
        className={cn(
          " w-full max-w-full   min-h-[250px] rounded-[10px] relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow hover:scale-[1.02] dark:hover:shadow-darkgreencolor",
          className
        )}
      >
        <Bulding className="absolute top-[7px] right-[6px]" />
        <img
          src={img}
          alt=""
          className=" h-[220px] md:h-[200px] lg:h-[177px] sm:max-w-full w-full object-cover rounded-[7px] "
        />
        <div className="pt-[14px] p-1">
          <h3 className="text-base font-bold text-textblackcolor">{title}</h3>
          <p className="text-[12px] py-2 font-normal    text-textsecondarycolor">
            {subtitle}
          </p>
          <h4 className="text-base text-textblackcolor font-bold">{amount}</h4>
        </div>
      </div>
    </>
  );
};

// ######################################
// location active document card componet
// ######################################

export const LocationActiveDocumentCard = (props) => {
  const { id, title, img, location, amount, className } = props || {};
  return (
    <>
      <div
        key={id}
        className={cn(
          "w-full max-w-full cursor-pointer btn-border dark:border-darkgreencolor dark:hover:shadow-darkgreencolor transition duration-150 hover:shadow bg-[#F4F4F5] dark:bg-darkcofeecolor rounded-[10px] px-[10px] py-[15px] pb-4",
          className
        )}
      >
        <div className="flex items-center gap-4 ">
          <img
            src={img}
            alt="img"
            className="size-[78px] object-cover max-w-full rounded-[10px]"
          />
          <div>
            <h3 className="text-base font-bold text-textblackcolor dark:text-darktextdipcolor">
              {title}
            </h3>
            <p className="py-2 text-textsecondarycolor dark:text-darktextcolor font-normal text-sm">
              {location}
            </p>
            <h3 className="text-base font-bold text-textblackcolor dark:text-darktextdipcolor">
              {amount}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

// ######################################
// Location Map Component
// ######################################

export const LocationMap = (props) => {
  const { subtitle, subtitle2 } = props || {};
  const mapImg = "/img/LocationMap.png";
  return (
    <>
      <div>
        <p className=" pb-3 lg:pb-5 text-sm font-normal text-textsecondarycolor dark:text-darktextcolor">
          {subtitle}
        </p>
        <img
          src={mapImg}
          alt=""
          className="max-w-[669px] mx-auto w-full object-cover"
        />

        <p className=" pt-3 lg:pt-5 text-sm font-normal text-textsecondarycolor dark:text-darktextcolor">
          {subtitle2}
        </p>
      </div>
    </>
  );
};
