/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Card as MuiCard,
  CardMedia,
  CardContent,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { teal, grey } from "@mui/material/colors";
import { useTranslation } from "react-i18next";
import i18n from "../../multilanguage/i18";

interface Service {
  id: number;
  name: string;
  img: string;
  info: string;
  development: string;
  details: string;
  date: string;
  author: string;
  category: string;
}

interface ServiceData {
  [key: string]: {
    cards: Service[];
  };
}

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [service, setService] = useState<Service | null>(null);
  const [otherServices, setOtherServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Using useTranslation hook for translations
  const { t } = useTranslation();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/car-app/companyService.json");
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        const data: ServiceData = await response.json();
        const services = data[i18n.language]?.cards || [];

        const currentService = services.find(
          (item: Service) => item.id === parseInt(id || "", 10)
        );
        setService(currentService || null);

        setOtherServices(
          services.filter((service) => service.id !== parseInt(id || "", 10))
        );
      } catch (error) {
        setError("Failed to fetch services");
        console.error("Failed to fetch services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [id, i18n.language]);
  if (loading) return <div>{t("Loading...")}</div>;
  if (error) return <div>{t("Failed to fetch services")}</div>;
  if (!service) return <div>{t("No service found")}</div>;

  return (
    <Container sx={{ marginTop: 4 }}>
      <Grid container spacing={4}>
        <Grid item md={12}>
          <MuiCard sx={{ display: "flex", padding: 3, boxShadow: 4 }}>
            <Grid container spacing={4}>
              <Grid item md={4}>
                <CardMedia
                  component="img"
                  image={service.img}
                  alt={service.name}
                  sx={{ borderRadius: 1, boxShadow: 4, objectFit: "cover" }}
                />
              </Grid>
              <Grid item md={8}>
                <CardContent>
                  <Typography variant="h3" color={teal[700]} gutterBottom>
                    {service.name}
                  </Typography>
                  <Typography variant="body1" color={grey[700]} paragraph>
                    {service.info}
                  </Typography>
                  <TableContainer component={Paper} sx={{ boxShadow: 4 }}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ fontWeight: "bold" }}>
                            {t("Attribute")}
                          </TableCell>
                          <TableCell sx={{ fontWeight: "bold" }}>
                            {t("Details")}
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>{t("Development")}</TableCell>
                          <TableCell>{service.development}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>{t("Details")}</TableCell>
                          <TableCell>{service.details}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>{t("Date")}</TableCell>
                          <TableCell>
                            {new Date(service.date).toLocaleDateString()}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>{t("Author")}</TableCell>
                          <TableCell>{service.author}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>{t("Category")}</TableCell>
                          <TableCell>{service.category}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Grid>
            </Grid>
          </MuiCard>
        </Grid>

        <Grid item md={12}>
          <Typography variant="h5" color={teal[700]} gutterBottom>
            {t("Other Services")}
          </Typography>
          <Grid container spacing={4}>
            {otherServices.map((otherService) => (
              <Grid item key={otherService.id} xs={12} sm={6} md={4}>
                <Link
                  to={`/service/${otherService.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <MuiCard
                    sx={{
                      padding: 2,
                      boxShadow: 4,
                      cursor: "pointer",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: 8,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={otherService.img}
                      alt={otherService.name}
                      sx={{
                        height: 180,
                        borderRadius: 1,
                        objectFit: "cover",
                        marginBottom: 2,
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6" color={teal[700]} gutterBottom>
                        {otherService.name}
                      </Typography>
                      <Typography variant="body2" color={grey[600]}>
                        {otherService.info}
                      </Typography>
                    </CardContent>
                  </MuiCard>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ServiceDetail;
