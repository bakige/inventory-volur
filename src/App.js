import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/index";
import Home from "./components/Home";
import Inventory from "./components/Inventory";

import { useDispatch, useSelector } from "react-redux";
import { fetch_categories } from "./store/inventory/actions";

function App() {
  const dispatch = useDispatch();
  dispatch(fetch_categories());

  const categories = useSelector((state) => state.categories);

  return (
    <Router>
      <div className="flex">
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route
            exact
            path="/inventory"
            element={<Inventory categories={categories} />}
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
