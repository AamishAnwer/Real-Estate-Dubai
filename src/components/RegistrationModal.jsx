import { useState } from "react";
import { useRouter } from "next/router"; // Importing useRouter from next/router

const RegistrationModal = ({ closeModal }) => {
  const router = useRouter(); // Initialize useRouter
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    language: "English",
    terms: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  const handleHomeClick = () => {
    router.push("/"); // Navigate to the home route
  };

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-smoke-dark flex items-center justify-center">
      <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-xl shadow-lg">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition ease-in-out duration-150"
        >
          ✕
        </button>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border-2 text-black border-yellow-500 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 py-3 px-4"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full text-black border-2 border-yellow-500 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 py-3 px-4"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="mobile"
              className="block text-sm font-semibold text-gray-700"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              placeholder="Enter Your Number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="mt-1 block w-full text-black border-2 border-yellow-500 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 py-3 px-4"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="language"
              className="block text-sm font-semibold  text-black"
            >
              Preferred Language
            </label>
            <select
              id="language"
              name="language"
              value={formData.language}
              onChange={handleChange}
              className="mt-1 block w-full border-2 border-yellow-500 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 py-3 px-4 text-black"
            >
              <option value="English">English</option>
              <option value="Arabic">Arabic</option>
              <option value="Russian">Russian</option>
            </select>
          </div>
          <div className="mb-4 flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              checked={formData.terms}
              onChange={handleChange}
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-2 border-yellow-500 rounded"
            />
            <label
              htmlFor="terms"
              className="ml-2 text-sm font-medium text-gray-700"
            >
              I accept the terms and conditions
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-sm font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150"
            >
              Submit
            </button>
          </div>
        </form>
        {submitted && (
          <div className="mt-4 text-center">
            <p>Form submitted, Thank you!</p>
            <button
              onClick={handleHomeClick}
              className="mt-4 w-full px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-sm font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150"
            >
              Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationModal;
