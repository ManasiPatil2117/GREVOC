import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { BASE_URL } from "../services/helper";

export default function Download() {
  const navigate = useNavigate();

  const handleDownload = async () => {
    const response = await fetch(`${BASE_URL}/record`);
    const data = await response.json();
    const headers = [['Word', 'Meaning']];

    const rows = data.map(record => [record.word, record.definition ]);

    const doc = new jsPDF();
    doc.autoTable({
      head: headers,
      body: rows
    });

    doc.save("GREVOC.pdf");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleDownload();
      navigate("/dashboard");
    }, 100);

    return () => clearTimeout(timer);
  }, [navigate]);

  return <></>;
}
