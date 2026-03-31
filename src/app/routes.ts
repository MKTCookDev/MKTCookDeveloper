import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Landing } from "./pages/Landing";
import { Catalog } from "./pages/Catalog";
import { CourseDetail } from "./pages/CourseDetail";
import { Cart } from "./pages/Cart";
import { StudentDashboard } from "./pages/StudentDashboard";
import { AdminDashboard } from "./pages/AdminDashboard";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { About } from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Landing },
      { path: "catalog", Component: Catalog },
      { path: "course/:id", Component: CourseDetail },
      { path: "cart", Component: Cart },
      { path: "dashboard", Component: StudentDashboard },
      { path: "admin", Component: AdminDashboard },
      { path: "about", Component: About },
    ],
  },
]);