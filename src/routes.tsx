import { createBrowserRouter } from "react-router"
import RootLayout from "./Root"
import HomePage from "./app/home"
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
])
