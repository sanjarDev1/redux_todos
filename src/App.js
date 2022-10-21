import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Ilmiy_Darajalar from "./pages/Ilmiy_Darajalar/Ilmiy_Darajalar";
import Lavozimlar from "./pages/Lavozimlar/Lavozimlar";
import Xodimlar from "./pages/Xodimlar/Xodimlar";

const App = () => {
  return (
    <div className="container katta">
      <NavLink to={"/"}>
        <button className="btn btn-dark float-left m-1 ">Ilmiy darajalar</button>
      </NavLink>
      <NavLink to={"/positions"}>
        <button className="btn btn-dark float-left m-1 ">Lavozimlar</button>
      </NavLink>
      <NavLink to={"/employees"}>
        <button className="btn btn-dark float-left  m-1">Xodimlar</button>
      </NavLink>
      <br />
      <hr />
      <br />
      <Routes>
        
        <Route path={"/"} element={<Ilmiy_Darajalar/>} />
        <Route path={"/positions"} element={<Lavozimlar />} />
        <Route path={"/employees"} element={<Xodimlar />} />
      </Routes>
    </div>
  );
};

export default App;
