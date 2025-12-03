import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <>
      <div className="min-h-screen w-[99vw]">
        <div className="absolute bg-[url(src/components/uploads/admin-bg.png)] bg-cover h-screen w-full">
          <div className="mt-40  backdrop-blur-3xl text-white   border-white/50 shadow-2xl  backdrop-brightness-75 rounded-xl px-10">
            <Fade>
              <h1 className="text-3xl font-extrabold  text-center text-orange-600">
                Admin Dashboard
              </h1>
            </Fade>
          </div>

          <div className="grid grid-cols-3 gap-10 justify-center mx-40 mt-20">
            <Slide direction="down">
              <div className="backdrop-blur-3xl text-white   border-white/50 shadow-2xl  backdrop-brightness-75 rounded-xl px-10">
                <img
                  className="w-67"
                  src="src/components/uploads/admin-manage-order.png"
                ></img>
                <h2 className="text-xl font-extrabold outline-1 text-orange-500 m-3 text-center ">
                  Manage Order
                </h2>
                <button className="cursor-pointer p-2 bg-orange-600 rounded-full m-3 hover:scale-105 transition ease-in-out duration-300 hover:bg-white hover:text-black">
                  <Link to="/managestatus">Manage</Link>
                </button>
              </div>
            </Slide>

            <Slide direction="up">
              <div className="backdrop-blur-3xl text-white  border-white/50 shadow-2xl  backdrop-brightness-75 rounded-xl px-10">
                <img
                  className="w-67"
                  src="src/components/uploads/Manage Deliverycourier-delivery-couriers-using-map-cars-and_22841070.png"
                ></img>
                <h2 className="text-xl font-extrabold outline-1 text-orange-500 text-center m-3">
                  Manage Delivery
                </h2>
                <button className="cursor-pointer p-2 bg-orange-600 rounded-full m-3 hover:scale-105 transition ease-in-out duration-300 hover:bg-white hover:text-black">
                  <Link to="/managedriver">Set driver</Link>
                </button>
              </div>
            </Slide>
            <Slide direction="down">
              <div className="absolute backdrop-blur-3xl text-white   border-white/50 shadow-2xl  backdrop-brightness-75 rounded-xl px-10">
                <img
                  className="w-67"
                  src="src/components/uploads/two-hands-that-say-ok-top-yellow-button_1082479-26365.png"
                ></img>
                <h2 className="outline-1 text-orange-500 text-xl font-extrabold text-center m-3">
                  Manage Customers
                </h2>
                <button className="cursor-pointer p-2 bg-orange-600 rounded-full  m-3 hover:scale-105 transition ease-in-out duration-300 hover:bg-white hover:text-black ">
                  <Link to="/managecustomers">Manage</Link>
                </button>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
