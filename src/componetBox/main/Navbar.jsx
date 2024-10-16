import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Container } from "../shearComponet/Container";
import { Logo } from "../shearComponet/Logo";

import { navbaritems } from "../../../lib/databox";
import { Active } from "../ShearComponet/icon";
import { Mobilemenu } from "../ShearComponet/Mobilemenu";
import { DarkToggler } from "../ShearComponet/DarkToggler";
import { Mobileuserditailse } from "../ShearComponet/Mobileuserdetail";
import { useEffect, useState } from "react";

const Navbar = () => {
  // mobile menu bar state
  const [isnavActive, setnavActive] = useState(false);
  const MenuBarHandle = () => {
    setnavActive((pre) => !pre);
  };
  //user profile detail state
  const [userBox, setUserbox] = useState(false);
  const userBoxHandle = () => setUserbox(!userBox);

  // dark mode state
  const [theme, settheme] = useState(localStorage.getItem("theme") || "light");

  const handletheme = (e) => {
    settheme(e.target.checked ? "dark" : "light");
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Scroll state for the navbar background
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section
        className={`${
          isScrolled ? "bg-textbgcolor" : "bg-headerbg"
        } bg-headerbg border-b fixed left-0 right-0 top-0  z-[1200] border-bordercolor dark:bg-darkbgcolor`}
      >
        <Container className={"py-0 pt-[7px]"}>
          <header className="flex items-center   py-[18px]">
            {/* logo div */}
            <a href="#">
              <Logo />
            </a>

            {/* nav list div */}
            <nav className="hidden lg:block mx-auto">
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
            <div className=" flex ms-auto lg:ms-0  items-center gap-x-[9px]">
              {/* acive icon div */}
              <button className="lg:hidden block " onClick={MenuBarHandle}>
                <i className="ri-menu-line btn-border dark:border-darkgreencolor text-sm sm:text-lg p-[8px] md:p-[10px] rounded-full bg-textbgcolor dark:bg-darkcofeecolor font-bold text-textsecondarycolor"></i>
              </button>

              {/* dark theme toggler btn */}

              <DarkToggler
                onClick={handletheme}
                checked={theme === "light" ? false : true}
              />
              {/* profile div */}
              <div className=" cursor-pointer relative inline-block rounded-full px-[7px] py-[8px] bg-textbgcolor btn-border dark:border-darkgreencolor dark:bg-darkcofeecolor">
                <span className="size-2 md:size-[10px] bg-[#4ADE80] absolute top-0 right-0 btn-border rounded-full"></span>
                <Active
                  className={"md:size-6 size-4  dark:text-darktextdipcolor"}
                />
              </div>
              <img
                src="img/profile.png"
                className="md:size-10 size-8 sm:size-9 object-cover rounded-full"
                alt="profile-img"
                onClick={userBoxHandle}
              />
              {/* profile detail box */}
              <div className="hidden sm:block">
                <h4 className="text-[#A1A1AA] text-sm md:text-base font-semibold">
                  Usman Zafar
                </h4>
                <p className=" text-[#A1A1AA] text-[10px] sm:text-[12px] md:text-sm">
                  usmanzafar@gmail.com
                </p>
              </div>
            </div>

            {/* user detail box */}
            {userBox && <Mobileuserditailse remover={userBoxHandle} />}
          </header>
        </Container>
        {isnavActive && <Mobilemenu toggler={MenuBarHandle} />}
      </section>
      <Outlet />
    </>
  );
};

export default Navbar;
