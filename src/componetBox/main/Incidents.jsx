import DashboardHeader from "../ShearComponet/DashboardHeader";
import { carddatabox } from "../../../lib/databox";
import { Container } from "../shearComponet/Container";
import { Cardbox } from "../ShearComponet/Cardbox";
import { NavLink, Outlet, useLocation } from "react-router-dom";
const Incidents = () => {
  const location = useLocation();
  const isGetstartedPage = location.pathname.includes("getstarted");
  return (
    <>
      {/* dashboard header component */}
      {!isGetstartedPage && (
        <DashboardHeader
          subtext={"Home - Incidents"}
          logoname={"Incidents"}
          btntext={
            <NavLink to="getstarted">
              <p className="text-[12px] font-bold flex items-center justify-center gap-[5px] "><i className=" ri-add-line text-xl font-bold "></i> New Element</p>
            </NavLink>
          }
        />
      )}

      {/* card box */}
      {!isGetstartedPage && (
        <section className="lg:pt-52 md:pt-56 pt-72 pb-[177px]">
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
