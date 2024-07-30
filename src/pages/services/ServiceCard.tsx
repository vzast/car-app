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
  display:'flex
  &:hover {
    transform: translateY(-10px);
  }
`;

const CardImage = styled.img`
  object-fit: cover;
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
  color: inherit;
`;
interface ServiceCardProps {
  service: {
    id: number;
    name: string;
    img: string;
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => (
  <StyledLink to={`/service/${service.id}`}>
    <Card
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <CardImage src={service.img} alt={service.name} />
      <CardContent>
        <CardTitle>{service.name}</CardTitle>
      </CardContent>
    </Card>
  </StyledLink>
);

export default ServiceCard;
