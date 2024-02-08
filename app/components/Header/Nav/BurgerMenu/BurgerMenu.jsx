"use client";
import { useState, useEffect } from "react";
import "./BurgerMenu.scss"; // Assume you have this CSS file for styling
import useMountTransition from "./useMountTransition";
import Link from "next/link";

export default function BurgerMenu({ links }) {
  console.log(links);
  const [isOpen, setIsOpen] = useState(false);
  const hasTransitionedIn = useMountTransition(isOpen, 1000);

  const toggleMenu = (e) => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("fixed-page");
    } else {
      document.body.classList.remove("fixed-page");
    }
  }, [isOpen]);

  return (
    <>
      <button
        className={`burger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Open the menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {(hasTransitionedIn || isOpen) && (
        <nav className={`navLinks${isOpen ? "" : " fade-out"} `}>
          <ul>
            {links.map((link) => (
              <li key={link.node.id}>
                <Link
                  onClick={(e) => setIsOpen(false)}
                  href={`${link.node.uri}`}
                >
                  {link.node.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
