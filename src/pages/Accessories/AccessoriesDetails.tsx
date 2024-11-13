import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "./Loader";
import { motion, AnimatePresence } from "framer-motion";

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
  console.log(accessoryId);

  const [currentIndex, setCurrentIndex] = useState(0);

  if (isLoading) return <Loader />;
  if (error) return <div>Error loading accessories</div>;
  if (!accessory) return <div>Accessory not found</div>;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? accessory.gallery.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === accessory.gallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="container" style={{ overflow: "hidden" }}>
      <div className="card p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 text-center">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={currentIndex}
                src={accessory.gallery[currentIndex]}
                alt={`Accessory ${currentIndex + 1}`}
                className="img-fluid rounded"
                style={{
                  objectFit: "cover",
                  maxHeight: "400px",
                  width: "100%",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
            <div className="mt-3 d-flex justify-content-center">
              <button className="btn btn-primary me-2" onClick={goToPrevious}>
                &lt;
              </button>
              <button className="btn btn-primary" onClick={goToNext}>
                &gt;
              </button>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <h4 className="mb-3">{accessory.name}</h4>
            <p>{accessory.info}</p>
            <hr />
            <table className="table mt-3">
              <tbody>
                <tr>
                  <th style={{ backgroundColor: "#0D92F4", color: "white" }}>
                    Price
                  </th>
                  <td>
                    {Math.round(accessory.price - (accessory.price * 13) / 100)}
                  </td>
                </tr>
                <tr>
                  <th style={{ backgroundColor: "#0D92F4", color: "white" }}>
                    Description
                  </th>
                  <td>{accessory.details}</td>
                </tr>
                <tr>
                  <th style={{ backgroundColor: "#0D92F4", color: "white" }}>
                    Gallery
                  </th>
                  <td>
                    <div
                      className="d-flex"
                      style={{
                        overflowX: "auto",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {accessory.gallery.map((image, index) => (
                        <motion.img
                          whileTap={{ scale: 0.3 }}
                          key={index}
                          src={image}
                          alt={`Gallery ${index + 1}`}
                          className="img-thumbnail m-1"
                          style={{
                            width: "110px",
                            height: "110px",
                            objectFit: "cover",
                            cursor: "pointer",
                            flexShrink: 0,
                          }}
                          onClick={() => handleThumbnailClick(index)}
                        />
                      ))}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-center mt-4">
              <button className="btn btn-secondary w-100">Call Now</button>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <h6>Additional Information</h6>
        <table className="table mt-3">
          <tbody>
            <tr>
              <th style={{ backgroundColor: "#536493", color: "white" }}>
                Material
              </th>
              <td>{accessory.details} Material</td>
            </tr>
            <tr>
              <th style={{ backgroundColor: "#536493", color: "white" }}>
                Warranty
              </th>
              <td>1 Year Warranty</td>
            </tr>
            <tr>
              <th style={{ backgroundColor: "#536493", color: "white" }}>
                Category
              </th>
              <td>Accessories</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccessoriesDetails;
