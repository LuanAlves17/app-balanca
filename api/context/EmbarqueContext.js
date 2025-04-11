import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { API_URL, PATH_GET } from "@env";

const EmbarquesContext = createContext(undefined);

export const EmbarquesProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const refreshData = async () => {
    try {
      const response = await axios.get(`${API_URL}${PATH_GET}`);
      setData(response.data.copasul.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <EmbarquesContext.Provider value={{ data, refreshData, setData }}>
      {children}
    </EmbarquesContext.Provider>
  );
};

export const useEmbarques = () => {
  const context = useContext(EmbarquesContext);
  if (!context) {
    throw new Error("useEmbarques must be used within EmbarquesProvider");
  }
  return context;
};
