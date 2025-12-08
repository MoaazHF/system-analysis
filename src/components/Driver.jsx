import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BsTruck,
  BsXCircleFill,
  BsCheckCircleFill,
  BsClipboardCheck,
} from "react-icons/bs";

function Driver() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    console.log("clicked", e.currentTarget.name);

    e.preventDefault();

    if (e.target.name === "refuse") {
      alert("The Order Has Been Refused!");
    } else {
      alert("The Order Has Been Accepted , Go Track Your Werehouse!");
      navigate("/acceptedorders");
    }
  };

  return (
    <>
      <div className="w-[99vw] min-h-screen bg-gray-100 py-10 mt-10">
        {/* Header */}
        <h1 className="text-4xl text-center font-extrabold bg-orange-500 text-white py-4 shadow-lg flex items-center justify-center gap-3">
          <BsTruck className="text-white text-4xl" />
          Driver Dashboard
        </h1>

        {/* Table Container */}
        <div className="overflow-x-auto mt-16 px-8">
          <table className="w-full text-center border border-gray-300 shadow-xl bg-white rounded-xl overflow-hidden">
            <thead className="bg-gray-200 text-lg font-semibold">
              <tr>
                <th className="p-3 border">Order No</th>
                <th className="p-3 border">Location</th>
                <th className="p-3 border">Destination</th>
                <th className="p-3 border">Distance</th>
                <th className="p-3 border">Customer Number</th>
                <th className="p-3 border">Package Weight</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>

            <tbody>
              {/* Example Rows */}
              {[
                {
                  no: 1,
                  loc: "Giza",
                  des: "Helwan",
                  dist: "25 KM",
                  phone: "01200063681",
                  weight: "900 gm",
                },
                {
                  no: 2,
                  loc: "Qena",
                  des: "Sharm EL-Sheikh",
                  dist: "725 KM",
                  phone: "0111003248",
                  weight: "10 KG",
                },
                {
                  no: 3,
                  loc: "Alexandria",
                  des: "Cairo",
                  dist: "430 KM",
                  phone: "0114928889",
                  weight: "2 KG",
                },
                {
                  no: 4,
                  loc: "Assiut",
                  des: "Elbahreen",
                  dist: "650 KM",
                  phone: "01179903248",
                  weight: "40 KG",
                },
                {
                  no: 5,
                  loc: "Qena",
                  des: "Zagazig",
                  dist: "500 KM",
                  phone: "0103003248",
                  weight: "6.8 KG",
                },
                {
                  no: 6,
                  loc: "Damanhour",
                  des: "Qena",
                  dist: "130 KM",
                  phone: "0111003248",
                  weight: "19.3 KG",
                },
              ].map((row) => (
                <tr key={row.no} className="border text-lg">
                  <td className="p-4 border">{row.no}</td>
                  <td className="p-4 border">{row.loc}</td>
                  <td className="p-4 border">{row.des}</td>
                  <td className="p-4 border">{row.dist}</td>
                  <td className="p-4 border">{row.phone}</td>
                  <td className="p-4 border">{row.weight}</td>

                  <td className="p-4 border">
                    <div className="flex justify-center gap-3">
                      {/* Refuse Button */}
                      <button
                        className="flex items-center gap-2 p-2 bg-red-600 text-white rounded-xl hover:bg-red-400 hover:scale-105 transition cursor-pointer"
                        name="refuse"
                        onClick={handleSubmit}
                      >
                        <BsXCircleFill className="text-xl" />
                        Refuse
                      </button>

                      {/* Accept Button */}
                      <button
                        className="flex items-center gap-2 p-2 bg-green-600 text-white rounded-xl hover:bg-green-400 hover:scale-105 transition  cursor-pointer"
                        name="accept"
                        onClick={handleSubmit}
                      >
                        <BsCheckCircleFill className="text-xl " />
                        Accept
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Accepted Orders Button */}
        <div className="flex justify-center mt-12">
          <Link
            to="/acceptedorders"
            className="flex items-center gap-2 py-3 px-6 bg-orange-500 text-white text-xl rounded-2xl shadow-lg hover:bg-orange-400 hover:scale-105 transition"
          >
            <BsClipboardCheck className="text-2xl" />
            View Accepted Orders
          </Link>
        </div>
      </div>
    </>
  );
}

export default Driver;
