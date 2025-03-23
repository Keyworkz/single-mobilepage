import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBook,
  faEnvelope,
  faHouse,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Navigation() {
  // Lets give it some state to click
  const [showMenu, setShowMenu] = useState(false);

  // create a var for conditional state rendering
  let menu;
  // create a menu mask to provide a transparent bg-color
  let menuMask;

  // This is called conditional rendering
  if (showMenu) {
    menu = (
      <div className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow">
        <span className="text-3xl font-bold p-3">The Menu</span>
        <ul className="font-bold p-3">
          <li>
            <Link
              to="/"
              className="text-orange-500"
              onClick={() => setShowMenu(false)}
            >
              <FontAwesomeIcon icon={faHouse} size="xs" />
              &nbsp; Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-orange-500"
              onClick={() => setShowMenu(false)}
            >
              <FontAwesomeIcon icon={faBook} size="xs" />
              &nbsp; About Us
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-orange-500"
              onClick={() => setShowMenu(false)}
            >
              <FontAwesomeIcon icon={faToolbox} size="xs" />
              &nbsp; Our Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-orange-500"
              onClick={() => setShowMenu(false)}
            >
              <FontAwesomeIcon icon={faEnvelope} size="xs" />
              &nbsp; Contact Us
            </Link>
          </li>
        </ul>
      </div>
    );

    menuMask = (
      <div
        className="bg-black fixed top-0 left-0 w-full h-full z-50"
        onClick={() => setShowMenu(false)}
      ></div>
    );
  }

  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>
      {menuMask}
      {menu}
    </nav>
  );
}
