import React, { useEffect, useState } from "react";

function ManageStatus() {
  const [orders, setOrders] = useState([]);

  const progressImages = {
    qualityAssurance:
      "src/components/uploads/quality-progress-bars-2259687.png",
    warehouse: "src/components/uploads/warehouse--progress-bars-2259687.png",
    driver: "src/components/uploads/driver-progress-bars-2259687.png",
    delivered: "src/components/uploads/delivered-progress-bars-2259687.png",
    default: "src/components/uploads/empty-progress-bars-2259687.png",
  };

  // Load orders on mount
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  // Update progress for a single order
  const updateProgress = (index, newStatus) => {
    const updated = [...orders];
    updated[index].progress = newStatus;

    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };

  return (
    <div className="w-[99vw] min-h-screen bg-cover bg-[url(src/components/uploads/manage-background.png)]">
      <h1 className="absolute mt-30 bg-orange-500 font-extrabold border-4 border-black w-full text-white text-center text-3xl">
        Manage Orders Status
      </h1>
      <div className="absolute grid grid-cols-3 mt-60 gap-10 mx-10">
        {orders.map((order, index) => (
          <div
            className="backdrop-brightness-100 text-black   backdrop-blur-3xl  border-white/50 shadow-2xl  rounded px-10 border-2 p-4"
            key={index}
          >
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

            {/* Per-order progress */}
            <div className="mt-4">
              <label>Progress: </label>
              <select
                value={order.progress || ""}
                className="border-2 ml-2 text-black"
                onChange={(e) => updateProgress(index, e.target.value)}
              >
                <option value="">--Select--</option>
                <option value="qualityAssurance">Quality Assurance</option>
                <option value="warehouse">Warehouse</option>
                <option value="driver">Driver</option>
                <option value="delivered">Delivered</option>
              </select>

              {/* Image for this order */}
              <img
                className="w-80 mt-3"
                src={progressImages[order.progress] || progressImages.default}
                alt="Progress"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageStatus;
