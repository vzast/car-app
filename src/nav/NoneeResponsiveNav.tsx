import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import NavElements from "./NavElements";
import { useTranslation } from "react-i18next";

const NavbarContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  transition: transform 0.3s ease-in-out;
`;

const NavGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NavItems = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center; /* Align items vertically */
`;

const NoneResponsiveNav = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ge" : "en";
    i18n.changeLanguage(newLanguage);
  };

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [controlNavbar]);

  return (
    <NavbarContainer
      style={{
        transform: showNavbar ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <NavGroup>
        <img
          style={{ width: "120px", pointerEvents: "none" }}
          src="public/TOTALTECH Down.png"
          alt="nav-icon"
        />
        <NavElements />
      </NavGroup>
      <NavItems>
        <li>
          <a href="https://www.facebook.com/profile.php?id=61566252152735">
            <i className="fab fa-facebook-f" style={{ fontSize: "20px" }}></i>
          </a>
        </li>
        <li>
          <i className="fab fa-instagram" style={{ fontSize: "20px" }}></i>
        </li>
        <li>
          <i className="fab fa-tiktok" style={{ fontSize: "20px" }}></i>
        </li>
        <button
          style={{ marginTop: "-8px", cursor: "pointer" }}
          className={"btn btn-outline-primary"}
          onClick={toggleLanguage}
        >
          {i18n.language === "en" ? "ENG" : "GEO"}
        </button>
      </NavItems>
    </NavbarContainer>
  );
};

export default NoneResponsiveNav;
