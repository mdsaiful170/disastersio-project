import { cn } from "../../../lib/utilites/cn";

// ##########################
//   Map component
// ##########################
const mapImg = "/img/map.png";
export const Map = ({ className, children }) => {
  return (
    <>
      <div className={cn("relative overflow-hidden cursor-pointer", className)}>
        <img
          src={mapImg}
          className="w-full rounded-[10px] max-w-full object-cover"
          alt="mapimg"
        />
        {children}
      </div>
    </>
  );
};
