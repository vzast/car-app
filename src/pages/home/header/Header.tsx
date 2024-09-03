import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

interface HeaderChar {
  char: string;
  delay: number;
}

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [headerChars, setHeaderChars] = useState<HeaderChar[]>([]);
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    const text = t("Welcome To Architech");
    const chars = text.split("").map((char, i) => ({
      char,
      delay: i * 0.05,
    }));
    setHeaderChars(chars);
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
              <motion.span
                key={index}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay }}
                onAnimationComplete={() => {
                  if (index === headerChars.length - 1) {
                    handleAnimationComplete();
                  }
                }}
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "#333",
                  marginRight: char === " " ? "0.5rem" : "0", // Add space between words
                }}
              >
                {char}
              </motion.span>
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
