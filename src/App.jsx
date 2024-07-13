import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import styling dari tailwind
import "../src/assets/css/tailwind.css";

//import komponen

import Home from "./pages/Home/Home";
import Pesanan from "./pages/Pesanan/Pesanan";
import Paket from "./pages/Paket/Paket";
import Icons from "./assets/css/icons";
import AdminLogin from "./pages/Admin/Login";
import AdminRegister from "./pages/Admin/Register";
import UserRoot from "./routes/UserRoot";
import NotFound from "./pages/NotFound/NotFound";
import { Dashboard } from "./pages/Admin/Dasboard";
import AddPesanan from "./pages/Admin/AddPesanan";
import AddUser from "./pages/Admin/AddPesanan";
import EditUser from "./pages/Admin/EditPesanan";
import UserList from "./pages/Admin/PesananList";

import { AuthProvider } from "./utils/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Icons />
        <Routes>
          <Route element={<UserRoot />}>
            <Route path="/" element={<Home />} />
            <Route path="/pesanan" element={<Pesanan />} />
            <Route path="/paket" element={<Paket />} />
          </Route>
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/register" element={<AdminRegister />} />
          <Route path="/admin" element={<ProtectedRoute />}>
            <Route path="" element={<AdminLogin />} />
            <Route path="pesanan/add" element={<AddPesanan />} />
            <Route path="list" element={<UserList />} />
            <Route path="pesanan/edit/:id" element={<EditUser />} />
            <Route path="pesanan" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <UserRoot />,
//     errorElement: <NotFound />,

//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "pesanan",
//         element: <Pesanan />,
//       },
//       {
//         path: "paket",
//         element: <Paket />,
//       },
//     ],
//   },
//   {
//     path: "/admin",
//     element: <AdminRoot />,
//     children: [
//       {
//         path: "/admin",
//         element: <AdminLogin />,
//       },
//       {
//         path: "pesanan",
//         element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
//       },
//       {
//         path: "add",
//         element: <AddUser />,
//       },

//       {
//         path: "list/edit/:id",
//         element: <EditUser />,
//       },
//       {
//         path: "list",
//         element: <UserList />,
//       },
//     ],
//   },
// ]);

// export default function App() {
//   return <RouterProvider router={router} />;
// }
