import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo.jsx";
import { useEffect, useState } from "react";

const Header = () => {
  const [color, setColor] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      setColor(window.pageYOffset > 200);
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [color]);

  return (
    <header
      className="t fixed top-0 z-2 w-full p-[20px] transition-colors duration-400 ease-in-out"
      style={color ? { backgroundColor: "rgba(0,0,0,0.9)" } : {}}
    >
      <nav>
        <ul className="flex flex-row justify-between">
          <li>
            <Logo />
          </li>
          <div className="flex flex-row items-stretch justify-center gap-[50px] text-xl font-medium invert">
            <li>
              <NavLink to="/" className="flex h-full items-center">
                Main
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="flex h-full items-center">
                Films
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="flex h-full items-center">
                Series
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="flex h-full items-center">
                New and popular
              </NavLink>
            </li>
          </div>
          <div className="flex flex-row items-center justify-center gap-[20px] invert">
            <li>
              <NavLink
                to="/movies"
                className="flex size-[44px] items-center justify-center rounded-full bg-black/10"
              >
                <svg className="size-[24px] fill-none stroke-black">
                  <use href="/icons.svg#icon-search"></use>
                </svg>
              </NavLink>
            </li>
            <li className="flex size-[44px] items-center justify-center rounded-full bg-black/10">
              <svg className="size-[24px] fill-none stroke-black">
                <use href="/icons.svg#icon-notification"></use>
              </svg>
            </li>
            <li>
              <svg className="size-[44px] fill-none stroke-black">
                <use href="/icons.svg#icon-user"></use>
              </svg>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
