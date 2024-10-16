import { Container } from "../shearComponet/Container";
import { Dashboardlogo } from "../ShearComponet/Dashboardlogo";
import { Searchbox } from "../ShearComponet/Searchbox";
import { Button } from "../ShearComponet/Button";
import { cn } from "../../../lib/utilites/cn";
const DashboardHeader = ({ className }) => {
  return (
    <>
      <section
        className={cn(
          "bg-headerbg fixed  left-0 right-0 top-0 dark:bg-darkbgcolor pt-12 md:pt-16 lg:pt-0 lg:mt-[87px]",
          className
        )}
      >
        <Container className={"py-0 pt-8 pb-[22px]"}>
          <header className="flex items-center justify-between gap-3 md:flex-row flex-col ">
            <Dashboardlogo
              sapntext={"Welcome back"}
              dashboardtext={"Dashboard"}
            />

            <div className="grid gap-[14px] grid-cols-2 md:grid-cols-3">
              <Searchbox className={"col-span-2 md:col-span-1"} />
              <Button
                className={
                  "bg-textbgcolor dark:bg-darkcofeecolor dark:border-darkgreencolor text-textsecondarycolor btn-border"
                }
              >
                Sort By: Date modified
              </Button>
              <Button className={"dark:bg-darkgreencolor"}>Cypher AI</Button>
            </div>
          </header>
        </Container>
      </section>
    </>
  );
};

export default DashboardHeader;
