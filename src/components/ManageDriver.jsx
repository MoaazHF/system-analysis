import React, { useState } from "react";

function ManageDriver() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const drivers = ["Tommy", "Michel", "Kareem"];

  if (!orders.length) {
    return <h1 className="text-center text-white">No assigned orders.</h1>;
  }

  const assignDriver = (index, driverName) => {
    const updatedOrders = [...orders];
    updatedOrders[index].driver = driverName;
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  // console.log(driver);

  return (
    <div className="w-[99vw] min-h-screen bg-cover  bg-[url(src/components/uploads/Manage-Driver-background.png)]">
      <div className="absolute w-full">
        <h1 className=" mt-30 bg-orange-500 font-extrabold border-4 border-black w-full text-white text-center text-3xl">
          Set Drivers
        </h1>
        <div className=" grid grid-cols-3 gap-8 p-10 min-h-[40vw]">
          {orders.map((order, index) => (
            <div
              key={index}
              className="backdrop-brightness-100 text-black backdrop-blur-3xl border-white/50 shadow-2xl rounded px-10 border-2 p-4 h-1/2 mt-20"
            >
              <h1>
                <strong>Order:{index + 1}</strong>
              </h1>
              <h1>
                <strong>Name:</strong> {order.firstName} {order.lastName}
              </h1>
              <h1>
                <strong>Email:</strong> {order.email}
              </h1>
              <h1>
                <strong>Phone:</strong> {order.phone}
              </h1>
              <h1>
                <strong>Location:</strong> {order.location}
              </h1>
              <h1>
                <strong>Destination:</strong> {order.destination}
              </h1>
              <h1>
                <strong>Driver</strong> :
              </h1>
              <select
                value={order.driver || ""}
                name="driver"
                onChange={(e) => {
                  assignDriver(index, e.target.value); //Callback FUnction
                }}
                className="border-2"
              >
                <option value="">--Select A driver--</option>
                {drivers.map((driver) => (
                  <option key={driver} value={driver}>
                    {driver}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ManageDriver;
