import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Info from './Info';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  margin-top: 150px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const Col = styled.div`
  flex: 1 1 300px;
  max-width: 300px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 1rem;
  text-align: center;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #555;
`;

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Info />
      <Row>
        <Col>
          <Card>
            <CardImage
              src="https://via.placeholder.com/300"
              alt={t("Our Mission")}
            />
            <CardBody>
              <CardTitle>{t("Our Mission")}</CardTitle>
              <CardText>
                {t("Our mission is to deliver top-notch services and products that exceed customer expectations. We aim to lead the industry through innovation and dedication.")}
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardImage
              src="https://via.placeholder.com/300"
              alt={t("Our Vision")}
            />
            <CardBody>
              <CardTitle>{t("Our Vision")}</CardTitle>
              <CardText>
                {t("We envision a future where our solutions revolutionize the industry, making a significant impact on our customers' lives and businesses.")}
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardImage
              src="https://via.placeholder.com/300"
              alt={t("Our Values")}
            />
            <CardBody>
              <CardTitle>{t("Our Values")}</CardTitle>
              <CardText>
                {t("Integrity, innovation, and customer-centricity are the core values that drive our company forward. We believe in fostering a culture of trust and excellence.")}
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardImage
              src="https://via.placeholder.com/300"
              alt={t("Our Team")}
            />
            <CardBody>
              <CardTitle>{t("Our Team")}</CardTitle>
              <CardText>
                {t("Our team is composed of dedicated professionals committed to achieving excellence and delivering unparalleled service.")}
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardImage
              src="https://via.placeholder.com/300"
              alt={t("Our History")}
            />
            <CardBody>
              <CardTitle>{t("Our History")}</CardTitle>
              <CardText>
                {t("With a rich history of success and innovation, our company has consistently been at the forefront of industry advancements.")}
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardImage
              src="https://via.placeholder.com/300"
              alt={t("Our Impact")}
            />
            <CardBody>
              <CardTitle>{t("Our Impact")}</CardTitle>
              <CardText>
                {t("Our impact is seen in the lives and businesses of our customers, as we strive to make a positive difference every day.")}
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
