import React from "react";
import { useTransform, motion, useScroll } from "framer-motion";
import NavElements from "./NavElements";
import AnimatedNav from "./AnimatedNav";

const NoneResponsiveNav: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [20, 150], [1, 0]);
  const opacitySecond = useTransform(scrollY, [150, 300], [0, 1]);

  const iconStyle = {
    fontSize: "20px",
    marginRight: "10px",
    color: "#333",
    transition: "color 0.3s",
  };

  return (
    <>
      <motion.nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "1rem",
          gap: "10px",
          opacity,
        }}
      >
        <img
          style={{ width: "90px", marginBottom: "20px", pointerEvents: "none" }}
          src="https://cdn-icons-png.flaticon.com/128/1023/1023757.png"
          alt="nav-icon"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ul
            style={{
              display: "flex",
              gap: "30px",
              listStyleType: "none",
              justifyContent: "space-evenly",
              padding: 0,
              margin: 0,
            }}
          >
            <li>
              ტელეფონის ნომრები
              <div>888-333-111</div>
            </li>
            <li>
              სამუშაო საათები
              <div>24/7</div>
            </li>
            <li  >
              სოციალური ქსელები
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <i className="fab fa-facebook-f" style={iconStyle}></i>
                <i className="fab fa-instagram" style={iconStyle}></i>
                <i className="fab fa-tiktok" style={iconStyle}></i>
              </div>
            </li>
          </ul>
          <NavElements />
        </div>
      </motion.nav>
      <AnimatedNav opacitySecond={opacitySecond} />
    </>
  );
};

export default NoneResponsiveNav;
