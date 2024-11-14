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
          <a href="https://www.instagram.com/totaltech.company/profilecard/?igsh=MXUyazF6bTduNGtx">
            <i className="fab fa-instagram" style={{ fontSize: "20px" }}></i>
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@totaltech.company?_r=1&_d=secCgYIASAHKAESPgo88%2F3TxT344WHHmGvo9IFOYqytxXU66%2BC7eamvkZkFPDNEqwa5cX1REHfFo5TMyb9NURe14HLMOb1mDP7TGgA%3D&checksum=1cf5a7be284823d942a4ed05072bdd3ffd81661f543f65ff9f4bfd5105454e58&sec_uid=MS4wLjABAAAAY12aR4NIFGh0BWgAp78wbHM9sozWlwud0H01uyQz0bKHkr7GdZMADSj9w2J9S0Ry&sec_user_id=MS4wLjABAAAAY12aR4NIFGh0BWgAp78wbHM9sozWlwud0H01uyQz0bKHkr7GdZMADSj9w2J9S0Ry&share_app_id=1233&share_author_id=7417520244019381255&share_link_id=002206AF-2BFB-4247-8CAE-FA231F68D572&sharer_language=en&social_share_type=4&source=h5_m&timestamp=1731581189&tt_from=copy&u_code=egakb9bm0i430h&ug_btm=b8727%2Cb0&user_id=7417520244019381255&utm_campaign=client_share&utm_medium=ios&utm_source=copy">
            <i className="fab fa-tiktok" style={{ fontSize: "20px" }}></i>
          </a>
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
