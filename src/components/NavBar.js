/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Logo from "../assets/logoopticauricolor.png";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/NavBar.css";

const navbar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="ladoizquierdomenu" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/">Inicio</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/productos">Promociones</Link>
          <Link to="/">Salud Visual</Link>
          <Link to="/nosotros">Contacto</Link>
        </div>
      </div>
      <div className="ladomediomenu">
        <Link to="/">Inicio</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/productos">Promociones</Link>
        <Link to="/">Salud Visual</Link>
        <Link to="/nosotros">Contacto</Link>

        <button onClick={toggleNavbar}>
          <MenuIcon />
        </button>
      </div>
    </div>
  );
};

export default navbar;
