import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Admin from "./components/Admin";
import ManageStatus from "./components/ManageStatus";
import PlacedOrder from "./components/PlacedOrder";
import ManageDriver from "./components/ManageDriver";
import ManageCustomers from "./components/ManageCustomers";
import Driver from "./components/Driver";
import DriverAcceptedOrders from "./components/DriverAcceptedOrders";
import TrackOrder from "./components/TrackOrder";
import ViewOrder from "./components/ViewOrder";
import Register from "./components/Register";
import About from "./components/About";
import Documentation from "./components/Documentation";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        {" "}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/managestatus" element={<ManageStatus />} />
        <Route path="/placedorder" element={<PlacedOrder />} />
        <Route
          path="/managedriver"
          element={<ManageDriver></ManageDriver>}
        ></Route>
        <Route
          path="/managecustomers"
          element={<ManageCustomers></ManageCustomers>}
        ></Route>
        <Route path="/driver" element={<Driver></Driver>}></Route>
        <Route
          path="/acceptedorders"
          element={<DriverAcceptedOrders></DriverAcceptedOrders>}
        ></Route>
        <Route path="/track" element={<TrackOrder></TrackOrder>}></Route>
        <Route path="/vieworder" element={<ViewOrder></ViewOrder>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/doc" element={<Documentation></Documentation>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
