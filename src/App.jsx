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
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
