import { cn } from "../../../lib/utilites/cn";
import { Container } from "./Container";

// dashboard header component
export const Headerbox = ({ className, children }) => {
  return (
    <>
      <header
        className={cn(
          "flex items-center justify-between gap-3 md:flex-row flex-col ",
          className
        )}
      >
        {children}
      </header>
    </>
  );
};

const DashboardHeader = ({ className, children , sylhetClass }) => {
  return (
    <>
      <section
        className={cn(
          ` bg-headerbg   dark:bg-darkbgcolor pt-14 md:pt-16 lg:pt-0 lg:mt-[87px] border-b border-b-darktextdipcolor/50 dark:border-b dark:border-darkgreencolor/50`,
          className
        )}
      >
        <Container className={"py-0 pt-8 pb-[22px]"}>
          <Headerbox className={sylhetClass} >
            {children}
          </Headerbox>
        </Container>
      </section>
    </>
  );
};

export default DashboardHeader;
