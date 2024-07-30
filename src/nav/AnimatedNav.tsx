import React from "react";
import { motion, MotionValue } from "framer-motion";
import NavElements from "./NavElements";

interface AnimatedNavProps {
  opacitySecond: MotionValue<number>;
}

const AnimatedNav: React.FC<AnimatedNavProps> = ({ opacitySecond }) => {
  const [pointerEvents, setPointerEvents] = React.useState<"none" | "auto">(
    "none"
  );

  React.useEffect(() => {
    const unsubscribe = opacitySecond.onChange((value) => {
      setPointerEvents(value > 0 ? "auto" : "none");
    });
    return () => unsubscribe();
  }, [opacitySecond]);

  return (
    <motion.nav
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: opacitySecond,
        backgroundColor: "whiteSmoke",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1,
        paddingTop: "10px",
        gap: "50px",
        pointerEvents,
      }}
    >
      <img
        style={{
          width: "50px",
          marginBottom: "10px",
          pointerEvents: "none",
          marginRight: "300px",
        }}
        src="https://cdn-icons-png.flaticon.com/128/1023/1023757.png"
        alt="nav-icon"
      />
      <NavElements />
    </motion.nav>
  );
};

export default AnimatedNav;
