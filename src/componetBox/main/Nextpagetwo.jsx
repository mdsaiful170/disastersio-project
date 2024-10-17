import { NavLink, useNavigate } from "react-router-dom";
import DashboardHeader from "../ShearComponet/DashboardHeader";
import { Dashboardlogo } from "../ShearComponet/Dashboardlogo";
import { Button } from "../ShearComponet/Button";
import { Container } from "postcss";

const Nextpagetwo = () => {
  const navigate = useNavigate();
  const NextpageonePagehandle = () => {
    navigate("/incidents/getstarted/newincident/nextpageone");
  };
  const navigate2 = useNavigate();
  const ClosePageHandel = () => {
    navigate2("/incidents/getstarted");
  };
  return (
    <>
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

        <div className=" bg-[#E5E7EB] w-[80%] md:w-1/3  lg:w-full lg:max-w-[527px]  flex items-center justify-start rounded-full dark:bg-darktextcolor ">
          <span className=" w-[98px] block h-[5px] bg-bgcolored dark:bg-darkgreencolor rounded-s-full"></span>
        </div>

        {/* button box */}
        <div className="grid gap-[14px] grid-cols-2">
          <Button
            click={NextpageonePagehandle}
            className={
              "bg-textbgcolor dark:bg-darkcofeecolor py-1 texl-base sm:py-[10px] dark:border-darkgreencolor text-textsecondarycolor btn-border tracking-wider"
            }
          >
            Back
          </Button>

          {/*  nextpage navlink button  */}
          <Button>Finished</Button>
        </div>
      </DashboardHeader>
      <section className="md:pt-52  pb-[177px]">
        <Container>
          <div className={"max-w-[756px] mx-auto"}>
            <div className="pb-5 sm:pb-6">
              <h3 className="mx-auto sm:max-w-full sm:w-full text-textblackcolor text-xl text-left sm:text-2xl font-bold ">
                Where’s the incident?
              </h3>
              <p className="text-sm font-normal text-textsecondarycolor dark:text-darktextcolor pt-3">
                Enter a GPS, address. or pin point on the map. Try to be as
                accurate as possible, or click:Jurisdiction Wide
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Nextpagetwo;
