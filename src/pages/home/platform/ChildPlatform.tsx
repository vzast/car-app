import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

interface Button {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
}

interface ChildPlatformProps {
  output: Button | null;
}

const ImageWrapper = styled(motion.div)`
  display: flex;
  height: 100%;
  overflow: hidden;
`;

const TextWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 20px;
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0 0 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const imageVariants = {
  hidden: { opacity: 0, x: -200 },
  visible: { opacity: 1, x: 0 },
};

const textVariants = {
  hidden: { opacity: 0, y: 120 },
  visible: { opacity: 1, y: 0 },
};

const ChildPlatform: React.FC<ChildPlatformProps> = ({ output }) => {
  if (!output) return null;

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <ImageWrapper
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            transition={{ duration: 0.5 }}
          >
            <StyledImage src={output.imageUrl} alt={output.name} />
          </ImageWrapper>
        </div>
        <div className="col-md-6">
          <TextWrapper
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.6 }}
          >
            <Title>{output.name}</Title>
            <Description>{output.description}</Description>
          </TextWrapper>
        </div>
      </div>
    </div>
  );
};

export default ChildPlatform;
