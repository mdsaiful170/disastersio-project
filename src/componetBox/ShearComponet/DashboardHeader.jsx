import { Container } from "../shearComponet/Container";
import { cn } from "../../../lib/utilites/cn";
import { useEffect, useState } from "react";

// dashboard header component
const DashboardHeader = ({ className, children }) => {
  const [isscolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handlescroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  });
  return (
    <>
      <section
        className={cn(
          `${
            isscolled ? "bg-textbgcolor" : "bg-[#E4E4E780]"
          } md:fixed   md:z-[1100] md:left-0 md:right-0 md:top-0 dark:bg-darkbgcolor pt-14 md:pt-16 lg:pt-0 lg:mt-[87px] border-b border-b-darktextdipcolor/50 dark:border-b dark:border-darkgreencolor/50`,
          className
        )}
      >
        <Container className={"py-0 pt-8 pb-[22px]"}>
          <header className="flex items-center justify-between gap-3 md:flex-row flex-col ">
            {children}
          </header>
        </Container>
      </section>
    </>
  );
};

export default DashboardHeader;
