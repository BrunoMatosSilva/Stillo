import { Route, Routes } from "react-router-dom";
import Hours from "./pages/hours";
import Login from "./pages/login";
import Order from "./pages/order/admin";
import OrderUser from "./pages/order/user";
import Profile from "./pages/profile";
import Register from "./pages/register";
import Report from "./pages/report/admin";
import ReportUser from "./pages/report/user";
import Schedule from "./pages/schedule/admin";
import ScheduleUser from "./pages/schedule/user";

export default function Router(){
  return (
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="hours" element={<Hours/>} />
        <Route path="schedule/admin" element={<Schedule/>} />
        <Route path="schedule/user" element={<ScheduleUser/>} />
        <Route path="order/admin" element={<Order/>} />
        <Route path="order/user" element={<OrderUser/>} />
        <Route path="report/admin" element={<Report/>} />
        <Route path="report/user" element={<ReportUser/>} />
        <Route path="profile/:id" element={<Profile/>} />
      </Routes>
  );
}
