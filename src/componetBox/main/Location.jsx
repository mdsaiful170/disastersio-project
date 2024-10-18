import { Button } from "../ShearComponet/Button";
import DashboardHeader from "../ShearComponet/DashboardHeader";
import { Dashboardlogo } from "../ShearComponet/Dashboardlogo";
import { Searchbox } from "../ShearComponet/Searchbox";
import { Container } from "../ShearComponet/Container";

import {
  LocationActivityeCarddata,
  LocationCarddata,
  LocationDocumentCarddata,
} from "../../../lib/databox";
import { useNavigate } from "react-router-dom";
import {
  Horizontalline,
  LocationActiveDocumentCard,
  LocationArticlebox,
  LocationCardbox,
  LocationCostbox,
  LocationMap,
} from "../ShearComponet/Locationcomponet";

// ##########################
//   Location page
// ##########################

const Location = () => {
  const navigate = useNavigate();
  const BakchomePageHandle = () => {
    navigate("/");
  };
  return (
    <>
      <DashboardHeader>
        <Dashboardlogo
          sapntext={"Incidents - DR-4699 March 2023 Severe Storms "}
          dashboardtext={
            <div className="flex items-start gap-3">
              <img
                className="size-6 object-cover dark:filter dark:brightness-50  dark:invert"
                src="/img/tree.png"
                alt=""
              />
              DR-4699 March 2023 Severe Storms
            </div>
          }
          styletext={"lg:text-[26px]"}
        />
        <div className="grid gap-[14px] grid-cols-2 md:grid-cols-3">
          <Searchbox
            placetext={"Search incident"}
            className={"col-span-2 md:col-span-1 "}
          />
          <Button
            className={
              "bg-textbgcolor dark:bg-darkcofeecolor py-1 sm:py-[10px] dark:border-darkgreencolor text-textsecondarycolor btn-border"
            }
          >
            <span className="text-textsecondarycolor/75 dark:text-darktextdipcolor/75">
              Sort By
            </span>
            : Date modified
          </Button>
          <Button
            click={BakchomePageHandle}
            className={
              "dark:bg-darkgreencolor  dark:text-darktextdipcolor flex items-center justify-center gap-1"
            }
          >
            <i className="ri-add-line text-base font-bold"></i> New Elements
          </Button>
        </div>
      </DashboardHeader>

      <section className="pb-[177px]">
        <Container>
          <div className="grid grid-cols-12 place-content-center lg:place-items-start xl:gap-92 lg:gap-[75px] mx-auto  md:gap-16">
            {/* contetnbox */}
            <section className="col-span-12 lg:col-span-7 ">
              <div>
                {/* location and cost box */}
                <LocationCostbox
                  img={"/img/locationimg.png"}
                  subtitle={"Location"}
                  title={"Tulare County,  Los Angles, CA 23415"}
                />
                <LocationCostbox
                  className={" pt-6 lg:pt-[35px] xl:pt-[45px]"}
                  img={"/img/locationimg.png"}
                  subtitle={"Approx. Cost:"}
                  title={"$60,607,456.00"}
                />
              </div>

              {/* horizontal line */}
              <Horizontalline />

              {/* articale box */}
              <div>
                <LocationArticlebox
                  title={"Description"}
                  des={
                    "Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho"
                  }
                />
              </div>

              {/* horizontal line */}
              <Horizontalline />

              <div>
                <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-4 grid-cols-1">
                  {LocationCarddata.map((res, i) => (
                    <LocationCardbox key={i} {...res} />
                  ))}
                </div>
              </div>

              {/* horizontal line */}
              <Horizontalline />

              {/* Activities card box*/}
              <div>
                <div className="flex items-center justify-between pb-4">
                  <h3 className="text-sm font-bold text-textblackcolor dark:text-darktextdipcolor">
                    Activities
                  </h3>
                  <a
                    href="#"
                    className="text-sm text-[#0A0A0A] font-normal underline dark:text-darktextcolor hover:text-textblackcolor dark:hover:text-darktextdipcolor"
                  >
                    See all
                  </a>
                </div>
                <div>
                  {LocationActivityeCarddata.map((res) => (
                    <LocationActiveDocumentCard
                      className={"mb-4"}
                      key={res.id}
                      {...res}
                    />
                  ))}
                </div>
              </div>

              {/* horizontal line */}
              <Horizontalline />

              {/* documents card box*/}
              <div>
                <div className="flex items-center justify-between pb-4">
                  <h3 className="text-sm font-bold text-textblackcolor dark:text-darktextdipcolor">
                    Documnets
                  </h3>
                  <a
                    href="#"
                    className="text-sm text-[#0A0A0A] font-normal underline dark:text-darktextcolor hover:text-textblackcolor dark:hover:text-darktextdipcolor"
                  >
                    See all
                  </a>
                </div>
                <div>
                  {LocationDocumentCarddata.map((res) => (
                    <LocationActiveDocumentCard
                      className={"mb-4"}
                      key={res.id}
                      {...res}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* map */}
            <section className="col-span-12  lg:col-span-5">
              <div>
                <LocationMap
                  subtitle={"Incident Map"}
                  subtitle2={
                    "Start 19.1232, -118.233     End 19.3245, -119.2323"
                  }
                />
              </div>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Location;
