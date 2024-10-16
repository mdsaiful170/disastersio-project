import { cn } from "../../../lib/utilites/cn";

// logo img path
const logo = "/img/logo.png";

// main logo component
export const Logo = ({ className }) => {
  return (
    <>
      <img
        src={logo}
        alt="logo"
        className={cn(
          " sm:max-w-[90%] max-w-[85%] object-cover md:max-w-full",
          className
        )}
      />
    </>
  );
};
