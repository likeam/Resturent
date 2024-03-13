import React from "react";
import { FaCaretDown, FaUser } from "react-icons/fa";

const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "About",
    link: "/#",
  },
  {
    id: 3,
    name: "Contact",
    link: "/#",
  },
];

const DropdwonLinks = [
  {
    id: 1,
    name: "Vegetables",
    link: "/#",
  },
  {
    id: 2,
    name: "Fruits",
    link: "/#",
  },
  {
    id: 3,
    name: "Grains",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="bg-white shadow-sm">
        <div className="container flex justify-between">
          <div className="text-3xl font-bold">Logo</div>
          <div>
            <ul className="flex items-center gap-10 py-4 sm:py-3">
              {NavLinks.map(({ id, name, link }) => (
                <li key={id} className="cursor-pointer group">
                  <a
                    href={link}
                    className="inline-block text-xl font-semibold hover:text-primary"
                  >
                    {name}
                  </a>
                </li>
              ))}
              <li className="flex cursor-pointer group ">
                <a
                  href="/#"
                  className="inline-block text-xl font-semibold hover:text-primary"
                >
                  <div className="flex items-center gap-[2px] py-2">
                    Categories
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 transi" />
                    </span>
                  </div>
                </a>
                <div className="absolute z-[9999] hidden group-hover:block w-[120px] bg-white text-black shadow-md p-2">
                  <ul>
                    {DropdwonLinks.map(({ id, name, link }) => (
                      <li key={id} className="cursor-pointer group">
                        <a
                          href={link}
                          className="inline-block text-xl font-semibold hover:text-primary"
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li>
                <button className="flex items-center justify-center gap-2 px-5 py-2 text-xl text-white h-[40px] bg-secondary hover:scale-105 duration-300">
                  <FaUser />
                  My Account
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
