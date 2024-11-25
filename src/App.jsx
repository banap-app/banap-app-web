import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ErrorPage from "./pages/ErrorPage"
import Layout from "./pages/Layout"
import HomePage from "./pages/HomePage"
import ClientsPage from "./pages/ClientsPage"
import AnalyticsPage from "./pages/AnalyticsPage"
import ClientDetailsPage from "./pages/ClientDetailsPage"
import ToolsPage from "./pages/ToolsPage"

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "/clients", element: <ClientsPage /> },
            { path: "/analytics", element: <AnalyticsPage /> },
            { path: "/tools", element: <ToolsPage /> },
            { path: "/clients/details", element: <ClientDetailsPage /> },
        ],
    },
])

const App = () => {
    return <RouterProvider router={router} />
}

export default App
