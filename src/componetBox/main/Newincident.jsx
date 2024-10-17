import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../ShearComponet/Button";
import { Container } from "../shearComponet/Container";
import DashboardHeader from "../ShearComponet/DashboardHeader";
import { Dashboardlogo } from "../ShearComponet/Dashboardlogo";
import { NewIncidentcard } from "../ShearComponet/NewIncidentcard";
import { newIncidentdata } from "../../../lib/databox";
import { useState } from "react";

const Newincident = () => {
  const [active, setActive] = useState(11);
  const navigate = useNavigate();
  const getstarteddPage = () => {
    navigate("/incidents/getstarted");
  };
  return (
    <>
      {/* dashboard header */}
      <DashboardHeader>
        <div className="flex items-center gap-3 ">
          <div>
            <i className="ri-close-line size-5 text-center leading-5 rounded-full bg-textbgcolor text-lg font-bold p-2 dark:bg-darkcofeecolor dark:text-darktextdipcolor cursor-pointer btn-border dark:border-darkgreencolor"></i>
          </div>
          {/* dashboard logo */}
          <Dashboardlogo
            className={""}
            sapntext={"Home - Incidents - New Incident"}
            dashboardtext={"Incidents"}
          />
        </div>

        <div className=" bg-[#E5E7EB] w-[80%] md:w-1/3  lg:w-full lg:max-w-[527px]  flex items-center justify-start rounded-full dark:bg-darktextcolor ">
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

      {/* active newincident card box */}
      <section className="pt-52  pb-[177px]">
        <Container>
          <div className={"max-w-[756px] mx-auto"}>
            <h3 className="text-textblackcolor md:text-2xl font-bold pb-6">
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
    </>
  );
};

export default Newincident;
