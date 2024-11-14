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
  console.log(accessoryId);


  if (isLoading) return <Loader />;
  if (error) return <div>Error loading accessories</div>;
  if (!accessory) return <div>Accessory not found</div>;

 

 



  return (
    <div className="container" style={{ overflow: "hidden" }}>
      <div className="card p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 text-center">
            <img src={accessory.img} />
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
