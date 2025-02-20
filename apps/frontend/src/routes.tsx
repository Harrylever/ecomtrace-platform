import { createBrowserRouter } from "react-router-dom"
import RootLayout from "./components/layout/RootLayout"
import RootBoundary from "./error-boundary"
import LandingPage from "./views/landing"
import AboutPage from "./views/about"

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <RootBoundary />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
])

export default router
