import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../usecompo/Button";
import { Container } from "../shearComponet/Container";
import DashboardHeader from "../shearComponet/DashboardHeader";
import { Dashboardlogo } from "../shearComponet/Dashboardlogo";
import { NewIncidentcard } from "../shearComponet/NewIncidentcard";
import { newIncidentdata } from "../../../lib/databox";
import { useState } from "react";
// ##########################
//   NewIncident page
// ##########################
const Newincident = () => {
  const [active, setActive] = useState(11);
  const navigate = useNavigate();
  const getstarteddPage = () => {
    navigate("/incidents/getstarted");
  };
  const navigate2 = useNavigate();
  const ClosePageHandel = () => {
    navigate2("/incidents/getstarted");
  };
  const location = useLocation();
  const isNextpageone = location.pathname.includes("nextpageone");
  return (
    <>
      {/* dashboard header */}
      {!isNextpageone && (
        <DashboardHeader>
          <div className="flex items-center gap-3 ">
            <div>
              <i
                onClick={ClosePageHandel}
                className="ri-close-line size-5 text-center leading-5 rounded-full bg-textbgcolor text-lg font-bold p-2 dark:bg-darkcofeecolor dark:text-darktextdipcolor cursor-pointer btn-border dark:border-darkgreencolor"
              ></i>
            </div>
            {/* dashboard logo */}
            <Dashboardlogo
              className={""}
              sapntext={"Home - Incidents - New Incident"}
              dashboardtext={"New Incident"}
            />
          </div>

          <div className=" bg-[#E5E7EB] w-[80%] md:w-[60%] lg:w-full lg:max-w-[527px]  flex items-center justify-start rounded-full dark:bg-darktextcolor ">
            <span className=" w-[98px] block h-[5px] bg-bgcolored dark:bg-darkgreencolor rounded-s-full"></span>
          </div>

          {/* button box */}
          <div className="grid gap-[14px] grid-cols-2">
            <Button
              click={getstarteddPage}
              className={
                "bg-textbgcolor dark:bg-darkcofeecolor py-1 texl-base sm:py-[10px] dark:border-darkgreencolor text-textsecondarycolor btn-border tracking-wider"
              }
            >
              Back
            </Button>

            {/*  nextpage navlink button  */}
            <div>
              <NavLink
                to="nextpageone"
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
      )}

      {/* active newincident card box */}
      {!isNextpageone && (
        <section className=" pb-[177px]">
          <Container>
            <div className={"max-w-[756px] mx-auto"}>
              <h3 className="mx-auto sm:max-w-full sm:w-full text-textblackcolor text-xl  text-left sm:text-2xl font-bold pb-6">
                Which of these best describes the incident?
              </h3>
              <div className="grid place-items-center items-start md:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:grid-cols-4  gap-3">
                {newIncidentdata.map((res) => (
                  <NewIncidentcard
                    active={active === res.id}
                    click={() => setActive(res.id)}
                    key={res.id}
                    {...res}
                  />
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}
      <Outlet />
    </>
  );
};

export default Newincident;
