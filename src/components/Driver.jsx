import React from "react";
import { Link } from "react-router-dom";

function Driver() {
  return (
    <>
      <div className="w-[99vw] min-h-screen">
        <h1 className="text-3xl text-center mt-30 bg-orange-400">
          Driver Dashboard
        </h1>
        <div className="w-fit mx-90 mt-20">
          <table className="border-2 text-center items-center justify-center">
            <thead className="border-2">
              <tr>
                <th className="outline  px-5">Order No</th>
                <th className="outline  px-5">location</th>
                <th className="outline px-5">Destination</th>
                <th className="outline px-5">Distance</th>
                <th className="outline px-5">Customer Number</th>
                <th className="outline px-5">Package Weight</th>
              </tr>
            </thead>
            <tbody className="outline px-5">
              <tr className="outline px-5">
                <th className="outline px-5">1</th>
                <td className="outline px-5">Giza</td>
                <td className="outline px-5">Helwan</td>
                <td className="outline px-5">25 KM</td>
                <td className="outline px-5">01200063681</td>
                <td className="outline px-5">900 gm</td>
                <td className="outline px-5">
                  <div className="flex justify-center">
                    <button className="p-1 m-1 bg-red-600 text-white rounded-xl hover:scale-105 hover:bg-red-300">
                      Refuse
                    </button>
                    <button className="p-1 m-1 bg-green-600 text-white rounded-xl hover:scale-105 hover:bg-green-300">
                      Accept
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="outline px-5">
                <th className="outline px-5">2</th>
                <td className="outline px-5">Qena</td>
                <td className="outline px-5">Sharm EL- Sheikh</td>
                <td className="outline px-5">725 KM</td>
                <td className="outline px-5">0111003248</td>
                <td className="outline px-5">10 KG</td>
                <div className="flex justify-center">
                  <button className="p-1 m-1 bg-red-600 text-white rounded-xl hover:scale-105 hover:bg-red-300">
                    Refuse
                  </button>
                  <button className="p-1 m-1 bg-green-600 text-white rounded-xl hover:scale-105 hover:bg-green-300">
                    Accept
                  </button>
                </div>
              </tr>
              <tr className="outline px-5">
                <th className="outline px-5">3</th>
                <td className="outline px-5">Alexandria</td>
                <td className="outline px-5">Cairo</td>
                <td className="outline px-5">430 KM</td>
                <td className="outline px-5">0114928889</td>
                <td className="outline px-5">2 KG</td>
                <div className="flex justify-center">
                  <button className="p-1 m-1 bg-red-600 text-white rounded-xl hover:scale-105 hover:bg-red-300">
                    Refuse
                  </button>
                  <button className="p-1 m-1 bg-green-600 text-white rounded-xl hover:scale-105 hover:bg-green-300">
                    Accept
                  </button>
                </div>
              </tr>
              <tr className="outline px-5">
                <th className="outline px-5">4</th>
                <td className="outline px-5">Assiut</td>
                <td className="outline px-5">Elbahreen</td>
                <td className="outline px-5">650.2 KM</td>
                <td className="outline px-5">01179903248</td>
                <td className="outline px-5">40 KG</td>
                <div className="flex justify-center">
                  <button className="p-1 m-1 bg-red-600 text-white rounded-xl hover:scale-105 hover:bg-red-300">
                    Refuse
                  </button>
                  <button className="p-1 m-1 bg-green-600 text-white rounded-xl hover:scale-105 hover:bg-green-300">
                    Accept
                  </button>
                </div>
              </tr>
              <tr className="outline px-5">
                <th className="outline px-5">5</th>
                <td className="outline px-5">Qena</td>
                <td className="outline px-5">Zagazig</td>
                <td className="outline px-5">500.8 KM</td>
                <td className="outline px-5">0103003248</td>
                <td className="outline px-5">6.8 KG</td>
                <div className="flex justify-center">
                  <button className="p-1 m-1 bg-red-600 text-white rounded-xl hover:scale-105 hover:bg-red-300">
                    Refuse
                  </button>
                  <button className="p-1 m-1 bg-green-600 text-white rounded-xl hover:scale-105 hover:bg-green-300">
                    Accept
                  </button>
                </div>
              </tr>
              <tr className="outline px-5">
                <th className="outline px-5">6</th>
                <td className="outline px-5">Damanhour</td>
                <td className="outline px-5">Qena</td>
                <td className="outline px-5">130 KM</td>
                <td className="outline px-5">0111003248</td>
                <td className="outline px-5">19.3 KG</td>
                <div className="flex justify-center">
                  <button className="p-1 m-1 bg-red-600 text-white rounded-xl hover:scale-105 hover:bg-red-300">
                    Refuse
                  </button>
                  <button className="p-1 m-1 bg-green-600 text-white rounded-xl hover:scale-105 hover:bg-green-300">
                    Accept
                  </button>
                </div>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Accpeted Orders */}

        <div className="w-full">
          <button className="translate-x-240 p-1  hover:bg-orange-300 hover:scale-105 bg-orange-500 text-white rounded-2xl m-10 ">
            <Link to="/acceptedorders">View Accepted Orders</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Driver;
