import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Card = styled(motion.div)`
  margin: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
  padding: 50px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-10px);
  }
`;

const CardImage = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 8px;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

interface ServiceCardProps {
  id: number;
  title: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, image }) => {
  return (
    <StyledLink to={`/service/${id}`}>
      <Card
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.05 }}
      >
        <CardImage src={image} alt={title} />
        <CardContent>
          <CardTitle>{title}</CardTitle>
        </CardContent>
      </Card>
    </StyledLink>
  );
};

export default ServiceCard;
