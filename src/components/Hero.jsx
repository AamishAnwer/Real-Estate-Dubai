import React from "react";
import { useState } from "react";
import RegistrationModal from "./RegistrationModal";

const Hero = () => {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <div>
      <section>
        <div className=" dark:bg-slate-400" bis_skin_checked="1">
          <div
            className="container flex flex-col items-center px-4 py-8 pb-24 mx-auto text-center lg:pb-44 md:py-16 md:px-10 lg:px-24 dark:text-gray-900"
            bis_skin_checked="1"
          >
            <h1 className="text-5xl font-bold sm:text-6xl xl:max-w-3xl dark:text-gray-900">
              Real Estate Masters
            </h1>
            <p className="mt-2 text-lg sm:mb-4 xl:max-w-3xl dark:text-gray-900">
              Properties For Sale & Rent, Search & Find Perfect Place
            </p>
            <div className="flex flex-wrap justify-center" bis_skin_checked="1">
              <a
                href="https://res.cloudinary.com/dcpte972l/image/upload/v1709124764/samplepdf_fp3drr.pdf"
                download="RealEstateMasters_Brochure.pdf" // This suggests a default filename for saving
                className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50 animated-button"
              >
                Download Brochure
              </a>
              <button
                onClick={toggleModal} // Add click handler to toggle modal
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900 animated-button"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dcpte972l/image/upload/v1709117067/naya-1_zcsv4j.jpg"
          alt=""
          className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500"
        />
      </section>
      {isModalOpen && <RegistrationModal closeModal={toggleModal} />}
    </div>
  );
};

export default Hero;
