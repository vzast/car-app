import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../multilanguage/i18";

const ServicesContainer = styled(Container)`
  margin-top: 15rem;
`;

const CardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: #fff;
  padding: 15px;
  width: 100%;
  max-width: 300px;
  height: 280px;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

const CardTitle = styled.h2`
  text-align: center;
  font-size: 1.25rem;
  margin: 10px 0;
  color: #333;
`;

const CardInfo = styled(motion.div)`
  text-align: center;
  font-size: 0.9rem;
  margin-top: 10px;
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: calc(100% - 20px);
  opacity: 0;
  transition: opacity 0.4s ease;
`;

const FilterButton = styled(motion.button)<{ isActive: boolean }>`
  background-color: ${(props) => (props.isActive ? "#007bff" : "#6c757d")};
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.isActive ? "#0056b3" : "#5a6268")};
  }
`;

const containerVariants = {
  hidden: { opacity: 0, transition: { staggerChildren: 0.1 } },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
};

const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95, transition: { duration: 0.2 } },
};

type Development = "All" | "IT" | "Building";

interface Card {
  id: number;
  name: string;
  info: string;
  img: string;
  development: Development;
}

interface CardObject {
  cards: Card[];
}

type CardData = Record<string, CardObject>;

const Services: React.FC = () => {
  const { t } = useTranslation();
  const [cards, setCards] = useState<CardData>({});
  const [filteredCards, setFilteredCards] = useState<CardData>({});
  const [development, setDevelopment] = useState<Development>("All");
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);

  const fetchCards = useCallback(async () => {
    try {
      const response = await fetch("/car-app/companyService.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: CardData = await response.json();
      setCards(data);
      setFilteredCards(data);
    } catch (error) {
      console.error("Failed to fetch cards:", error);
    }
  }, []);

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  useEffect(() => {
    setFilteredCards(
      development === "All"
        ? cards
        : {
            ...cards,
            [i18n.language]: {
              cards: cards[i18n.language].cards.filter((card) => {
                return card.development === t(`Filters.${development}`);
              }),
            },
          }
    );
  }, [development, cards, t]);

  const handleFilterChange = (filter: Development) => {
    setDevelopment(filter);
  };

  const FILTERS: Development[] = ["All", "IT", "Building"];

  return (
    <ServicesContainer>
      <h1 className="text-center mb-4">{t("servicesTitle")}</h1>
      <div className="text-center mb-4">
        {FILTERS.map((filter) => (
          <FilterButton
            key={filter}
            isActive={development === filter}
            onClick={() => handleFilterChange(filter)}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {t(`Filters.${filter}`)}
          </FilterButton>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={development}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
          transition={{ duration: 0.2 }}
          layout
        >
          <Row className="justify-content-center">
            {filteredCards?.[i18n?.language]?.cards?.map((card) => (
              <Col
                key={card.id}
                xs={12}
                sm={8}
                md={6}
                lg={3}
                className="d-flex justify-content-center mb-4"
              >
                <CardContainer
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.05, delay: card.id * 0.05 }}
                  onMouseEnter={() => setHoveredCardId(card.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                >
                  <Link
                    to={`/service/${card.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <img src={card.img} alt={card.name} />
                    <CardTitle>{card.name}</CardTitle>
                    <AnimatePresence>
                      {hoveredCardId === card.id && (
                        <CardInfo
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          {card.info}
                        </CardInfo>
                      )}
                    </AnimatePresence>
                  </Link>
                </CardContainer>
              </Col>
            ))}
          </Row>
        </motion.div>
      </AnimatePresence>
    </ServicesContainer>
  );
};

export default Services;
