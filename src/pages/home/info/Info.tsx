import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Container = styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg, #1e3c72, #2a5298)",
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(8),
  borderRadius: theme.shape.borderRadius,
  color: "#fff",
  margin: theme.spacing(4, "auto"),
  marginTop: theme.spacing(12),
  overflow: "hidden",
}));

const IconContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(4),
  marginBottom: theme.spacing(6),
}));

const Icon = styled(Box)(() => ({
  width: 80,
  height: 80,
  color: "#fff",
  backgroundColor: "#004d99",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  transition: "box-shadow 0.3s ease",
}));

const TableWrapper = styled(TableContainer)(({ theme }) => ({
  maxWidth: 900,
  width: "100%",
  marginTop: theme.spacing(6),
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: "#fff",
  backgroundColor: "#00274d",
  fontWeight: "bold",
  padding: theme.spacing(2),
  borderBottom: "1px solid #001f3f",
}));

const StyledTableRow = styled(TableRow)(() => ({
  backgroundColor: "#f0f4f8",
  "&:nth-of-type(even)": {
    backgroundColor: "#e1e8ed",
  },
}));

const AboutUs = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(6),

  "& h1": {
    fontSize: "2.5rem",
    marginBottom: theme.spacing(2),
    fontWeight: 700,
    color: "#ffffff",
  },

  "& p": {
    fontSize: "1.125rem",
    lineHeight: 1.6,
    margin: 0,
    padding: 0,
    color: "#e0e0e0",
  },
}));

const Info: React.FC = () => {
  return (
    <Container>
      <IconContainer>
        <Icon>
          <InfoOutlinedIcon fontSize="inherit" />
        </Icon>
        <Icon>
          <HomeOutlinedIcon fontSize="inherit" />
        </Icon>
        <Icon>
          <SettingsOutlinedIcon fontSize="inherit" />
        </Icon>
      </IconContainer>
      <AboutUs>
        <Typography variant="h1">About Us</Typography>
        <Typography variant="body1">
          Our mission is to deliver outstanding technology solutions tailored to
          your specific needs. We are committed to providing innovative services
          and exceptional support to help you achieve your objectives.
        </Typography>
      </AboutUs>
      <TableWrapper>
        <Paper>
          <Table>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell>Our Mission</StyledTableCell>
                <TableCell>
                  To offer superior technology solutions and excellent service
                  that exceed expectations.
                </TableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell>Our Vision</StyledTableCell>
                <TableCell>
                  To become a leading innovator in technology solutions that
                  drive client success and growth.
                </TableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell>Core Values</StyledTableCell>
                <TableCell>
                  Integrity, Innovation, Excellence, and Customer Satisfaction.
                </TableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </Paper>
      </TableWrapper>
      <TableWrapper>
        <Paper>
          <Table>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell>Service Offered</StyledTableCell>
                <TableCell>Custom Software Development</TableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell>Expertise</StyledTableCell>
                <TableCell>Web and Mobile Applications</TableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell>Support</StyledTableCell>
                <TableCell>24/7 Technical Support</TableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </Paper>
      </TableWrapper>
    </Container>
  );
};

export default Info;
