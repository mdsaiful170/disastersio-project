import { cn } from "../../../lib/utilites/cn";
//  dashboards sapn text
export const Sapntext = ({ className, children }) => (
  <span
    className={cn(
      " pb-[6px] text-base font-normal text-textsecondarycolor",
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
  sapntext,
  dashboardtext,
}) => {
  return (
    <>
      <div className={cn("text-left flex flex-col ", className)}>
        <Sapntext>{sapntext}</Sapntext>
        <DashBoard>{dashboardtext}</DashBoard>
      </div>
    </>
  );
};
