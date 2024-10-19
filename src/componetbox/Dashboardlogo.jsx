import {cn} from "../../lib/utilites/cn"
// ##########################
//   DashboardLog componet
// ##########################




//  dashboards sapn text
export const Sapntext = ({ className, children }) => (
  <span
    className={cn(
      " pb-[6px] text-[12px] font-normal text-textsecondarycolor dark:text-darktextcolor",
      className
    )}
  >
    {children}
  </span>
);

// dashbard logo heading text component
export const DashBoard = ({ className, children }) => (
  <h2
    className={cn(
      "text-xl md:text-[26px] leading-[25px] md:leading-[33px] text-textblackcolor font-bold",
      className
    )}
  >
    {children}
  </h2>
);

// dashboard logo text
export const Dashboardlogo = ({
  className,
  children,
  styletext,
  sapntext,
  dashboardtext,
}) => {
  return (
    <>
      <div className={cn("text-left flex flex-col ", className)}>
        <Sapntext>{sapntext}</Sapntext>
        <DashBoard className={styletext}>{dashboardtext}</DashBoard>
      </div>
    </>
  );
};
