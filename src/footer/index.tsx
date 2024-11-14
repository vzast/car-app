import React from "react";
import { useTranslation } from "react-i18next";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const footerStyle: React.CSSProperties = {
    backgroundColor: "#343a40",
    color: "#ffffff",
    padding: "60px 0",
    marginTop: "150px",
  };

 

  const footerHeadingStyle: React.CSSProperties = {
    color: "#ffffff",
    marginBottom: "20px",
  };

  const contactInfoStyle: React.CSSProperties = {
    margin: "0",
  };

  

  const currentYear = new Date().getFullYear();
  return (
    <footer style={footerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5 style={footerHeadingStyle}>{t("Company")}</h5>
            <p>
              {t(
                "Leading the industry with innovative tech solutions and exceptional service."
              )}
            </p>
          </div>
          <div className="col-md-3">
            <h5 style={footerHeadingStyle}>{t("Services")}</h5>
            <p>
              {t(
                "Offering web development, app creation, SEO, consulting, and more."
              )}
            </p>
          </div>
          <div className="col-md-3">
            <h5 style={footerHeadingStyle}>{t("Contact")}</h5>

            <p style={contactInfoStyle}>
              <i className="fas fa-phone"></i> {t("595850777")}
            </p>
            <p style={contactInfoStyle}>
              <i className="fas fa-envelope"></i>{" "}
              {t("totaltech.companyinfo@gmail.com")}
            </p>
          </div>
          <div className="col-md-3">
            <h5 style={footerHeadingStyle}>{t("Follow Us")}</h5>
            <p>{t("Connect with us on social media for updates and news.")}</p>
            
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <p>
              &copy; {currentYear} {t("Your Company")}.{" "}
              {t("All rights reserved.")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
