import React from 'react'
import { motion } from 'framer-motion'
import { containerVariants } from '../motionVarients/motionvarient'
import { itemVariants } from '../motionVarients/motionvarient'

export default function About() {

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="bg-gray-100 py-12 px-1 sm:px-6 lg:px-8 h-screen">
        <motion.div className="bg-white shadow-md rounded-lg overflow-hidden lg:mr-20 lg:ml-20 lg:mt-20 m-4 " variants={itemVariants}>
          <div className="p-4 m-8">
            <motion.h3 className="font-bold text-xl mb-2 text-center">About Us</motion.h3>
            <motion.p className="text-gray-700 text-base text-center"> <h1> Welcome to our About page!</h1>
              <br /> We are a GRE vocabulary website devoted to assisting students in their preparation for the verbal section of the GRE exam.  <br />
              A thorough list of vocabulary words frequently evaluated on the GRE exam has been meticulously compiled by our team of knowledgeable educators and content writers. These terms have been categorised to make it simple for students to study and memorise them effectively.
              <br />
              We are dedicated to offering our students the greatest tools and study materials because we recognise how crucial vocabulary is to getting a high GRE score.
              <br />
              We also provide in-depth explanations and examples for each vocabulary word, helping students understand not only the meaning of the word but also how to use it correctly in context.
              <br />
              We are committed to assisting students on our website in achieving their objectives and performing well on the GRE exam. We think that any student can increase their vocabulary and perform well on the verbal portion of the GRE with the correct tools and resources.
              <br />
              We appreciate you using our website as your primary source for GRE vocabulary research.
              <br />We wish you the best of luck on your exam!
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
