import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../ShearComponet/Button";
import { Container } from "../shearComponet/Container";
import DashboardHeader from "../ShearComponet/DashboardHeader";
import { Dashboardlogo } from "../ShearComponet/Dashboardlogo";

const Newincident = () => {
    const navigate = useNavigate();
    const getstarteddPage= () => {
        navigate("/incidents/getstarted")
    }
  return (
    <>
      <DashboardHeader>
        <Dashboardlogo
         className={"text-center"}
          sapntext={"Home - Incidents"}
          dashboardtext={"Incidents"}
        />
        <div className="grid gap-[14px] grid-cols-2">
          <Button
            click={getstarteddPage}
            className={
              "bg-textbgcolor dark:bg-darkcofeecolor py-1 texl-base sm:py-[10px] dark:border-darkgreencolor text-textsecondarycolor btn-border tracking-wider"
            }
          >
            Back
          </Button>
          <Button
            className={"dark:bg-darkgreencolor dark:text-darktextdipcolor"}
          >
            <NavLink to="getstarted">
              <p className="text-[12px] font-bold flex items-center justify-center gap-[5px] ">
                <i className=" ri-add-line text-xl font-bold "></i> New Element
              </p>
            </NavLink>
          </Button>
        </div>
      </DashboardHeader>

      <section className="pt-52  pb-[177px]">
        <Container className={"max-w-[753px] mx-auto"}>
          <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolor in iure laborum velit soluta perspiciatis commodi eos impedit assumenda, quisquam deserunt labore ullam iste fugiat. Reiciendis sequi amet eligendi?</p></div>
        </Container>
      </section>
    </>
  );
};

export default Newincident;
