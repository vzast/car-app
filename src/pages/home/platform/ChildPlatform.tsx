import React from "react";
import { Box, Typography, styled } from "@mui/material";
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

const ImageWrapper = styled(motion.div)(({ theme }) => ({
  display: "flex",
  overflow: "hidden",
  borderRadius: theme.shape.borderRadius,
}));

const StyledImage = styled("img")({
  width: "100%",
  maxWidth: 500,
  height: "auto",
});

const TextWrapper = styled(motion.div)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: theme.spacing(9),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  backgroundColor: theme.palette.background.paper, 
}));

const Container = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(5),
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  backgroundColor: theme.palette.background.default,
}));

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
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ flex: 1, marginRight: { md: 2 } }}>
          <ImageWrapper
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            transition={{ duration: 0.5 }}
          >
            <StyledImage src={output.imageUrl} alt={output.name} />
          </ImageWrapper>
        </Box>
        <Box sx={{ flex: 1, marginLeft: { md: 2 }, marginTop: { xs: 4, md: 0 } }}>
          <TextWrapper
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              {output.name}
            </Typography>
            <Typography variant="body1">{output.description}</Typography>
          </TextWrapper>
        </Box>
      </Box>
    </Container>
  );
};

export default ChildPlatform;
