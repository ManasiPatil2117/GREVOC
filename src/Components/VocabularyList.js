import React, { useEffect, useState } from "react";
import VocRecord from "./VocRecord";
import { BASE_URL } from "../services/helper";

export default function VocabularyList() {
  const [records, setRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');


  useEffect(() => {
    const getRecords = async () => {
      const response = await fetch(`${BASE_URL}/record`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        window.location.href = '/';
        return;
      }
      const records = await response.json();
      setRecords(records);
    };
    getRecords();
    return;
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = records.slice(indexOfFirstRecord, indexOfLastRecord);

  const prevButton = (
    <button
      onClick={() => setCurrentPage(currentPage - 1)}
      disabled={currentPage === 1}
      className={`text-white bg-blue-700  mr-5 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-5 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
    >
      Prev
    </button>
  );

  const nextButton = (
    <button
      onClick={() => setCurrentPage(currentPage + 1)}
      disabled={currentPage === Math.ceil(records.length / recordsPerPage)}
      className={`text-white bg-blue-700  hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-5 ${currentPage === Math.ceil(records.length / recordsPerPage)
        ? "opacity-50 cursor-not-allowed"
        : ""
        }`}
    >
      Next
    </button>
  );
  const filteredRecords = records.filter((record) =>
    Object.values(record).some((field) =>
      field.toLowerCase().startsWith(searchQuery.toLowerCase())
    )
  );


  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-end">
        <label for="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-30">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-grey-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
            required
          />
        </div>
        <button
          className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex justify-center items-center gap-2 mt-4">
        {prevButton}
        {nextButton}
      </div>
      {searchQuery === '' ? currentRecords.map((record) => (
        <VocRecord record={record} key={record._id} />
      )) : filteredRecords.map((record) => (
        <VocRecord record={record} key={record._id} />
      ))}
      <div className="flex justify-center items-center gap-2 mt-4">
        {prevButton}
        {nextButton}
      </div>
    </div>
  );
}
