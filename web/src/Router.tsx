import { Route, Routes } from "react-router-dom";
import Hours from "./pages/hours";
import Login from "./pages/login";
import Order from "./pages/order/admin";
import Register from "./pages/register";
import Report from "./pages/report";
import Schedule from "./pages/schedule/admin";

export default function Router(){
  return (
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="hours" element={<Hours/>} />
        <Route path="schedule/admin" element={<Schedule/>} />
        <Route path="order/admin" element={<Order/>} />
        <Route path="report" element={<Report/>} />
      </Routes>
  );
}
