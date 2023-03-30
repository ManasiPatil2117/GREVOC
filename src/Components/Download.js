import React, { useState } from "react";
import { motion } from "framer-motion";
import { containerVariants } from "../motionVarients/motionvarient";
import { itemVariants } from "../motionVarients/motionvarient";

export default function Download() {
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

    const convertToCSV = (data) => {
        const headers = Object.keys(data[0]).join(",") + "\n";
        const rows = data.map((record) => Object.values(record).join(",") + "\n");
        return headers + rows.join("");
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="bg-gray-100 py-12 px-1 sm:px-6 lg:px-8 h-screen">
                <motion.div
                    className="bg-white shadow-md rounded-lg overflow-hidden lg:mr-20 lg:ml-20 mt-20 "
                    variants={itemVariants}
                >
                    <div className="p-4 m-8">
                        <motion.h3 className="font-bold text-xl mb-2 text-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="   text-green-600 font-bold py-2 px-4 text-3xl pl-0 focus:outline-none focus:shadow-outline "
                                onClick={handleDownload}
                            >
                                Click to Download
                            </motion.button>
                        </motion.h3>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
