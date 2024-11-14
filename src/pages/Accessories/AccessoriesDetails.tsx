import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "./Loader";
import { useTranslation } from "react-i18next";

interface Accessory {
  id: number;
  name: string;
  img: string;
  info: string;
  details: string;
  price: number;
  gallery: string[];
}

interface CardObject {
  cards: Accessory[];
}

type AccessoriesType = Record<string, CardObject>;

const fetchAccessories = async (): Promise<AccessoriesType> => {
  const response = await axios.get("/car-app/companyAccessories.json");
  return response.data;
};

const AccessoriesDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const accessoryId = parseInt(id || "0", 10);
  const { i18n } = useTranslation();

  const {
    data: accessories,
    isLoading,
    error,
  } = useQuery<AccessoriesType, Error>({
    queryKey: ["accessories"],
    queryFn: fetchAccessories,
  });

  const accessory = accessories
    ? accessories[i18n.language]?.cards?.find((item) => item.id === accessoryId)
    : undefined;

  if (isLoading) return <Loader />;
  if (error)
    return <div className="alert alert-danger">Error loading accessories</div>;
  if (!accessory)
    return <div className="alert alert-warning">Accessory not found</div>;

  return (
    <div className="container my-5">
      <div className="card shadow-lg border-0 rounded-lg p-4">
        <div className="row">
          {/* Image Section */}
          <div className="col-lg-6 col-md-12 col-sm-12 mb-4 text-center">
            <div className="position-relative">
              <img
                src={accessory.img}
                alt={accessory.name}
                className="img-fluid rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
              />
              {/* Optionally: Add zoom or carousel functionality for multiple images */}
            </div>
          </div>

          {/* Details Section */}
          <div className="col-lg-6 col-md-12">
            <h3 className="mb-3 font-weight-bold">{accessory.name}</h3>
            <p className="text-muted mb-3">{accessory.info}</p>
            <hr />

            <div className="d-flex justify-content-between mb-3">
              <span className="h4 font-weight-bold text-primary">
                ${Math.round(accessory.price - (accessory.price * 13) / 100)}
              </span>
              <span className="text-muted text-decoration-line-through">
                ${accessory.price}
              </span>
            </div>

            <table className="table table-bordered table-striped">
              <tbody>
                <tr>
                  <th style={{ backgroundColor: "#0D92F4", color: "white" }}>
                    Description
                  </th>
                  <td>{accessory.details}</td>
                </tr>
              </tbody>
            </table>

            <div className="d-flex justify-content-between align-items-center mt-4">
              <button className="btn btn-primary btn-lg w-100 shadow-lg">
                <a
                  href="tel:595850777"
                  className="text-white text-decoration-none"
                >
                  <i className="bi bi-phone"></i> Call Now
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesDetails;
