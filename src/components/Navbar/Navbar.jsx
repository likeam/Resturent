import React from "react";
import { FaCaretDown } from "react-icons/fa";

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
          <div className="font-bold text-3xl">Logo</div>
          <div>
            <ul className="flex items-center gap-10 py-4 sm:py-3">
              {NavLinks.map(({ id, name, link }) => (
                <li key={id} className="group cursor-pointer">
                  <a
                    href={link}
                    className="inline-block hover:text-primary text-xl font-semibold"
                  >
                    {name}
                  </a>
                </li>
              ))}
              <li className="group cursor-pointer flex ">
                <a
                  href="/#"
                  className="inline-block hover:text-primary text-xl font-semibold"
                >
                  <div className="flex items-center gap-[2px] py-2">
                    Dropdwon
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 transi" />
                    </span>
                  </div>
                </a>
                <div className="absolute z-[9999] hidden group-hover:block w-[200px] bg-white text-black shadow-md p-2">
                  <ul>
                    {DropdwonLinks.map(({ id, name, link }) => (
                      <li key={id} className="group cursor-pointer">
                        <a
                          href={link}
                          className="inline-block hover:text-primary text-xl font-semibold"
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
