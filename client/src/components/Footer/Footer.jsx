import { NavLink } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
    <p>@{new Date().getFullYear()} Yati Tech.com. All Rights Reserved</p>
    </footer>
  );
};
