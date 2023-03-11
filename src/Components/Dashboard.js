import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (

    <div className="bg-gray-100 py-12 px-1 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Master GRE Vocabulary
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Expand your vocabulary and improve your score on the GRE exam with our comprehensive study materials.
          </p>
          <div className="mt-10">
            <div className="max-w-2xl mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9" alt="Words on paper" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <Link to="/vocabularylist" className="hover:underline">
                        Vocabulary Lists
                      </Link>
                    </p>
                    <Link to="/vocabularylist" >

                      <p className="text-xl font-semibold text-gray-900">
                        See our extensive list of GRE vocabulary words broken down into categories.
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        We have curated a list of hundreds of GRE vocabulary words and arranged them by category to make it simple for you to study and recall these terms effectively
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9" alt="Person holding pen" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <Link to="/flashcard" className="hover:underline">

                        Flashcards
                      </Link>
                    </p>
                    <Link to="/flashcard"  >

                      <p className="text-xl font-semibold text-gray-900">
                        Study on-the-go with our interactive GRE vocabulary flashcards.
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        No matter if you're using a computer or a phone, our flashcards are made to assist you in rapidly and effectively memorising GRE vocabulary words.
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9" alt="Person reading book" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <Link to="/quiz" className="hover:underline">
                        Practice Quizzes
                      </Link>
                    </p>
                    <Link to="/quiz">

                      <p className="text-xl font-semibold text-gray-900">
                        Assess your knowledge with our interactive GRE vocabulary quizzes
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        To help you practise and improve your GRE vocabulary, we provide a range of quizzes.
                      </p>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <p className='text-center text-gray-400 relative mt-9 bottom-0'>

        &copy; 2023 GREVOC
      </p>
    </div>


  )
}
