import { Logo } from "./Logo";
import { navbaritems } from "../../../lib/databox";
import { NavLink } from "react-router-dom";

export const Mobilemenu = ({ toggler }) => {
  return (
    <>
      <div className="absolute top-0 left-0 right-0 w-full lg:hidden block min-h-screen z-50 bg-textbgcolor p-10">
        <div className="flex items-center justify-between">
          <Logo />
          <i
            onClick={toggler}
            className="cursor-pointer ri-close-line font-bold text-2xl cursp text-textblackcolor"
          ></i>
        </div>

        <div className="pt-5">
          {navbaritems.map((res, i) => (
            <li
              key={i}
              className="list-none mt-2 text-sm font-normal text-navlinkcolor hover:text-textsecondarycolor"
            >
              <NavLink
                to={res.herf}
                className={({ isActive }) => {
                  isActive ? "text-active" : "text-textsecondarycolor";
                }}
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
