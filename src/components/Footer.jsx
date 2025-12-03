import React from "react";

function Footer() {
  return (
    <>
      <div className="w-[90vw] mx-auto my-10 p-10 bg-gray-200 rounded-2xl shadow-2xl">
        <div className="grid grid-cols-3 border-t-2 border-gray-300 ">
          <div className="text-center items-center justify-center mt-5">
            <h1 className=" font-bold mb-2 text-2xl ">Contact us</h1>
            <div className="mx-auto w-1/2 items-center">
              <div className="flex items-center">
                <img
                  className="w-10"
                  src="src/components/uploads/icons8-whatsapp.svg"
                ></img>
                <h3>+20 1123456789</h3>
              </div>
              <div className="flex items-center space-x-2.5 ">
                <img
                  className="w-8"
                  src="src/components/uploads/icons8-gmail-50.png"
                ></img>
                <h2 className="font-bold">wassalha@gmail.com</h2>
              </div>
            </div>
          </div>
          <div className="border-l-2  border-gray-300 text-center items-center justify-center mt-5">
            <h1 className="font-bold mb-2 text-2xl mx-auto">Scocial Media</h1>
            <div className=" mx-auto w-1/4 items-center">
              <img
                className="w-10"
                src="src/components/uploads/icons8-facebook.svg"
              ></img>
              <img
                className="w-10"
                src="src/components/uploads/icons8-instagram.svg"
              ></img>
              <img
                className="w-10"
                src="src/components/uploads/icons8-x-50.png"
              ></img>
            </div>
          </div>
          <div className="border-l-2 border-gray-300 text-center mt-5">
            <h1 className=" font-bold mx-auto text-2xl mb-2">Coverage</h1>
            <h3>Cairo</h3>
            <h3>Giza</h3>
            <h3>Alexandria</h3>
            <h3>Aswan</h3>
            <h3>Qena</h3>
            <h3>Sharm El-Sheikh</h3>
            <h3>Damanhour</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
