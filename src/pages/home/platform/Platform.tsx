import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ChildPlatform from "./ChildPlatform";
import styled from "styled-components";

interface Button {
  id: number;
  name: string;
  img: string;
  imageUrl: string;
  description: string;
}

const Container = styled.div`
  padding: 20px;
  margin-top: 150px;
`;

const ButtonCard = styled.div<{
  isSelected: boolean;
  isDisabled: boolean;
}>`
  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};
  border: ${(props) =>
    props.isSelected ? "2px solid black" : "2px solid transparent"};
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  text-align: center;
  flex: 1 1 auto;
  background: ${(props) => (props.isSelected ? "#f4f4f9" : "transparent")};
  transition: background 0.3s ease;

  &:hover {
    border-color: black;
    background: #f4f4f9;
  }
`;

const ButtonImage = styled.img`
  max-width: 100px;
  height: auto;
  margin-bottom: 10px;
`;

const Platform: React.FC = () => {
  const buttons: Button[] = [
    {
      id: 1,
      name: "name1",
      img: "https://cdn-icons-png.flaticon.com/128/10851/10851040.png",
      imageUrl:
        "https://securedroofingandsolar.com/wp-content/uploads/2024/02/solar-panels-wood-house.webp",
      description: "This is the description for button 1.",
    },
    {
      id: 2,
      name: "name2",
      img: "https://cdn-icons-png.flaticon.com/128/10276/10276295.png",
      imageUrl:
        "https://exbroit.com/wp-content/uploads/2023/12/Web-based-application-development-service-1200-x-800.jpg",
      description: "This is the description for button 2.",
    },
    {
      id: 3,
      name: "name3",
      img: "https://cdn-icons-png.flaticon.com/128/1973/1973100.png",
      imageUrl:
        "https://www.nydailynews.com/wp-content/uploads/migration/2014/10/30/5IPGIUARKG4UFZIOFJWEAOG7EY.jpg",
      description: "This is the description for button 3.",
    },
  ];

  const [selectedButton, setSelectedButton] = useState<Button | null>(
    buttons[0]
  );
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleCardClick = useCallback(
    (button: Button) => {
      if (!isAnimating) {
        setIsAnimating(true);
        setSelectedButton((prev) => (prev?.id === button.id ? null : button));
        setTimeout(() => setIsAnimating(false), 600);
      }
    },
    [isAnimating]
  );

  return (
    <Container className="container">
      <div className="d-flex flex-wrap justify-content-center">
        {buttons.map((button) => (
          <ButtonCard
            key={button.id}
            onClick={() => handleCardClick(button)}
            isSelected={selectedButton?.id === button.id}
            isDisabled={isAnimating}
          >
            <ButtonImage src={button.img} alt={button.name} loading="lazy" />
            <h1>{button.name}</h1>
          </ButtonCard>
        ))}
      </div>

      <AnimatePresence>
        {selectedButton && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChildPlatform key={selectedButton.id} output={selectedButton} />
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Platform;
