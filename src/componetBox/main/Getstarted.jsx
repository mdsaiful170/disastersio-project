import { Getstarteddata } from "../../../lib/databox";
import { Container } from "../ShearComponet/Container";

import { GetStartedcard } from "../ShearComponet/GetStartedcard";
import { NavLink, Outlet, useLocation } from "react-router-dom";
// ##########################
//   GetStarted page
// ##########################
const Getstarted = () => {
  const location = useLocation()
  const isNewincidentspage = location.pathname.includes("newincident")
  return (
    <>
    { !isNewincidentspage && (  <section className="pt-20 md:pt-28 pb-[177px]">
        <Container className={"max-w-[815px] mx-auto"}>
          <div className="md:max-w-[580px] max-w-[550px]  mx-auto text-center space-y-[14px] lg:max-w-[613px]">
            <h2 className="md:text-[26px] text-2xl font-bold text-textblackcolor dark:text-darktextdipcolor lg:text-[32px] ">
              Let’s get started
            </h2>
            <p className="max-w-[400px] mx-auto text-base font-normal text-textsecondarycolor dark:text-darktextcolor md:max-w-[468px] pt-[14px] leading-[26px] ">
              Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar
              sit general sac mascho werhoLorem ipsum dolar sit gene
            </p>
          </div>
          <div className="max-w-[598px] mx-auto z-10 h-[3px] bg-bordercolor dark:bg-darkgreencolor my-[46px] relative flex  items-center justify-between">
            <span className="block size-7 rounded-full bg-bordercolor dark:bg-darkgreencolor"></span>
            <span className="block size-7 rounded-full bg-bordercolor dark:bg-darkgreencolor"></span>
            <span className="block size-7 rounded-full bg-bordercolor dark:bg-darkgreencolor"></span>
          </div>
          <div>
            <div className="grid grid-cols-1 place-items-center items-start sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-[110px] ">
              {Getstarteddata.map((res, i) => (
                <GetStartedcard key={i} {...res} />
              ))}
            </div>
          </div>

         <div className="text-center">
         <NavLink
            to="newincident"
            className={"px-[25px] dark:bg-darkgreencolor dark:text-darktextdipcolor tracking-wider text-white rounded-[6px] text-[12px] font-bold bg-bgcolored  py-[17px]  inline-block mt-16 lg:mt-[85px]"}
          >
            Get started
          </NavLink>
         </div>
        </Container>
      </section>)}
      <Outlet />
    </>
  );
};

export default Getstarted;
