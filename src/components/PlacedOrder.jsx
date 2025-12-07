import React, { useState } from "react";
import { Link } from "react-router-dom";

function PlacedOrder() {
  //useState() عبارة عن array العنصر الاول  بيكون الداتا الحالية و العنصر الثاني بيكون فانكشن هتعملها على العنصر الاول عشان تحدثه
  const [formData, setFormData] = useState({
    //البيانات دي هي اللي هنجمعها من الفورم
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    destination: "",
    progress: "",
    driver: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleForm = (e) => {
    e.preventDefault();

    // 1. Get previous orders (or empty array)
    const arrayOrder = JSON.parse(localStorage.getItem("orders")) || [];

    // 2. Add new order
    arrayOrder.push(formData);

    // 3. Save the updated array
    localStorage.setItem("orders", JSON.stringify(arrayOrder));

    alert("Order Saved!");
    console.log(arrayOrder);
  };
  return (
    <>
      {/* Order Now! */}
      {/* Container */}
      <h1 className="text-3xl  text-center  text-shadow-[--text-shadow] text-shadow font-extrabold mt-30 text-orange-500">
        Order Now!
      </h1>
      <div className="w-[90vw]   m-10 bg-orange-500 rounded-2xl">
        <div className=" p-10 mx-100 w-3/4">
          <form onSubmit={handleForm}>
            <div className="grid grid-cols-3 mb-4">
              <div className="">
                <label class="block text-sm/6 font-medium text-black">
                  First name
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="firstName"
                    autocomplete="family-name"
                    onChange={handleChange}
                    className="block w-1/2 rounded-md bg-white px-3 py-1.5   text-black border-2 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="">
                <label class="block text-sm/6 font-medium text-black">
                  Last name
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="lastName"
                    autocomplete="family-name"
                    onChange={handleChange}
                    className="block w-1/2 rounded-md bg-white px-3 py-1.5   text-black border-2 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            <div className="">
              <label class="block text-sm/6 font-medium text-black">
                Email{" "}
              </label>
              <div class="mt-2">
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  autocomplete="family-name"
                  onChange={handleChange}
                  className="block w-1/2 rounded-md bg-white px-3 py-1.5   text-black border-2 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="">
              <label class="block text-sm/6 font-medium text-black">
                Phone Number{" "}
              </label>
              <div class="mt-2">
                <input
                  type="tel"
                  name="phone"
                  placeholder="+20 11xxxxxxxx"
                  autocomplete="family-name"
                  onChange={handleChange}
                  className="block w-1/2 rounded-md bg-white px-3 py-1.5   text-black border-2 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="bg-white w-1/2 p-4 rounded-xl my-4 border-2">
              <label for="Place-select">Location </label>

              <select
                name="location"
                className="border-2"
                onChange={handleChange}
              >
                <option value="">--Please choose an option--</option>
                <option value="Giza">Giza</option>
                <option value="Cairo">Cairo</option>
                <option value="Helwan">Helwan</option>
                <option value="Alexandria">Alexandria</option>
                <option value="Qena">Qena</option>
                <option value="Sharm EL- Sheikh">Sharm EL- Sheikh</option>
              </select>
            </div>
            <div className="bg-white w-1/2 p-4 rounded-xl my-4 border-2">
              <label for="Place-select">Destination </label>

              <select
                name="destination"
                className="border-2"
                onChange={handleChange}
              >
                <option value="">--Please choose an option--</option>
                <option value="Giza">Giza</option>
                <option value="Cairo">Cairo</option>
                <option value="Helwan">Helwan</option>
                <option value="Alexandria">Alexandria</option>
                <option value="Qena">Qena</option>
                <option value="Sharm EL- Sheikh">Sharm EL- Sheikh</option>
              </select>
            </div>

            <button
              className="hover:brightness-150 cursor-pointer border-2 rounded-full p-3 bg-orange-600 text-white border-black"
              type="submit"
            >
              <Link to="/vieworder">Submit</Link>
            </button>
            <input value={"pending"} name="progress" className="hidden"></input>
            <input value={""} name="driver" className="hidden"></input>
          </form>
        </div>
      </div>
    </>
  );
}

export default PlacedOrder;
