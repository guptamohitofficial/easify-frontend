"use client";
import { useEffect } from "react";
import { useGlobalContext } from "@/context/global";
import { getSheetData } from "@/utils";

const LoadGlobalData = () => {
  const { setAllCompanies, setAllJobs, setAllTrendingJobs } = useGlobalContext();

  const fetchAllCompaniesAndSave = async () => {
    const companiesList = await getSheetData({
      sheetID: "1UDZEV5Jq4AemQ-yUEy31EAO0rox6GfCU8Bcip86cY3A",
      sheetName: "CompanyDetail",
      query: "SELECT *",
    });
    const companiesJson = {};
    for (let index = 0; index < companiesList.length; index++) {
      const element = companiesList[index];
      if (element.logo_url?.length < 10) {
        const googleDriveFileId = element.logo_image?.match(/id=([a-zA-Z0-9_-]+)/)?.[1];
        if (googleDriveFileId) {
          element.logo_url = `https://lh3.googleusercontent.com/d/${googleDriveFileId}`;
        }
      }
      companiesJson[element.id] = element;
    }
    setAllCompanies(companiesJson);
  };
  const fetchAllJobsAndSave = async () => {
    const jobsList = await getSheetData({
      sheetID: "1UDZEV5Jq4AemQ-yUEy31EAO0rox6GfCU8Bcip86cY3A",
      sheetName: "JobDetails",
      query: "SELECT * WHERE I = TRUE",
    });
    setAllJobs(jobsList);
  };
  const fetchAllTrendingJobsAndSave = async () => {
    const allTrendingJobsList = await getSheetData({
      sheetID: "1UDZEV5Jq4AemQ-yUEy31EAO0rox6GfCU8Bcip86cY3A",
      sheetName: "TrendingServices",
      query: "SELECT *",
    });
    console.log("allTrendingJobsList", allTrendingJobsList)
    setAllTrendingJobs(allTrendingJobsList);
  };
  useEffect(() => {
    fetchAllCompaniesAndSave();
    fetchAllJobsAndSave();
    // fetchAllTrendingJobsAndSave();
  }, []);
  return null;
};

export default LoadGlobalData;
