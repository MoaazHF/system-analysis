import React from "react";

function ManageCustomers() {
  return (
    <>
      <div className="bg-cover min-h-screen w-[99vw] bg-[url(src/components/uploads/manage-customers-background.png)]">
        <div className="absolute w-full">
          <h1 className="bg-black text-2xl text-orange-600  mt-30 font-extrabold text-center">
            Customer Troubleshooting!
          </h1>
          <div className="grid  grid-cols-3 mx-auto gap-2 w-[90vw]">
            <div className="bg-white rounded-2xl mt-20">
              <div className=" items-center flex p-1">
                {" "}
                <div>
                  <img
                    className="w-30 rounded-full"
                    src="src/components/uploads/abdo-Mohammad.jpg"
                  ></img>
                  <h1 className="font-bold mx-1">Abdo Mohammad</h1>
                </div>
                <p className="p-2">
                  "can you add employees that talking on mobile phone to help
                  customer with issues ?"
                </p>
              </div>{" "}
              <button className="bg-orange-600 flex rounded-full p-2 m-3 cursor-pointer hover:bg-black hover:text-orange-400">
                Contact With Customer{" "}
                <img
                  className="w-5"
                  src="src/components/uploads/phone-call-svgrepo-com.svg"
                ></img>
              </button>
            </div>
            <div className="bg-white rounded-2xl mt-20">
              <div className=" items-center flex p-1">
                {" "}
                <div>
                  <img
                    className="w-30 rounded-full"
                    src="src/components/uploads/abdo-Mohammad.jpg"
                  ></img>
                  <h1 className="font-bold mx-1">Abdo Mohammad</h1>
                </div>
                <p className="p-2">
                  "can you add employees that talking on mobile phone to help
                  customer with issues ?"
                </p>
              </div>
              <button className="bg-orange-600 flex rounded-full p-2 m-3 cursor-pointer hover:bg-black hover:text-orange-400">
                Contact With Customer{" "}
                <img
                  className="w-5"
                  src="src/components/uploads/phone-call-svgrepo-com.svg"
                ></img>
              </button>
            </div>
            <div className="bg-white rounded-2xl mt-20">
              <div className=" items-center flex p-1">
                {" "}
                <div>
                  <img
                    className="w-30 rounded-full"
                    src="src/components/uploads/abdo-Mohammad.jpg"
                  ></img>
                  <h1 className="font-bold mx-1">Abdo Mohammad</h1>
                </div>
                <p className="p-2">
                  "can you add employees that talking on mobile phone to help
                  customer with issues ?"
                </p>
              </div>{" "}
              <button className="bg-orange-600 flex rounded-full p-2 m-3 cursor-pointer hover:bg-black hover:text-orange-400">
                Contact With Customer{" "}
                <img
                  className="w-5"
                  src="src/components/uploads/phone-call-svgrepo-com.svg"
                ></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageCustomers;
