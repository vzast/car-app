import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  position: relative;
  overflow: hidden;
  margin: 20px auto;
  margin-top: 150px;
`;

const Icon = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 100px;
  height: 100px;
  opacity: 0.9;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    transform: scale(1.15);
    opacity: 1;
  }
`;

const TextContent = styled.div`
  text-align: center;
  color: #fff;
  max-width: 700px;

  h1 {
    font-size: 36px;
    margin-bottom: 20px;
    font-weight: 800;
    letter-spacing: 0.5px;
  }

  h2 {
    font-size: 26px;
    margin-bottom: 20px;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  p {
    font-size: 20px;
    line-height: 1.8;
    margin: 0;
    padding: 0;
  }
`;

const Info: React.FC = () => {
  return (
    <Container>
      <Icon
        src="https://cdn-icons-png.flaticon.com/128/10061/10061737.png"
        alt="Info Icon"
      />
      <TextContent>
        <h1>Information Title</h1>
        <h2>Subtitle</h2>
        <p>
          This section provides detailed information about the topic. Expand on
          the context or details to offer a comprehensive overview.
        </p>
      </TextContent>
    </Container>
  );
};

export default Info;
