import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Download() {
  const navigate = useNavigate();

  const handleDownload = async () => {
    const response = await fetch("http://localhost:5000/record");
    const data = await response.json();
    const csv = convertToCSV(data);
    const blob = new Blob([csv], { type: "text/csv" });
    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "GREVOC.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleDownload();
      navigate("/dashboard");
    }, 100);

    return () => clearTimeout(timer);
  }, [navigate]);

  const convertToCSV = (data) => {
    const headers = Object.keys(data[0]).join(",") + "\n";
    const rows = data
      .map((record) => Object.values(record).join(",") + "\n")
      .join("");
    return headers + rows;
  };

  return <></>;
}
