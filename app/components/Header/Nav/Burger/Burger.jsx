"use client";
import "./Burger.scss";
const Burger = ({ isOpen, onClick }) => {
  console.log(onClick);
  return (
    <button className="burger" aria-label="Open the menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default Burger;
