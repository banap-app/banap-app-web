import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import MainPage from "./pages/MainPage"
import HomePage from "./pages/HomePage"
import ErrorPage from "./pages/ErrorPage"

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
        element: <MainPage />,
        errorElement: <ErrorPage />,
        children: [{ index: true, element: <HomePage /> }],
    },
])

const App = () => {
    return <RouterProvider router={router} />
}

export default App
