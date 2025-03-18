import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import Logo from "../logo/Logo.jsx";

const Header = () => {
  const [t] = useTranslation();

  return (
    <header className="fixed top-0 z-1 w-full p-[20px]">
      <nav>
        <ul className="flex flex-row justify-between">
          <li>
            <Logo />
          </li>
          <div className="flex flex-row items-stretch justify-center gap-[50px] font-medium invert">
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
