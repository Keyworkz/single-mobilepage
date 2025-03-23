import React from "react";
import Navigation from "../views/Navigation";

export default function Header() {
  return (
    <header className="border-b p-3 flex justify-between items-center">
      <span className="font-bold">Mobile Magic</span>
      <Navigation />
    </header>
  );
}
