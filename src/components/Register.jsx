import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const demoAdminEmail = "admin@email.com";
  const demoAdminPassword = "admin123";

  const demoUserEmail = "user@email.com";
  const demoUserPassword = "user123";

  const demoDriverEmail = "driver@email.com";
  const demoDriverPassword = "driver123";

  const handleLogin = (e) => {
    e.preventDefault();

    //demo login validation to make sure how system works
    if (email === demoAdminEmail && password === demoAdminPassword) {
      navigate("/admin");
    } else if (email === demoUserEmail && password === demoUserPassword) {
      navigate("/placedorder");
    } else if (email === demoDriverEmail && password === demoDriverPassword) {
      navigate("/Driver");
    } else {
      alert("Invalid email or password");
    }
  };
  return (
    <>
      <div className="min-h-screen w-[99vw]">
        <div className=" bg-[url(src/components/uploads/orderNow_bg.png)] bg-cover h-screen w-full">
          <div className="mx-40 mt-50 absolute   rounded-2xl  h-[24vw]  lg:translate-x-1/2 backdrop-blur-2xl  border-white/50 shadow-2xl px-10 ">
            <h1
              className="text-center font-extrabold text-4xl text-orange-700
             text-login-shadow text-shadow-(--text-login-shadow)"
            >
              Register
            </h1>
            <form className="p-10" onSubmit={handleLogin}>
              <div className="p-5 flex flex-col">
                {" "}
                <label className="text-white">Email</label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-2 p-1 rounded-sm bg-white"
                ></input>
              </div>

              <div className=" p-5 flex flex-col">
                {" "}
                <label className="text-white">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="border-2 rounded-sm p-1 bg-white"
                ></input>
              </div>
              <div className="mx-10 px-10 grid grid-cols-2 gap-10   items-center">
                <a className="" href="#">
                  Forget Password?
                </a>
                <button
                  type="submit"
                  className=" bg-orange-500 mx-auto  text-white  p-2 rounded hover:bg-black hover:text-white transition ease-in-out duration-300 box-shadow shadow-2xl"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
