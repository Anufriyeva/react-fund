import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import { Navigate } from "react-router-dom";
import Login from "../pages/Login";

export const privateRoutes = [
    { path: '/about', element: <About />, exact: true },
    { path: '/posts', element: <Posts />, exact: true },
    { path: '/posts/:id', element: <PostIdPage />, exact: true },
    { path: '/error', element: <Error />, exact: true },
    { path: '*', element: <Navigate to="/error" replace={true} /> },
];

export const publicRoutes = [
    { path: '/login', element: <Login />, exact: true },
]