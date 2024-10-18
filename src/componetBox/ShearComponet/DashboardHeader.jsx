
import { cn } from "../../../lib/utilites/cn";
import { Container } from "./Container";

// dashboard header component
const DashboardHeader = ({ className, children }) => {

  return (
    <>
      <section
        className={cn(
          ` bg-headerbg   dark:bg-darkbgcolor pt-14 md:pt-16 lg:pt-0 lg:mt-[87px] border-b border-b-darktextdipcolor/50 dark:border-b dark:border-darkgreencolor/50`,
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
