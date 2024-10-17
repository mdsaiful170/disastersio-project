import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ShearComponet/Button";
import { Container } from "../shearComponet/Container";
import DashboardHeader from "../ShearComponet/DashboardHeader";
import { Dashboardlogo } from "../ShearComponet/Dashboardlogo";
import {
  Inputfrom,
  InputTextareabox,
  InputTextbox,
} from "../ShearComponet/Inputfrom";

const Nextpageone = () => {
  const navigate = useNavigate();
  const NewIncdientPagehandle = () => {
    navigate("/incidents/getstarted/newincident");
  };
  const navigate2 = useNavigate();
  const ClosePageHandel = () => {
    navigate2("/incidents/getstarted");
  };

  const location = useLocation();
  const isnextLastpage = location.pathname.includes("nextlastpage");

  return (

    <>
      {!isnextLastpage && (<DashboardHeader>
        <div className="flex items-center gap-3 ">
          <div>
            <i onClick={ClosePageHandel} className="ri-close-line size-5 text-center leading-5 rounded-full bg-textbgcolor text-lg font-bold p-2 dark:bg-darkcofeecolor dark:text-darktextdipcolor cursor-pointer btn-border dark:border-darkgreencolor"></i>
          </div>
          {/* dashboard logo */}
          <Dashboardlogo
            className={""}
            sapntext={"Home - Incidents - New Incident"}
            dashboardtext={"New Incident"}
          />
        </div>

        <div className=" bg-[#E5E7EB] w-[80%] md:w-1/3  lg:w-full lg:max-w-[527px]  flex items-center justify-start rounded-full dark:bg-darktextcolor ">
          <span className=" w-[98px] block h-[5px] bg-bgcolored dark:bg-darkgreencolor rounded-s-full"></span>
        </div>

        {/* button box */}
        <div className="grid gap-[14px] grid-cols-2">
          <Button
            click={NewIncdientPagehandle}
            className={
              "bg-textbgcolor dark:bg-darkcofeecolor py-1 texl-base sm:py-[10px] dark:border-darkgreencolor text-textsecondarycolor btn-border tracking-wider"
            }
          >
            Back
          </Button>

          {/*  nextpage navlink button  */}
          <div>
            <NavLink
              to="nextlastpage"
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
      </DashboardHeader>)}
      {!isnextLastpage && (<section className=" pb-[177px]">
        <Container>
          <div className={"max-w-[756px] mx-auto"}>
            <Inputfrom
              title={"Let’s give the incident a title?"}
              subtext={"Make a title that will easily identify the incidents"}
              componet={<InputTextbox />}
            />
            <Inputfrom
              title={"Describe what happened during the incident?"}
              subtext={
                "Share some information about the incident. The when, where, how. "
              }
              componet={<InputTextareabox />}
            />
          </div>
        </Container>
      </section>)}

      <Outlet />
    </>
  );
};

export default Nextpageone;
