import { cn } from "../../../lib/utilites/cn";

const mapImg = "/img/map.png";
export const Map = ({ className, children }) => {
  return (
    <>
      <div className={cn("relative overflow-hidden", className)}>
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
