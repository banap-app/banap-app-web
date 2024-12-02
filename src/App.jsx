import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ModalProvider } from "./context/ModalContext"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ErrorPage from "./pages/ErrorPage"
import Layout from "./pages/Layout"
import HomePage from "./pages/HomePage"
import ClientsPage from "./pages/ClientsPage"
import AnalyticsPage from "./pages/AnalyticsPage"
import ClientDetailsPage from "./pages/ClientDetailsPage"
import ToolsPage from "./pages/ToolsPage"
import ModalManager from "./components/ModalManager"
import FieldDetailsPage from "./pages/FieldDetailsPage"
import PropertyDetailsPage from "./pages/PropertyDetailsPage"

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
            { path: "/properties/details", element: <PropertyDetailsPage /> },
            {
                path: "/clients/properties/fields/details",
                element: <FieldDetailsPage />,
            },
        ],
    },
])

const App = () => {
    return (
        <ModalProvider>
            <RouterProvider router={router} />
            <ModalManager />
        </ModalProvider>
    )
}

export default App
