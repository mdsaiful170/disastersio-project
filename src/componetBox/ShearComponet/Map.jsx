import { cn } from "../../../lib/utilites/cn";

const mapImg = "/img/map.png";
export const Map = ({ className, children }) => {
  return (
    <>
      <div className={cn("relative overflow-hidden", className)}>
        <img
          src={mapImg}
          className="w-full max-w-full object-cover"
          alt="mapimg"
        />
        {children}
      </div>
    </>
  );
};
