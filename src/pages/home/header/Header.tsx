import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [showParagraph, setShowParagraph] = useState(false);

  const headerChars = useMemo(() => {
    const text = t("Welcome To Totaltech");
    return text.split("").map((char, i) => ({
      char,
      delay: i * 0.07, 
    }));
  }, [t]);

  const handleAnimationComplete = () => {
    setShowParagraph(true);
  };

  return (
    <div className="container-fluid" style={{ marginTop: "300px" }}>
      <div className="row text-center">
        <div className="col-lg-7 col-md-12 mb-4 d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex flex-wrap justify-content-center align-items-center">
            {headerChars.map(({ char, delay }, index) => (
              <motion.h1
                key={index}
                initial={{ opacity: 0, scale: 0.8, x: -100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 150,
                }}
                onAnimationComplete={() => {
                  if (index === headerChars.length - 1) {
                    handleAnimationComplete();
                  }
                }}
                style={{
                  fontWeight: "bold",
                  color: "#333",
                  marginRight: char === " " ? "0.8rem" : "0",
                }}
              >
                {char}
              </motion.h1>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: showParagraph ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              fontSize: "1.125rem",
              lineHeight: "1.6",
              color: "#555",
              marginTop: "1rem",
              maxWidth: "800px",
              textAlign: "center",
              fontFamily: "Arial, sans-serif",
            }}
          >
            აიტიკრაფტი არის აიტი სერვისების პროვაიდერი კომპანია, ჩვენს
            სერვისებში შედის აიტი აუთსორსინგი, აიტი ინფრასტრუქტურული
            გადაწყვეტილებები, მართვადი სერვისები და საკონსულტაციო მომსახურებები.
          </motion.p>
        </div>
        <div className="col-lg-5 col-md-12 d-flex justify-content-center">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="img-fluid rounded w-75"
            src="./header-photo.png"
            alt="about-header-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;