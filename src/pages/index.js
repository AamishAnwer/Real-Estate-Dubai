import Hero from "@/components/Hero";
// import Form from "@/components/Form";
import { useState, useEffect } from "react";
import Modal from "@/components/Modal";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";
import Gallary from "@/components/Gallary";
import SignUp from "@/components/SignUp";
import Testemonial from "@/components/Testemonial";
import GetaQuote from "@/components/GetaQuote";
import { Analytics } from "@vercel/analytics/react";
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setIsModalOpen(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);
  const whatsappNumber = "+971585575277";
  const message = "Hello, Aamish!";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
  const callLink = `tel:${whatsappNumber}`;
  const handleChatbotOpen = () => {
    console.log("Chatbot Opened!");
  };

  return (
    <div>
      <Analytics />
      <Hero />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {/* <Form /> */}
      </Modal>
      {/* Call Icon */}
      <a
        href={callLink}
        target="_blank"
        rel="noopener noreferrer"
        className="icon-animation" // Reused animation class
        style={{
          position: "fixed",
          left: "20px",
          bottom: "80px",
          zIndex: 1000,
        }}
      >
        <img
          src="https://res.cloudinary.com/dcpte972l/image/upload/v1709118500/phone-call_1_hgiqtl.png"
          alt="Call"
          style={{ width: "50px", height: "50px" }}
        />
      </a>
      {/* WhatsApp Icon */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="icon-animation" // Reused animation class
        style={{
          position: "fixed",
          left: "20px",
          bottom: "20px",
          zIndex: 1000,
        }}
      >
        <img
          src="https://res.cloudinary.com/dcpte972l/image/upload/v1709118048/whatsapp_zy8pmu.png"
          alt="WhatsApp"
          style={{ width: "50px", height: "50px" }}
        />
      </a>
      <div
        onClick={handleChatbotOpen}
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          zIndex: 1000,
          cursor: "pointer",
        }}
      >
        <img
          className=" icon-animation"
          src="https://res.cloudinary.com/dcpte972l/image/upload/v1709126968/robot_vp5tse.png"
          alt="Chatbot"
          style={{ width: "50px", height: "50px" }}
        />
      </div>
      <Gallary />
      <GetaQuote />
      <Testemonial />
      <SignUp />
      <ContactUs />
      <Footer />
    </div>
  );
}
