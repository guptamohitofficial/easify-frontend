"use client";
import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [allCompanies, setAllCompanies] = useState({});
  const [allJobs, setAllJobs] = useState([]);
  const [allTrendingJobs, setAllTrendingJobs] = useState([]);

  return (
    <GlobalContext.Provider
      value={{ allCompanies, allJobs, allTrendingJobs, setAllTrendingJobs, setAllCompanies, setAllJobs }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
