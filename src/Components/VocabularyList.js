import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import VocRecord from './VocRecord'


export default function VocabularyList() {
  const [records, setRecords] = useState([])

  useEffect(() => {
    const getRecords = async () => {
      const response = await fetch("http://localhost:5000/record")
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        Navigate('/');
        return;
      }
      const records = await response.json();
      setRecords(records);
    }
    getRecords();
    return;
  }, [records.length])

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
     
      {records.map((records) => (
        (
        <VocRecord record={records} key={records._id} />)
      ))}
    </div>
  );

}
