
import { cn } from "../../../lib/utilites/cn";

// logo img path
const logo = "img/logo.png";

// main logo component
export const Logo = ({ className }) => {
  return (
    <>
      <img
        src={logo}
        alt="logo"
        className={cn("max-w-[30%] sm:max-w-full w-fit  ", className)}
      />
    </>
  );
};
