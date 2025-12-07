import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function TrackOrder() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-[99vw] min-h-screen bg-cover bg-[url(src/components/uploads/admin-bg.png)]">
        <h1 className="absolute translate-x-160 rounded px-10 mt-20 text-3xl font-bold bg-orange-600">
          Tracking Orders
        </h1>
        <div className="absolute w-[90vw] flex mx-10 mt-40 h-[40vw]">
          {" "}
          <img
            className="border-r-4 px-10 w-[60vw] h-[30vw] "
            src="src/components/uploads/map.png"
          ></img>
          <div className="m-5 p-10 border-2 min-h-100 bg-orange-600 shadow-xl shadow-black">
            <h1 className="font-bold text-center text-3xl p-3 border-b-2 border-dotted">
              Recipet
            </h1>
            <h1 className="text-2xl p-2"> Name:Abdo Sayed </h1>
            <h1 className="text-2xl p-2"> Location:Helwan</h1>
            <h1 className="text-2xl p-2"> Destination:Alexandria </h1>
            <h1 className="text-2xl p-2">Delivery Number: 010369908</h1>
            <h1 className="text-2xl p-2">Order Weight: 4.9 kg</h1>
            <h1 className="text-2xl p-2">Order Cost : 1500.00 EGP</h1>
            <h1 className="border-b-2 text-2xl p-2">
              Transportation: 900.00 EGP
            </h1>
            <h1 className="font-bold text-xl mt-2">Total Cost : 2400.00 EGP</h1>
            <div className="flex"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrackOrder;
