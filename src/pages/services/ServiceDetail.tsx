import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import ServiceSlider from "./ServiceSlider";
import NotFound from "../../error/NotFound";

interface ServiceDetailProps {
  id: number;
  name: string;
  info: string;
  img: string;
  development: string;
  details: string;
  date: string;
  author: string;
  category: string;
}

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const [service, setService] = useState<ServiceDetailProps | null>(null);
  const [services, setServices] = useState<ServiceDetailProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchService = async () => {
      if (id === undefined) return;

      try {
        const response = await fetch("/companyService.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: ServiceDetailProps[] = await response.json();

        const foundService = data.find((item) => item.id === parseInt(id, 10));
        setService(foundService || null);
        setServices(data.filter((item) => item.id !== parseInt(id, 10)));
      } catch (error) {
        setError("Failed to fetch service");
        console.error("Failed to fetch service:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  if (loading) return <p className="text-center text-primary">Loading...</p>;
  if (error) return <p className="text-center text-danger">{error}</p>;
  if (!service) return <NotFound />;

  return (
    <>
      <div
        style={{ marginTop: "70px" }}
        className="container  p-3 bg-light rounded shadow-sm"
      >
        <div style={{ marginTop: "30px" }} className="row">
          <div className="col-md-8 mb-4 mb-md-0">
            <h1 className="display-5">{service.name}</h1>
            <img
              src={service.img}
              alt={service.name}
              className="img-fluid rounded mb-3"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
            <p className="lead">{service.info}</p>
            <div className="p-3 bg-white rounded shadow-sm">
              <h2 className="h4">Details</h2>
              <p className="mb-1">
                <strong>Development:</strong> {service.development}
              </p>
              <p className="mb-1">
                <strong>Date:</strong> {service.date}
              </p>
              <p className="mb-1">
                <strong>Author:</strong> {service.author}
              </p>
              <p className="mb-1">
                <strong>Category:</strong> {service.category}
              </p>
              <p className="mb-1">
                <strong>Additional Details:</strong> {service.details}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <ServiceSlider />
          </div>
        </div>
      </div>
      <div className="container  bg-light rounded shadow-sm">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {services.map((relatedService) => (
            <div className="col" key={relatedService.id}>
              <ServiceCard service={relatedService} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
