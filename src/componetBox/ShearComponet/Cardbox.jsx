import { Weatherbtn } from "./Weatherbtn";

export const Cardbox = (props) => {
  const { img, title, subtitle, amount ,id } = props || {};
  return (
    <>
      <div key={id} className="sm:w-full md:max-w-[306px] min-h-[337px] rounded-[10px] relative overflow-hidden">
        <Weatherbtn className="absolute top-[10px] right-[10px]" />
        <img
          src={img}
          alt=""
          className=" md:h-[253px] sm:max-w-full object-cover rounded-[10px]"
        />
        <div className="pt-5">
          <h3 className="text-base font-bold text-textblackcolor">
            {title}
          </h3>
          <p className="text-sm py-2 font-normal leading-[20px] md:leading-[30px]  text-textsecondarycolor">
           {subtitle}
          </p>
          <h4 className="text-base text-textblackcolor font-bold">
            {amount}
          </h4>
        </div>
      </div>
    </>
  );
};
