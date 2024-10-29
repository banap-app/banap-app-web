import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import MainPage from "./pages/MainPage"

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
    },
])

const App = () => {
    return <RouterProvider router={router} />
}

export default App
