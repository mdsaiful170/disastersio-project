import { Container } from "../shearComponet/Container";
import { Dashboardlogo } from "../ShearComponet/Dashboardlogo";
import { Searchbox } from "../ShearComponet/Searchbox";
import { Button } from "../ShearComponet/Button";
import { cn } from "../../../lib/utilites/cn";
import { useEffect, useState } from "react";

// dashboard header component
const DashboardHeader = ({
  className,
  children,
  subtext,
  logoname,
  btntext,
}) => {
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
            isscolled ? "bg-textbgcolor" : "bg-headerbg"
          } fixed   z-[1100] left-0 right-0 top-0 dark:bg-darkbgcolor pt-12 md:pt-16 lg:pt-0 lg:mt-[87px]`,
          className
        )}
      >
        <Container className={"py-0 pt-8 pb-[22px]"}>
          <header className="flex items-center justify-between gap-3 md:flex-row flex-col ">
            {/* header logo  */}
            <Dashboardlogo sapntext={subtext} dashboardtext={logoname} />
            {children}
            {/* button component */}
            <div className="grid gap-[14px] grid-cols-2 md:grid-cols-3">
              <Searchbox className={"col-span-2 md:col-span-1"} />
              <Button
                className={
                  "bg-textbgcolor dark:bg-darkcofeecolor py-1 sm:py-[10px] dark:border-darkgreencolor text-textsecondarycolor btn-border"
                }
              >
                Sort By: Date modified
              </Button>
              <Button
                className={"dark:bg-darkgreencolor dark:text-darktextdipcolor"}
              >
                {btntext}
              </Button>
            </div>
          </header>
        </Container>
      </section>
    </>
  );
};

export default DashboardHeader;
