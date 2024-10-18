import DashboardHeader from "../shearcomponet/DashboardHeader";
import { carddatabox } from "../../../lib/databox";
import { Container } from "../shearcomponet/Containerbox";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Searchbox } from "../shearcomponet/Searchbox";
import { Dashboardlogo } from "../shearcomponet/Dashboardlogo";
import { Button } from "../usecompo/Button";
import { Cardbox } from "../shearcomponet/Cardbox";

// ##########################
//   Incident page
// ##########################
const Incidents = () => {
  const location = useLocation();
  const isGetstartedPage = location.pathname.includes("getstarted");
  return (
    <>
      {/* dashboard header component */}
      {!isGetstartedPage && (
        <DashboardHeader>
          <Dashboardlogo
            sapntext={"Home - Incidents"}
            dashboardtext={"Incidents"}
          />
          <div className="grid gap-[14px] grid-cols-2 md:grid-cols-3">
            <Searchbox
              placetext={"Search incident"}
              className={"col-span-2 md:col-span-1"}
            />
            <Button
              className={
                "bg-textbgcolor dark:bg-darkcofeecolor py-1 sm:py-[10px] dark:border-darkgreencolor text-textsecondarycolor btn-border"
              }
            >
              Sort By: Date modified
            </Button>

            <div>
              <NavLink
                to="getstarted"
                className={
                  "dark:bg-darkgreencolor dark:text-darktextdipcolor  px-[17px] inline-block py-2 sm:py-[10px] text-[14px] tracking-wider font-bold  text-textbgcolor bg-bgcolored rounded-[6px] lg:w-full "
                }
              >
                <p className="text-[12px] font-bold flex items-center justify-center gap-[5px] ">
                  <i className=" ri-add-line text-xl font-bold "></i> New
                  Elements
                </p>
              </NavLink>
            </div>
          </div>
        </DashboardHeader>
      )}

      {/* card box */}
      {!isGetstartedPage && (
        <section className="pb-[177px]">
          <Container>
            <div className="grid gap-x-[25px] gap-y-[25px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
              {carddatabox.map((res, i) => (
                <Cardbox key={i} {...res} />
              ))}
            </div>
          </Container>
        </section>
      )}
      <Outlet />
    </>
  );
};

export default Incidents;
