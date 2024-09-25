import React, { useCallback, useEffect, useState } from "react";
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
  TableRow,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { teal, grey, deepPurple } from "@mui/material/colors";
import { useTranslation } from "react-i18next";
import i18n from "../multilanguage/i18";
import Loader from "./Loader";

interface Service {
  serviceImages: string[];
  id: number;
  name: string;
  img: string;
  info: string;
  development: string;
  details: string;
}

interface ServiceData {
  [key: string]: {
    cards: Service[];
  };
}

const AccessoriesDetail: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [service, setService] = useState<Service | null>(null);
  const [otherServices, setOtherServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const theme = useTheme();
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const fetchServices = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("/car-app/companyAccessories.json");
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const data: ServiceData = await response.json();
      const services = data[i18n.language]?.cards || [];

      const currentService = services.find(
        (item) => item.id === parseInt(id || "", 10)
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, i18n.language]);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  if (loading) {
    return <Loader />;
  }

  if (error) return <div>{t("Failed to fetch accessories")}</div>;
  if (!service) return <div>{t("No accessories found")}</div>;

  return (
    <Container sx={{ mt: 4, p: 2, marginTop: "150px" }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MuiCard
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : isTablet ? "column" : "row",
              boxShadow: theme.shadows[3],
              borderRadius: theme.shape.borderRadius,
              overflow: "hidden",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: theme.shadows[6],
              },
            }}
          >
            <CardMedia
              component="img"
              image={service.img}
              alt={service.name}
              sx={{
                objectFit: "cover",
                width: isMobile ? "100%" : isTablet ? "100%" : 400,
                height: isMobile ? 300 : isTablet ? 550 : "auto",
                borderRight:
                  isMobile || isTablet ? "none" : `4px solid ${teal[50]}`,
              }}
            />
            <CardContent sx={{ flex: 1, p: isMobile ? 2 : 4 }}>
              <Typography
                variant={isMobile ? "h6" : "h4"}
                color={deepPurple[900]}
                gutterBottom
                sx={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: "bold",
                }}
              >
                {service.name}
              </Typography>
              <Typography
                variant="body1"
                color={grey[700]}
                sx={{
                  fontFamily: "'Roboto', sans-serif",
                  mb: 2,
                }}
              >
                {service.info}
              </Typography>
              <TableContainer
                component={Paper}
                sx={{
                  boxShadow: 2,
                  borderRadius: 2,
                  backgroundColor: theme.palette.grey[100],
                }}
              >
                <Table size={isMobile ? "small" : "medium"}>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        className="text-center"
                        sx={{
                          fontFamily: "monospace",
                          py: isMobile ? 1 : 2.5,
                        }}
                      >
                        {service.details}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </MuiCard>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            color={deepPurple[900]}
            gutterBottom
            sx={{ fontFamily: "'Roboto', sans-serif", fontWeight: "bold" }}
          >
            {t("Other Services")}
          </Typography>
          <Grid container spacing={isMobile ? 2 : 4}>
            {otherServices.map((otherService) => (
              <Grid item key={otherService.id} xs={12} sm={6} md={4}>
                <Link
                  to={`/accessories/${otherService.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <MuiCard
                    sx={{
                      p: isMobile ? 1 : 2,
                      boxShadow: theme.shadows[3],
                      borderRadius: theme.shape.borderRadius,
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.03)",
                        boxShadow: theme.shadows[6],
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={otherService.img}
                      alt={otherService.name}
                      sx={{
                        borderRadius: theme.shape.borderRadius,
                        objectFit: "cover",
                        height: isMobile ? 250 : 220,
                        width: "100%",
                        mb: isMobile ? 1 : 2,
                      }}
                    />
                    <CardContent sx={{ p: isMobile ? 1 : 2 }}>
                      <Typography
                        variant={isMobile ? "h3" : "h6"}
                        color={deepPurple[900]}
                        sx={{
                          fontFamily: "'Roboto', sans-serif",
                          fontWeight: "bold",
                        }}
                      >
                        {otherService.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color={grey[700]}
                        sx={{ fontFamily: "'Roboto', sans-serif" }}
                      >
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

export default AccessoriesDetail;
