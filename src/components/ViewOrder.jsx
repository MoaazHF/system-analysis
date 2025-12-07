import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function ViewOrder() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-[99vw] min-h-screen bg-cover bg-[url(src/components/uploads/admin-bg.png)]">
        <h1 className="absolute translate-x-160 rounded px-10 mt-20 text-3xl bg-orange-600">
          View Order details
        </h1>
        <div className="absolute  flex w-full mt-40 h-[40vw]">
          {" "}
          <div className="translate-x-140 m-5 p-10 border-2 min-h-100 bg-orange-600 shadow-xl shadow-black">
            <h1 className="text-center text-3xl p-3 border-b-2 border-dotted">
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
            <div className="flex">
              <button
                className="bg-black text-white rounded p-1 m-1 hover:brightness-150 hover:scale-105 hover:text-red-600"
                onClick={() => {
                  navigate("/placedorder");
                }}
              >
                Keep the Order
              </button>
              <button
                className="bg-green-600 text-white rounded p-1 m-1 hover:brightness-150 hover:scale-105"
                onClick={() => {
                  alert("The Order Will Reach The Destination Soon!");
                  navigate("/track");
                }}
              >
                send the Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewOrder;
