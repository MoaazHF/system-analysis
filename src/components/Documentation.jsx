import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function Documentation() {
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dataflowCurrentIndex, setDataflowCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastIndex = currentIndex === slides.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const dataflowPrev = () => {
    const isFirstSlide = dataflowCurrentIndex === 0;
    const newIndex = isFirstSlide
      ? dataflowSlides.length - 1
      : dataflowCurrentIndex - 1;
    console.log(newIndex);
    setDataflowCurrentIndex(newIndex);
  };
  const dataflowNext = () => {
    const isLastIndex = dataflowCurrentIndex === dataflowSlides.length - 1;
    const newIndex = isLastIndex ? 0 : dataflowCurrentIndex + 1;
    console.log(newIndex);

    setDataflowCurrentIndex(newIndex);
  };
  return (
    <>
      <div className="min-h-screen">
        <div className="mt-20">
          <div className="grid gap-10 grid-cols-1">
            <div className=" justify-center">
              <div className="">
                {" "}
                <h1 className="text-5xl text-extrabold font- italic text-center text-black bg-gradient-to-r from-orange-200 via-orange-400 to-orange-600">
                  Mostafa Mahmoud Mattar
                </h1>
                <h2 className="text-2xl text-center text-orange-600">
                  Use Case Diagram
                </h2>
                <img
                  src="src/components/uploads/Diagrams/UseCase.jpeg"
                  className=" w-screen items-center justify-center"
                ></img>
              </div>
            </div>

            <div className="flex">
              <div className="w-full">
                {" "}
                <h1 className="text-5xl text-extrabold font- italic text-center text-black bg-gradient-to-r from-orange-200 via-orange-400 to-orange-600">
                  Marwan Ibrahim Ali
                </h1>
                <h2 className="text-2xl text-center text-orange-600">
                  Sequence Diagram
                </h2>
                <div className="group">
                  <div
                    style={{
                      backgroundImage: `url(${slides[currentIndex].src})`,
                    }}
                    className="w-[98vw] m-1 bg-no-repeat  h-[60vw] mt-30  duration-300"
                  >
                    {" "}
                    <div className="hidden group-hover:block hover:brightness-150 hover:scale-105 transition ease-in-out  translate-y-100 translate-x-10 absolute border-2 bg-orange-600 rounded-2xl  cursor-pointer">
                      <BsChevronLeft size={40} onClick={prevSlide} />
                    </div>
                    <div className="hidden group-hover:block hover:brightness-150 hover:scale-105 transition ease-in-out  translate-y-100 border-2 bg-orange-600 rounded-2xl translate-x-350 absolute  cursor-pointer">
                      <BsChevronRight size={40} onClick={nextSlide} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className=" w-full">
                {" "}
                <h1 className="text-5xl text-extrabold font- italic text-center text-black bg-gradient-to-r from-orange-200 via-orange-400 to-orange-600">
                  Hazem Ahmad Abdullah
                </h1>
                <h2 className="text-2xl text-center text-orange-600">
                  Activity Diagram
                </h2>
                <img
                  src="src/components/uploads/Diagrams/ActivityDiagram.png"
                  className="w-[80vw] mx-auto"
                ></img>
              </div>
            </div>

            <div className="w-full">
              <div className=" justify-center ">
                {" "}
                <h1 className="text-5xl text-extrabold font- italic text-center text-black bg-gradient-to-r from-orange-200 via-orange-400 to-orange-600">
                  Youssef Hany Ibrahim
                </h1>
                <h2 className="text-2xl text-center text-orange-600">
                  Dataflow Diagram
                </h2>
                <div className="group ">
                  <div
                    style={{
                      backgroundImage: `url(${dataflowSlides[dataflowCurrentIndex].src})`,
                    }}
                    className="w-[80vw] mx-auto  bg-no-repeat  h-[40vw] mt-30 duration-300 "
                  ></div>
                  <div className="hidden group-hover:block  hover:brightness-150 hover:scale-105 transition ease-in-out  -translate-y-100 translate-x-10 absolute border-2 bg-orange-600 rounded-2xl  cursor-pointer">
                    <BsChevronLeft size={40} onClick={dataflowPrev} />
                  </div>
                  <div className="hidden hover:brightness-150 hover:scale-105 transition ease-in-out group-hover:block -translate-y-100 border-2 bg-orange-600 rounded-2xl translate-x-350 absolute  cursor-pointer">
                    <BsChevronRight size={40} onClick={dataflowNext} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Documentation;
