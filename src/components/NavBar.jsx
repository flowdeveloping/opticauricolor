/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import Logo from "../assets/logoopticauricolor.png";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/NavBar.css";

const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpenLinks(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navbar">
      <div className="ladoizquierdomenu" id={openLinks ? "open" : "close"}>
        {openLinks ? (
          <div className="hiddenLinks">
            <Link to="/">Inicio</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/productos">Productos</Link>
            <Link to="/promociones">Promociones</Link>
            <Link to="/saludvisual">Salud Visual</Link>
            <Link to="/contacto">Contacto</Link>
          </div>
        ) : (
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        )}
      </div>
      <div className="ladomediomenu">
        <Link to="/">Inicio</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/promociones">Promociones</Link>
        <Link to="/saludvisual">Salud Visual</Link>
        <Link to="/contacto">Contacto</Link>

        <button onClick={toggleNavbar}>
          <MenuIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
