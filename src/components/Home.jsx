import React, { useEffect } from "react";
import { Fade, Slide, Zoom, Bounce } from "react-awesome-reveal";
import { BiSolidTruck } from "react-icons/bi";
import {
  BsCarFront,
  BsFacebook,
  BsInstagram,
  BsSignTurnRight,
  BsTwitterX,
  BsX,
} from "react-icons/bs";

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth", duration: 10 });
  }, []);

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section - Full screen with overlay */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0  from-black/40 via-black/20 to-black/60">
          <video
            className="w-[99vw]"
            loop
            autoPlay
            muted
            src="src/components/uploads/Stylized_Delivery_Truck_Animation_Generation.mp4"
          ></video>

          <div className="absolute inset-0 opacity-30"></div>
        </div>

        {/* Hero Content - Centered */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center max-w-4xl">
            <div className="backdrop-blur-xl bg-white/10 border border-white/30 shadow-2xl rounded-3xl px-12 py-16">
              <Zoom>
                <h1 className="text-white font-bold text-5xl md:text-6xl mb-6">
                  Get Your{" "}
                  <span className="text-yellow-400 font-extrabold">
                    Package
                  </span>
                  <br />
                  Delivered
                </h1>
                <div className="flex items-center justify-center gap-8 text-4xl font-extrabold mt-8">
                  <span className="text-orange-300 animate-pulse">Fast</span>
                  <span className="text-orange-300">•</span>
                  <span className="text-orange-300 animate-bounce">
                    Securely
                  </span>
                </div>
              </Zoom>
            </div>
          </div>
        </div>

        {/*Scrooll ICon */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/70 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Why Section - Improved spacing */}

      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <Fade>
            <h2 className="text-center text-orange-500 text-5xl font-extrabold mb-16">
              Why وصلها?
            </h2>
          </Fade>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Slide direction="up">
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ">
                <div className="bg-red-50 rounded-full w-40 h-40 mx-auto mb-6 flex items-center justify-center">
                  <div className="text-6xl">
                    <img src="src/components/uploads/3d-cartoon-delivery-man-holding-box-png.webp"></img>
                  </div>
                </div>
                <h3 className="text-red-600 font-bold text-xl mb-4 text-center">
                  Speed & Efficiency
                </h3>
                <p className="text-gray-600 text-center">
                  Beat the <span className="text-red-500 font-bold">Cairo</span>{" "}
                  traffic. We deliver, you relax.
                </p>
              </div>
            </Slide>

            {/* Card 2 */}
            <Zoom>
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="bg-blue-50 rounded-full w-40 h-40 mx-auto mb-6 flex items-center justify-center">
                  <div className="text-6xl">
                    <img src="src/components/uploads/delivery-map-3d-icon-png-download-5229856.png"></img>
                  </div>
                </div>
                <h3 className="text-blue-500 font-bold text-xl mb-4 text-center">
                  Nationwide Coverage
                </h3>
                <p className="text-gray-600 text-center">
                  Bridging the gap between{" "}
                  <span className="text-orange-600 font-bold">Alexandria</span>{" "}
                  and <span className="text-orange-600 font-bold">Aswan</span>.
                </p>
              </div>
            </Zoom>
            {/* Card 3 */}
            <Slide direction="up">
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="bg-green-50 rounded-full w-40 h-40 mx-auto mb-6 flex items-center justify-center">
                  <div className="text-6xl">
                    <img src="src/components/uploads/9592943.png"></img>
                  </div>
                </div>
                <h3 className="text-green-500 font-bold text-xl mb-4 text-center">
                  Reliability & Trust
                </h3>
                <p className="text-gray-600 text-center">
                  Handled with care, delivered with a{" "}
                  <span className="text-yellow-400 font-bold">smile</span>.
                </p>
              </div>
            </Slide>
          </div>
        </div>
      </section>

      {/*Open 24/7 */}
      <Fade>
        <section className="py-20 bg-gradient-to-r from-orange-200 via-orange-500 to-red-500">
          <div className="max-w-6xl mx-auto text-center px-4">
            <h2 className="text-white font-extrabold text-4xl md:text-5xl drop-shadow-lg">
              The city sleeps, but we{" "}
              <span className="text-yellow-300">don't...</span>
              <br />
              <span className="text-6xl mt-4 inline-block">Open 24/7</span>
            </h2>
          </div>
        </section>
      </Fade>
      {/* How It Works - Timeline Style */}
      <section className="py-24 px-4 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-5xl mx-auto">
          <Fade>
            <h2 className="text-center text-orange-500 text-5xl font-extrabold mb-20">
              How It's Done!
            </h2>
          </Fade>
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200"></div>

            {/* Step1 */}
            <div className="relative mb-16 md:mb-24">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 md:text-right">
                  <Fade>
                    <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
                      <span className="text-orange-500 text-5xl font-bold">
                        1
                      </span>
                      <h3 className="text-2xl font-bold mt-4 mb-2">
                        Receive Order
                      </h3>
                      <p className="text-gray-600">
                        Takes the order from the{" "}
                        <span className="text-red-600 font-semibold">
                          location
                        </span>
                      </p>
                    </div>
                  </Fade>
                </div>
                <div className="hidden md:block w-8 h-8 bg-orange-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="md:w-1/2">
                  <Slide direction="up">
                    <div className="text-8xl">📦</div>
                  </Slide>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative mb-16 md:mb-24">
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/2 md:text-left">
                  <Fade>
                    <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
                      <span className="text-orange-500 text-5xl font-bold">
                        2
                      </span>
                      <h3 className="text-2xl font-bold mt-4 mb-2">
                        Transport to Warehouse
                      </h3>
                      <p className="text-gray-600">
                        Sends the order to our{" "}
                        <span className="text-orange-500 font-semibold">
                          warehouse
                        </span>
                      </p>
                    </div>
                  </Fade>
                </div>
                <div className="hidden md:block w-8 h-8 bg-orange-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="md:w-1/2 flex justify-end">
                  <Slide>
                    <div className="text-8xl text-blue-500">
                      <BiSolidTruck size={100} className=""></BiSolidTruck>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>

            {/* Step 3 - Right */}
            <div className="relative mb-16 md:mb-24">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 md:text-right">
                  <Fade>
                    <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
                      <span className="text-orange-500 text-5xl font-bold">
                        3
                      </span>
                      <h3 className="text-2xl font-bold mt-4 mb-2">
                        Secure Packaging
                      </h3>
                      <p className="text-gray-600">
                        Making sure it's{" "}
                        <span className="text-blue-400 font-semibold">
                          safe
                        </span>
                      </p>
                    </div>
                  </Fade>
                </div>
                <div className="hidden md:block w-8 h-8 bg-orange-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="md:w-1/2">
                  <Slide direction="up">
                    <div className="text-8xl">📮</div>
                  </Slide>
                </div>
              </div>
            </div>

            {/* Step 4 - Left */}
            <div className="relative mb-16 md:mb-24">
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/2 md:text-left">
                  <Fade>
                    <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
                      <span className="text-orange-500 text-5xl font-bold">
                        4
                      </span>
                      <h3 className="text-2xl font-bold mt-4 mb-2">
                        Deliver to You
                      </h3>
                      <p className="text-gray-600">
                        Sends to your{" "}
                        <span className="text-red-600 font-semibold">
                          location
                        </span>
                      </p>
                    </div>
                  </Fade>
                </div>
                <div className="hidden md:block w-8 h-8 bg-orange-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="md:w-1/2 flex justify-end">
                  <Slide>
                    <div className="text-8xl">🏠</div>
                  </Slide>
                </div>
              </div>
            </div>

            {/* Step 5 - Right */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 md:text-right">
                  <Fade>
                    <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
                      <span className="text-orange-500 text-5xl font-bold">
                        5
                      </span>
                      <h3 className="text-2xl font-bold mt-4 mb-2">
                        Confirmation
                      </h3>
                      <p className="text-gray-600">
                        Delivery{" "}
                        <span className="text-green-500 font-semibold">
                          success
                        </span>{" "}
                        message
                      </p>
                    </div>
                  </Fade>
                </div>
                <div className="hidden md:block w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="md:w-1/2">
                  <Slide direction="up">
                    <div className="text-8xl">✅</div>
                  </Slide>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center font-extrabold text-orange-500 mb-12">
            Our Project Workflow
          </h2>

          <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-12 shadow-xl border-2 border-orange-200">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Fade>
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-6">
                    How We Operate
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    An introduction to our project, explaining its functionality
                    and how it works. We use modern systems and efficient
                    processes to ensure your packages arrive safely and on time.
                  </p>
                </div>
              </Fade>
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl aspect-video flex items-center justify-center">
                <Zoom>
                  <video
                    controls
                    src="src/components/uploads/UML__Use_Case_Diagrams.mp4"
                    className="text-white text-4xl"
                  >
                    ▶️
                  </video>
                </Zoom>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}

      <section className="py-24 px-4 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMTZ2OEgxNnYtOGgyMHpNMjggMjR2OGgtOHYtOGg4em04LTh2OGgtOHYtOGg4eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-center text-white font-extrabold text-5xl mb-16">
            Our Customers!
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Zoom>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl hover:bg-white/15 transition-all">
                <div className="flex items-center mb-6">
                  <img
                    src="src/components/uploads/Marwan.png"
                    className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                  ></img>
                  <div className="ml-4">
                    <h4 className="font-bold text-white text-lg">
                      Marwan Ibrahim
                    </h4>
                    <div className="text-orange-400">⭐⭐⭐⭐</div>
                  </div>
                </div>
                <p className="text-gray-200 italic">
                  "Egypt's trusted choice for fast delivery, top-tier delivery
                  at local rates."
                </p>
                <div className="mt-4 text-blue-400 text-3xl">
                  <BsFacebook></BsFacebook>
                </div>
              </div>
            </Zoom>
            {/* Testimonial 2 */}
            <Zoom>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl hover:bg-white/15 transition-all">
                <div className="flex items-center mb-6">
                  <img
                    src="src/components/uploads/Mohy_is_sleeping.jpg"
                    className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                  ></img>
                  <div className="ml-4">
                    <h4 className="font-bold text-white text-lg">
                      Hossam Eddin Mohy
                    </h4>
                    <div className="text-orange-400">⭐⭐⭐</div>
                  </div>
                </div>
                <p className="text-gray-200 italic">
                  "Finally, a courier that actually arrives on time! Saved my
                  business."
                </p>
                <div className="mt-4 text-orange-600 text-3xl">
                  <BsInstagram></BsInstagram>
                </div>
              </div>
            </Zoom>
            {/* Testimonial 3 */}
            <Zoom>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl hover:bg-white/15 transition-all">
                <div className="flex items-center mb-6">
                  <img
                    src="src/components/uploads/Mosata.jpg"
                    className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                  ></img>
                  <div className="ml-4">
                    <h4 className="font-bold text-white text-lg">
                      Mostafa Matter
                    </h4>
                    <div className="text-orange-400">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                <p className="text-gray-200 italic">
                  "Best rates for shipping to Alex. Highly recommended."
                </p>
                <div className="mt-4 text-blue-500 text-3xl">
                  <BsFacebook></BsFacebook>
                </div>
              </div>
            </Zoom>
            {/* Testimonial 4 */}
            <Zoom>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl hover:bg-white/15 transition-all">
                <div className="flex items-center mb-6">
                  <img
                    src="src/components/uploads/Hazem.jpg"
                    className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                  ></img>
                  <div className="ml-4">
                    <h4 className="font-bold text-white text-lg">Hazem Azab</h4>
                    <div className="text-orange-400">⭐⭐</div>
                  </div>
                </div>
                <p className="text-gray-200 italic">
                  "Premium service, economy prices. Shipping that doesn't break
                  the bank."
                </p>
                <div className="mt-4 text-orange-600 text-3xl">
                  <BsInstagram></BsInstagram>
                </div>
              </div>
            </Zoom>
            {/* Testimonial 5 */}
            <Zoom>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl hover:bg-white/15 transition-all">
                <div className="flex items-center mb-6">
                  <img
                    src="src/components/uploads/Youssef.jpg"
                    className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                  ></img>
                  <div className="ml-4">
                    <h4 className="font-bold text-white text-lg">
                      Youssef Hany
                    </h4>
                    <div className="text-orange-400">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                <p className="text-gray-200 italic">
                  "No hidden fees, just fast service. Save your pounds, not your
                  performance."
                </p>
                <div className="mt-4 text-black text-3xl">
                  <BsTwitterX></BsTwitterX>
                </div>
              </div>
            </Zoom>
            {/* Testimonial 6 */}
            <Zoom>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl hover:bg-white/15 transition-all">
                <div className="flex items-center mb-6">
                  <img
                    src="src/components/uploads/20250904_130532-2.jpg"
                    className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                  ></img>
                  <div className="ml-4">
                    <h4 className="font-bold text-white text-lg">
                      Moaaz Hassan
                    </h4>
                    <div className="text-orange-400">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                <p className="text-gray-200 italic">
                  "The driver was polite and handled my fragile package with
                  care."
                </p>
                <div className="mt-4 text-blue-400 text-3xl">
                  <BsFacebook></BsFacebook>
                </div>
              </div>
            </Zoom>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
