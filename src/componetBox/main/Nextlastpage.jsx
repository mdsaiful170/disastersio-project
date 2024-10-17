import {  useNavigate } from "react-router-dom";
import { Button } from "../ShearComponet/Button";
import { Container } from "../shearComponet/Container";
import { Map } from "../ShearComponet/Map";
import { Searchbox } from "../ShearComponet/Searchbox";
import { Dashboardlogo } from "../ShearComponet/Dashboardlogo";
import DashboardHeader from "../ShearComponet/DashboardHeader";

const Nextlastpage = () => {
  const navigate = useNavigate();
  const backNextpageOne = () => {
    navigate("/incidents/getstarted/newincident/nextpageone");
  };
  const navigate2 = useNavigate();
  const ClosePageHandel = () => {
    navigate2("/incidents/getstarted");
  };
  const navigate3 = useNavigate();
  const backHomepage = () => {
    navigate3("/");
  };
  return (
    <>
     <DashboardHeader>
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
            click={backNextpageOne}
            className={
              "bg-textbgcolor px-8 dark:bg-darkcofeecolor dark:border-darkgreencolor text-textsecondarycolor btn-border tracking-wider"
            }
          >
            Back
          </Button>

          {/*  nextpage navlink button  */}
           <Button click={backHomepage} className={"sm:px-9 text-[12px] sm:py-[15px]"}>
           Finished
           </Button>
        </div>
      </DashboardHeader>
      <section className="pb-[150px]">
        <Container>
          <div className={"max-w-[756px] mx-auto"}>
            <div className="pb-5 sm:pb-6">
              <h3 className="mx-auto sm:max-w-full sm:w-full text-textblackcolor text-xl text-left sm:text-2xl font-bold ">
                Where’s the incident?
              </h3>
              <p className="text-sm max-w-[518px] font-normal text-textsecondarycolor dark:text-darktextcolor pt-3">
                Enter a GPS, address. or pin point on the map. Try to be as
                accurate as possible, or click:Jurisdiction Wide
              </p>
            </div>

            <Map>
              <div className="absolute top-5 w-full max-w-[270px] left-[10px]">
                <Searchbox placetext={"Enter incident address or GPS"} className={"dark:bg-darkgreencolor"} />
                <Searchbox placetext={"Pinpoint damage"} className={" mt-2"} />
              </div>
            </Map>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Nextlastpage;
