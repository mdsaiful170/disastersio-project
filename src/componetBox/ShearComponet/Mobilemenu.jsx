import { navbaritems } from "../../../lib/databox";
import { NavLink } from "react-router-dom";
import { Logo } from "./Logo.jsx";

// ##########################
// mobile menu bar component
// ##########################

export const Mobilemenu = ({ toggler }) => {
  return (
    <>
      <div className="absolute top-0 left-0 right-0 !overflow-y-hidden max-w-[80%] w-full lg:hidden block min-h-screen z-50 bg-textbgcolor dark:bg-darkbgcolor px-5 pt-6">
        <div className="flex items-center justify-between">
          <Logo />
          <i
            onClick={toggler}
            className="cursor-pointer dark:text-darktextdipcolor ri-close-line font-bold text-[28px] cursp text-textblackcolor"
          ></i>
        </div>

        <div className="pt-5">
          {navbaritems.map((res, i) => (
            <li
              key={i}
              className="list-none mt-4 text-sm font-normal text-navlinkcolor hover:text-textsecondarycolor"
            >
              <NavLink
                onClick={toggler}
                to={res.herf}
                className={({ isActive }) =>
                  isActive ? "text-active " : "text-textsecondarycolor relative"
                }
              >
                {res.navtext}
              </NavLink>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};
