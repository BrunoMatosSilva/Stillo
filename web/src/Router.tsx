import { Route, Routes } from "react-router-dom";
import Admin from "./pages/dashboard/admin";
import User from "./pages/dashboard/user";
import Login from "./pages/login";
import Register from "./pages/register";

export default function Router(){
  return (
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="dashboard/admin" element={<Admin/>} />
        <Route path="dashboard/user" element={<User/>} />
      </Routes>
  );
}
