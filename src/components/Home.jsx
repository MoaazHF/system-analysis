import React from "react";
import { Bounce, Fade, Slide, Zoom } from "react-awesome-reveal";

function Home() {
  return (
    <>
      <div className="">
        {" "}
        <div className="h-screen bg-cover w-full bg-no-repeat bg-[url(https://static.vecteezy.com/system/resources/previews/004/245/900/large_2x/delivery-service-truck-3d-rendering-background-design-isolate-on-yellow-background-free-photo.jpg)]">
          <div className=" absolute items-center translate-y-75 mx-20  h-[50vw] p-10 rounded-full">
            <div className="backdrop-blur-3xl bg-black/10 border border-white/50 shadow-2xl  rounded-full px-10 ">
              <h1 className="text-white font-bold text-2xl my-10">
                Get Your
                <span className="text-yellow-400 font-extrabold text-3xl">
                  {" "}
                  Package
                </span>{" "}
                Delivered <br></br>
                <div className="mx-26">
                  <span className="text-orange-300 text-shadow-amber-950 space-x-7 text-3xl font-extrabold text-center">
                    <Zoom className="mx-6">Fast</Zoom>
                    <Bounce duration={3000}>Securely</Bounce>
                  </span>
                </div>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Container */}

      <div className="w-[80vw] mx-auto my-12">
        <Fade>
          <h1 className="text-center text-orange-500 text-3xl font-extrabold text-shadow-[--text-shadow] text-shadow">
            Why وصلها?{" "}
          </h1>
        </Fade>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-4 p-8 text-center">
          {/* Card */}
          <Fade direction="left">
            <div className="items-center justify-center  p-4 shadow-lg">
              <img
                className="w-40 h-40 mx-auto mb-4"
                src="https://static.vecteezy.com/system/resources/previews/057/350/985/non_2x/3d-cartoon-delivery-man-holding-box-png.png"
              ></img>
              <h3 className="text-red-600 font-bold">Speed & Efficiency</h3>
              <p>
                "Beat the <span className="text-red-500 font-bold">Cairo</span>{" "}
                traffic. We deliver, you relax."
              </p>
            </div>
          </Fade>
          <Fade direction="up">
            <div className="items-center justify-center  p-4 shadow-lg">
              <img
                className="w-40 h-40 mx-auto mb-4"
                src="https://cdn3d.iconscout.com/3d/premium/thumb/delivery-map-3d-icon-png-download-5229856.png"
              ></img>
              <h3 className="text-blue-500 font-bold"> Nationwide Coverage</h3>
              <p>
                "Bridging the gap between{" "}
                <span className="text-orange-600 font-bold">Alexandria</span>{" "}
                and <span className="text-orange-600 font-bold">Aswan</span>."
              </p>
            </div>
          </Fade>
          <Fade direction="right">
            <div className="items-center justify-center  p-4 shadow-lg">
              <img
                className="w-40 h-40 mx-auto mb-4"
                src="https://cdn-icons-png.freepik.com/512/9592/9592943.png"
              ></img>
              <h3 className="text-green-500 font-bold ">
                {" "}
                Reliability & Trust{" "}
              </h3>
              <p>
                "Handled with care, delivered with a{" "}
                <span className="text-yellow-400 font-bold">smile</span>."
              </p>
            </div>
          </Fade>
        </div>
      </div>
      {/* showcase */}
      <div className="w-1/2 mx-auto text-center">
        <Fade delay={500}>
          {" "}
          <h1 className="font-extrabold text-3xl text-orange-500  text-shadow-[--text-shadow] text-shadow">
            The city sleeps, but we <span className="text-red-600">don't </span>
            .<span className="text-green-600"> Open 24/7</span>.
          </h1>
        </Fade>
      </div>

      <Fade>
        <div className="my-20 bg-cover bg-no-repeat  rounded-3xl mx-auto w-[90vw] h-[50vw] bg-[url(https://img.freepik.com/premium-photo/time-delivery-with-truck-clock-logistics-copy-space-3d-illustration_522591-2285.jpg)]"></div>
      </Fade>

      {/* CustomerFeedback */}
      <Fade>
        <h1 className="text-center my-20 font-extrabold text-3xl text-orange-500  text-shadow-[--text-shadow] text-shadow ">
          Our Customers!
        </h1>
      </Fade>

      {/* Container */}
      <div className="w-[90vw] rounded-full  mx-auto my-20 bg-cover min-h-screen  bg-[url(https://cdn3.vectorstock.com/i/1000x1000/73/77/social-media-network-background-with-circles-vector-21317377.jpg)]">
        <Zoom>
          <div className="grid grid-cols-3 gap-4  p-10">
            {/* card */}
            <div className="mx-2 shadow-xl  p-10 rounded-2xl backdrop-blur-xl bg-black/20 border border-white px-10">
              <Bounce>
                <div className="flex items-center mb-10">
                  <img
                    className="w-30 rounded-full "
                    src="src/components/uploads/Marwan.png"
                  ></img>
                  <h3 className="font-bold mx-10">Marwan Ibrahim</h3>
                </div>
                <p className="text-white">
                  " Egypt's trusted choice for fast delivery,Top-tier delivery
                  at local rates. "
                </p>
                <img
                  className="mx-auto mt-3 w-10"
                  src="src/components/uploads/icons8-instagram.svg"
                ></img>
              </Bounce>
            </div>
            <div className="mx-2 shadow-xl  p-10 rounded-2xl backdrop-blur-xl bg-black/20 border border-white px-10">
              <Bounce>
                <div className="flex items-center mb-10">
                  <img
                    className="w-30 rounded-full "
                    src="src/components/uploads/Mohy_is_sleeping.jpg"
                  ></img>
                  <h3 className="font-bold mx-10">Hossam Eddin Mohy</h3>
                </div>
                <p className="text-white">
                  " Finally, a courier that actually arrives on time! Saved my
                  business. "
                </p>
                <img
                  className="mx-auto mt-3 w-10"
                  src="src/components/uploads/icons8-x-50.png"
                ></img>
              </Bounce>
            </div>
            <div className="mx-2 shadow-xl  p-10 rounded-2xl backdrop-blur-xl bg-black/20 border border-white px-10">
              <Bounce>
                <div className="flex items-center mb-10">
                  <img
                    className="w-30 rounded-full "
                    src="src/components/uploads/Mosata.jpg"
                  ></img>
                  <h3 className="font-bold mx-10">Mostafa Matter</h3>
                </div>
                <p className="text-white">
                  " Best rates for shipping to Alex. Highly recommended. "
                </p>
                <img
                  className="mx-auto mt-3 w-10"
                  src="src/components/uploads/icons8-facebook.svg"
                ></img>
              </Bounce>
            </div>
            <div className="mx-2 shadow-xl  p-10 rounded-2xl backdrop-blur-xl bg-black/20 border border-white px-10">
              <Bounce>
                <div className="flex items-center mb-10">
                  <img
                    className="w-30 rounded-full "
                    src="src/components/uploads/Hazem.jpg"
                  ></img>
                  <h3 className="font-bold mx-10">Hazem Azab</h3>
                </div>
                <p className="text-white">
                  " Shipping that doesn't break the bank,Premium service,
                  economy prices. "
                </p>
                <img
                  className="mx-auto mt-3 w-10"
                  src="src/components/uploads/icons8-instagram.svg"
                ></img>
              </Bounce>
            </div>
            <div className="mx-2 shadow-xl  p-10 rounded-2xl backdrop-blur-xl bg-black/20 border border-white px-10">
              <Bounce>
                <div className="flex items-center mb-10">
                  <img
                    className="w-30 rounded-full "
                    src="src/components/uploads/Youssef.jpg"
                  ></img>
                  <h3 className="font-bold mx-10">Youssef Hany</h3>
                </div>
                <p className="text-white">
                  " No hidden fees, just fast service,Save your pounds, not your
                  performance. "
                </p>
                <img
                  className="mx-auto mt-3 w-10"
                  src="src/components/uploads/icons8-facebook.svg"
                ></img>
              </Bounce>
            </div>
            <div className="mx-2 shadow-xl  p-10 rounded-2xl backdrop-blur-xl bg-black/20 border border-white px-10">
              <Bounce>
                <div className="flex items-center mb-10">
                  <img
                    className="w-30 rounded-full "
                    src="src/components/uploads/20250904_130532-2.jpg"
                  ></img>
                  <h3 className="font-bold mx-10">Moaaz Hassan</h3>
                </div>
                <p className="text-white">
                  " The driver was polite and handled my fragile package with
                  care. "
                </p>
                <img
                  className="mx-auto mt-3 w-10"
                  src="src/components/uploads/icons8-x-50.png"
                ></img>
              </Bounce>
            </div>
          </div>
        </Zoom>
      </div>
      {/* How it's Done! in  5  steps*/}

      <div className="w-[90vw]">
        <h1 className="text-center text-4xl font-extrabold m-30 text-orange-500 text-shadow-[--text-shadow] text-shadow">
          How it's Done!
        </h1>
        <Slide direction="left">
          <div className="w-fit grid-cols-1 mx-10 border-2 border-orange-600 shadow-2xl rounded-2xl">
            <img
              className="w-70 mx-auto h-70"
              src="https://cdn3d.iconscout.com/3d/premium/thumb/received-package-3d-icon-png-download-6713569.png"
            ></img>
            <h1 className="p-5 text-3xl font-bold mt-3">
              <span className="text-orange-500">1. </span>Takes The Order From
              the
              <span className="text-red-600"> Location</span>!
            </h1>
          </div>
        </Slide>
        <Fade direction="">
          <div className="w-100 h-100 mt-10 mx-150 border-2 border-orange-600 rounded-2xl shadow-2xl">
            <img
              className="w-90"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdQLmlGV-CWleDoxht44kxqf_q8F-NkHWKIA&s"
            ></img>
            <h1 className="p-4 text-2xl font-bold mt-10 text-center ">
              <span className="text-orange-500 ">2. </span>Sents The Order From
              <span className="text-red-600 "> Location</span> to our{" "}
              <span className="text-orange-500">warehouse</span>!
            </h1>
          </div>
        </Fade>
        <Slide direction="left">
          <div className="w-100 mt-10 mx-270 border-2 border-orange-600 rounded-2xl shadow-2xl">
            <img
              className="w-50 mx-auto"
              src="https://cdn3d.iconscout.com/3d/premium/thumb/order-sent-3d-icon-png-download-4833559.png"
            ></img>
            <h1 className="p-5 text-3xl font-bold mt-3 text-center">
              <span className="text-orange-500 ">3. </span>Packaging the order
              to make sure that it <span className="text-blue-400 "> safe</span>
              !
            </h1>
          </div>
        </Slide>
        <Fade>
          <div className="w-100  m-10 mx-150 border-2 border-orange-600 rounded-2xl shadow-2xl">
            <img
              className="w-90"
              src="https://img.pikbest.com/wp/202347/parcel-delivery-3d-illustration-of-a-being-delivered-by-agent_9771350.jpg!sw800"
            ></img>
            <h1 className="p-5 text-3xl font-bold mt-3 text-center">
              <span className="text-orange-500 ">4. </span>Sents The Order to
              the
              <span className="text-red-600 "> Location</span> you want!
            </h1>
          </div>
        </Fade>
        <Slide direction="left">
          <div className="w-100 grid-cols-1 mx-10 border-2 border-orange-600 rounded-2xl shadow-2xl m-10">
            <img
              className="w-50 mx-auto"
              src="https://thumbs.dreamstime.com/b/vector-cartoon-d-smartphone-green-yes-check-mark-button-flying-cardboard-boxes-cute-minimal-realistic-render-approved-343758088.jpg"
            ></img>
            <h2 className="p-5 text-3xl font-bold mt-3 text-center">
              <span className="text-orange-500 ">5. </span>Sent you a message
              with the delivery <span className="text-green-500 ">success</span>
              !
            </h2>
          </div>
        </Slide>
      </div>
    </>
  );
}

export default Home;
