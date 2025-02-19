import { createBrowserRouter } from "react-router-dom"
import RootLayout from "./components/layout/RootLayout"
import RootBoundary from "./error-boundary"
import LandingPage from "./views/landing"

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <RootBoundary />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
])

export default router
