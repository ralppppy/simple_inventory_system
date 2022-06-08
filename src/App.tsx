import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./routing/PrivateRoute";

import { Home } from "./modules/Home/views";
import { AdminLayout } from "./modules/Layout/views";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<PrivateRoute Layout={AdminLayout} Component={Home} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
