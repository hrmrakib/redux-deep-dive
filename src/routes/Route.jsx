import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Root from "../layouts/Root";
import About from "../pages/About";
import Service from "../pages/Service";
import Assessment from "../pages/Assessment";
import Product from "../pages/Product";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <App />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/service",
                element: <Service />
            },
            {
                path: "/product",
                element: <Product />
            },
            {
                path: "/assessment",
                element: <Assessment />
            },
        ]
    }
])

export default router