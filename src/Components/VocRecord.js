import React from 'react'
import { motion } from 'framer-motion'
import { containerVariants } from '../motionVarients/motionvarient'
import { itemVariants } from '../motionVarients/motionvarient'

export default function VocRecord({ record }) {

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="bg-gray-100 py-8 px-1 sm:px-6 lg:px-8">
        <motion.div className="bg-white shadow-md rounded-lg overflow-hidden sm:mx-20 lg:mx-40" variants={itemVariants}>
          <div className="p-4 m-4">
            <motion.h3 className="font-bold text-xl mb-2">{record.word.charAt(0).toUpperCase() + record.word.slice(1).toLowerCase()}</motion.h3>
            <motion.p className="text-gray-700 text-base">-{record.definition}</motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
