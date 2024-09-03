import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

const ContactWrapper = styled.div`
  padding: 50px 0;
  text-align: center;

  h1 {
    margin-bottom: 20px;
    font-size: 2.5rem;
  }

  p {
    margin-bottom: 50px;
    font-size: 1rem;
    color: #6c757d;
  }

  .contact-info {
    background: #343a40;
    color: #fff;
    padding: 30px;
    margin: 10px 0;
    border-radius: 5px;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.5s forwards;
  }

  .contact-info:nth-child(1) {
    animation-delay: 0.1s;
  }

  .contact-info:nth-child(2) {
    animation-delay: 0.2s;
  }

  .contact-info:nth-child(3) {
    animation-delay: 0.3s;
  }

  .contact-info:nth-child(4) {
    animation-delay: 0.4s;
  }

  .contact-info:nth-child(5) {
    animation-delay: 0.5s;
  }

  .contact-info h4 {
    margin-bottom: 20px;
    font-size: 1.25rem;
  }

  .contact-info p {
    margin-bottom: 10px;
  }

  .contact-info a {
    color: #fff;
    text-decoration: none;
  }

  .contact-info a:hover {
    text-decoration: underline;
  }

  .contact-image {
    border-radius: 5px;
    width: 100%;
    height: auto;
    margin-top: 20px;
  }

  .map {
    width: 100%;
    height: 600px;
    margin-top: 20px;
    border-radius: 5px;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const center: LatLngExpression = [41.736228, 44.722072];
  
  return (
    <ContactWrapper>
      <Container>
        <h1>{t("Contact Us")}</h1>
        <p>{t("We align leaders around a shared purpose and strategic story that catalyzes their business and brand to take action.")}</p>
        <Row>
          <Col
            md={7}
            sm={12}
            className="d-flex align-items-center justify-content-center"
          >
            <img
              src="https://st3.depositphotos.com/9880800/18337/i/450/depositphotos_183377518-stock-photo-business.jpg"
              alt={t("Contact")}
              className="contact-image"
            />
          </Col>
          <Col md={5}>
            <Row>
              <Col md={12} className="contact-info">
                <h4>{t("Business Hours")}</h4>
                <p>{t("Monday - Friday: 9:00 AM - 5:00 PM")}</p>
                <p>{t("Saturday: 10:00 AM - 2:00 PM")}</p>
                <p>{t("Sunday: Closed")}</p>
              </Col>
              <Col md={12} className="contact-info">
                <h4>{t("Contact Information")}</h4>
                <p>{t("Email: info@company.com")}</p>
                <p>{t("Phone: +1 234 567 890")}</p>
                <p>{t("Address: 123 Business St, City, Country")}</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={12}>
            <div className="contact-info">
              <h4>{t("Our Location")}</h4>
              <div className="map">
                <MapContainer
                  center={center}
                  zoom={13}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={center}>
                    <Popup>{t("Destination Location")}</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </ContactWrapper>
  );
};

export default Contact;
