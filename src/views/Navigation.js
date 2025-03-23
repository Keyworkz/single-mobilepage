import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
        Menu
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
