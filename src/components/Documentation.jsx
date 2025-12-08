import React, { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";

function Documentation() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Slides (Same images: DO NOT CHANGE)
  const slides = [
    { src: "src/components/uploads/Diagrams/1.png" },
    { src: "src/components/uploads/Diagrams/2.png" },
    { src: "src/components/uploads/Diagrams/3.png" },
    { src: "src/components/uploads/Diagrams/4.png" },
    { src: "src/components/uploads/Diagrams/5.png" },
    { src: "src/components/uploads/Diagrams/6.png" },
    { src: "src/components/uploads/Diagrams/7.png" },
    { src: "src/components/uploads/Diagrams/8.png" },
    { src: "src/components/uploads/Diagrams/9.png" },
  ];

  const dataflowSlides = [
    { src: "src/components/uploads/Diagrams/DataFlow.jpeg" },
    { src: "src/components/uploads/Diagrams/DataFlow1.jpeg" },
  ];

  const saadSlides = [
    { src: "src/components/uploads/Diagrams/SAAD/image1.png" },
    { src: "src/components/uploads/Diagrams/SAAD/image2.png" },
    { src: "src/components/uploads/Diagrams/SAAD/image3.png" },
    { src: "src/components/uploads/Diagrams/SAAD/image4.png" },
    { src: "src/components/uploads/Diagrams/SAAD/image5.png" },
  ];

  // States
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dataflowCurrentIndex, setDataflowCurrentIndex] = useState(0);
  const [saadSlidesCurrent, setSaadSlidesCurrent] = useState(0);

  // Functions
  const nextSlide = () =>
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);

  const prevSlide = () =>
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);

  const dataflowNext = () =>
    setDataflowCurrentIndex(
      dataflowCurrentIndex === dataflowSlides.length - 1
        ? 0
        : dataflowCurrentIndex + 1
    );

  const dataflowPrev = () =>
    setDataflowCurrentIndex(
      dataflowCurrentIndex === 0
        ? dataflowSlides.length - 1
        : dataflowCurrentIndex - 1
    );

  const nextSaadSlides = () =>
    setSaadSlidesCurrent(
      saadSlidesCurrent === saadSlides.length - 1 ? 0 : saadSlidesCurrent + 1
    );

  const prevSaadSlides = () =>
    setSaadSlidesCurrent(
      saadSlidesCurrent === 0 ? saadSlides.length - 1 : saadSlidesCurrent - 1
    );

  return (
    <div className="min-h-screen p-6 space-y-20">
      {/* Section Template Component */}
      {/** This removes repetitive code & keeps everything clean **/}
      {[
        {
          title: "Mostafa Mahmoud Mattar",
          subtitle: "Use Case Diagram",
          img: "src/components/uploads/Diagrams/UseCase.jpeg",
        },
        {
          title: "Hazem Ahmad Abdullah",
          subtitle: "Class Diagram",
          img: "src/components/uploads/Diagrams/ActivityDiagram.png",
        },
      ].map((section, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl mt-15 font-extrabold bg-gradient-to-r from-orange-200 via-orange-400 to-orange-600 bg-clip-text text-transparent">
            {section.title}
          </h1>
          <h2 className="text-2xl text-orange-600">{section.subtitle}</h2>

          <img
            src={section.img}
            className="w-[90vw] max-w-[1200px] mx-auto rounded-xl shadow-lg"
          />
        </motion.div>
      ))}

      {/* ---------- Saad Slider (Activity Diagram) ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-200 via-orange-400 to-orange-600 bg-clip-text text-transparent">
          Hossam Mohy
        </h1>
        <h2 className="text-2xl text-orange-600">Activity Diagram</h2>

        <div className="relative w-full max-w-[900px] mx-auto">
          <motion.div
            key={saadSlidesCurrent}
            initial={{ opacity: 0.3, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            style={{
              backgroundImage: `url(${saadSlides[saadSlidesCurrent].src})`,
            }}
            className="w-full h-[60vw] max-h-[600px] bg-no-repeat bg-contain bg-center"
          />

          {/* Left Button */}
          <button
            onClick={prevSaadSlides}
            className="absolute top-1/2 left-0 bg-orange-600 text-white p-2 rounded-full hover:scale-110 transition"
          >
            <BsChevronLeft size={35} />
          </button>

          {/* Right Button */}
          <button
            onClick={nextSaadSlides}
            className="absolute top-1/2 right-0 bg-orange-600 text-white p-2 rounded-full hover:scale-110 transition"
          >
            <BsChevronRight size={35} />
          </button>
        </div>
      </motion.div>

      {/* ---------- Dataflow Slider ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-200 via-orange-400 to-orange-600 bg-clip-text text-transparent">
          Youssef Hany Ibrahim
        </h1>
        <h2 className="text-2xl text-orange-600">Dataflow Diagram</h2>

        <div className="relative w-full max-w-[900px] mx-auto">
          <motion.div
            key={dataflowCurrentIndex}
            initial={{ opacity: 0.3, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            style={{
              backgroundImage: `url(${dataflowSlides[dataflowCurrentIndex].src})`,
            }}
            className="w-full h-[60vw] max-h-[600px] bg-no-repeat bg-contain bg-center"
          />

          <button
            onClick={dataflowPrev}
            className="absolute top-1/2 left-0 bg-orange-600 text-white p-2 rounded-full hover:scale-110 transition"
          >
            <BsChevronLeft size={35} />
          </button>

          <button
            onClick={dataflowNext}
            className="absolute top-1/2 right-0 bg-orange-600 text-white p-2 rounded-full hover:scale-110 transition"
          >
            <BsChevronRight size={35} />
          </button>
        </div>
      </motion.div>

      {/* ---------- Sequence Diagram Slider ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-200 via-orange-400 to-orange-600 bg-clip-text text-transparent">
          Marwan Ibrahim Ali
        </h1>
        <h2 className="text-2xl text-orange-600">Sequence Diagram</h2>

        <div className="relative w-full max-w-[1200px] mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0.3, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            style={{
              backgroundImage: `url(${slides[currentIndex].src})`,
            }}
            className="w-full h-[60vw] max-h-[600px] bg-no-repeat bg-contain bg-center"
          />

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 bg-orange-600 text-white p-2 rounded-full hover:scale-110 transition"
          >
            <BsChevronLeft size={35} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 bg-orange-600 text-white p-2 rounded-full hover:scale-110 transition"
          >
            <BsChevronRight size={35} />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default Documentation;
