import { useState } from "react";
import { Container } from "../shearComponet/Container.jsx";
import { carddatabox } from "../../../lib/databox";
import { MsgBox } from "../shearComponet/MsgBox";
import { Searchbox } from "../shearComponet/Searchbox";
import { Button } from "../usecompo/Button";
import { Dashboardlogo } from "../shearComponet/Dashboardlogo";
import DashboardHeader from "../shearComponet/DashboardHeader";
import { Cardbox } from "../shearComponet/Cardbox";



const Dashboard = () => {
  // header scrolling color change event

  //   msg box methods
  const [isOpenmsgbox, setOpenmsgbox] = useState(false);

  const MsgBoxhandle = () => {
    setOpenmsgbox((pre) => {
      return !pre;
    });
  };

  return (
    <>
      {/* header section */}
      <DashboardHeader>
        <Dashboardlogo sapntext={"Welcome back"} dashboardtext={"Dashboard"} />
        <div className="grid gap-[14px] grid-cols-2 md:grid-cols-3">
          <Searchbox
            placetext={"Search incident"}
            className={"col-span-2 md:col-span-1"}
          />
          <Button
            className={
              "bg-textbgcolor dark:bg-darkcofeecolor  py-[8px] sm:py-[10px] dark:border-darkgreencolor text-textsecondarycolor btn-border"
            }
          >
            Sort By: Date modified
          </Button>
          <Button
            className={"dark:bg-darkgreencolor   dark:text-darktextdipcolor"}
          >
            Cypher AI
          </Button>
        </div>
      </DashboardHeader>

      {/* card seaction */}

      <section className=" md:pb-[60px] pb-[170px]">
        <Container>
          <div className="grid gap-x-[25px] gap-y-[25px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
            {carddatabox.map((res, i) => (
              <Cardbox key={i} {...res} />
            ))}
          </div>
        </Container>
      </section>

      <Container className={"relative py-0  flex"}>
        {isOpenmsgbox && (
          <MsgBox className={"absolute bottom-0 right-3 lg:right-10 w-full"} />
        )}
        <br />
        <button
          onClick={MsgBoxhandle}
          className={`${
            isOpenmsgbox
              ? "bg-white close-shadow  dark:bg-darktextdipcolor !px-[10px] flex items-center justify-center  md:!px-[20px]  md:!py-[20px]"
              : "bg-bgcolored"
          } bg-bgcolored rounded-full dark:bg-darkgreencolor absolute -bottom-24 right-[30px] py-[16px] ps-[22px] pe-[16px] md:py-[19px] p md:px-[28px]`}
        >
          {isOpenmsgbox ? (
            <img src="img/close.png" className="w-[70%] md:w-full " alt="" />
          ) : (
            <img src="img/C.png" className="w-[70%] md:w-full" alt="" />
          )}
        </button>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Dashboard;
