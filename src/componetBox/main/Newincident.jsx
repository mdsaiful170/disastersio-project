import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../ShearComponet/Button";
import { Container } from "../shearComponet/Container";
import DashboardHeader from "../ShearComponet/DashboardHeader";
import { Dashboardlogo } from "../ShearComponet/Dashboardlogo";

const Newincident = () => {
  const navigate = useNavigate();
  const getstarteddPage = () => {
    navigate("/incidents/getstarted");
  };
  return (
    <>
      <DashboardHeader>
        <div className="flex items-center gap-3 ">
          <div>
            <i className="ri-close-line size-5 text-center leading-5 rounded-full bg-textbgcolor text-lg font-bold p-2 dark:bg-darkcofeecolor dark:text-darktextdipcolor cursor-pointer btn-border dark:border-darkgreencolor"></i>
          </div>
          <Dashboardlogo
            className={""}
            sapntext={"Home - Incidents - New Incident"}
            dashboardtext={"Incidents"}
          />
        </div>
        <div className="grid gap-[14px] grid-cols-2">
          <Button
            click={getstarteddPage}
            className={
              "bg-textbgcolor dark:bg-darkcofeecolor py-1 texl-base sm:py-[10px] dark:border-darkgreencolor text-textsecondarycolor btn-border tracking-wider"
            }
          >
            Back
          </Button>

          <div>
            <NavLink
              to="nextpage"
              className={
                "dark:bg-darkgreencolor dark:text-darktextdipcolor  px-[17px] inline-block py-2 sm:py-[10px] text-[12px] tracking-wider font-bold  text-textbgcolor bg-bgcolored rounded-[6px] "
              }
            >
              <p className="text-[12px] font-bold flex items-center justify-center gap-[5px] ">
                <i className=" ri-add-line text-xl font-bold "></i> Next Page
              </p>
            </NavLink>
          </div>
        </div>
      </DashboardHeader>

      <section className="pt-52  pb-[177px]">
        <Container className={"max-w-[753px] mx-auto"}>
          <div></div>
        </Container>
      </section>
    </>
  );
};

export default Newincident;
