import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Container } from "../shearComponet/Container";
import { Logo } from "../shearComponet/Logo";

import { navbaritems } from "../../../lib/databox";
import { Active } from "../ShearComponet/icon";
import { Mobilemenu } from "../ShearComponet/Mobilemenu";
import { useState } from "react";

const Navbar = () => {
  const [isnavActive, setnavActive] = useState(false);
  const MenuBarHandle = () => {
    setnavActive((pre) => !pre);
  };
  return (
    <>
      <section className="bg-headerbg border-b border-bordercolor">
        <Container className={"py-0 pt-[7px]"}>
          <header className="flex items-center justify-between py-[18px]">
            {/* logo div */}
            <a href="#">
              <Logo />
            </a>

            {/* nav list div */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-x-[35px]">
                {navbaritems.map((res, i) => (
                  <li
                    key={i}
                    className="text-sm font-normal text-navlinkcolor hover:text-textsecondarycolor"
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
              </ul>
            </nav>

            {/* profile info div */}
            <div className="flex items-center gap-x-[9px]">
              <button className="lg:hidden block" onClick={MenuBarHandle}>
                <i className="ri-menu-line text-sm sm:text-lg p-[8px] md:p-[10px] rounded-full bg-textbgcolor font-bold text-textsecondarycolor"></i>
              </button>
              {/* acive icon div */}
              <div className=" cursor-pointer relative inline-block rounded-full px-[7px] py-[8px] bg-textbgcolor">
                <span className="size-2 md:size-[10px] bg-[#4ADE80] absolute top-0 right-0 btn-border rounded-full"></span>
                <Active className={"md:size-6 size-4  size-[19px]"} />
              </div>
              {/* profile div */}
              <div className="flex items-center gap-x-[9px]">
                <img
                  src="img/profile.png"
                  className="md:size-10 size-8 sm:size-9 object-cover rounded-full"
                  alt="profile-img"
                />
                <div className="flex flex-wrap">
                  <h4 className="text-[#A1A1AA] text-sm md:text-base font-semibold">
                    Usman Zafar
                  </h4>
                  <p className="text-wrap text-[#A1A1AA] text-[10px] sm:text-[12px] md:text-sm">
                    usmanzafar@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </header>
        </Container>
        {isnavActive && <Mobilemenu toggler={MenuBarHandle} />}
      </section>
      <Outlet />
    </>
  );
};

export default Navbar;
