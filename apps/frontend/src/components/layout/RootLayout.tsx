import { Outlet } from "react-router-dom"
import Header from "../header"

export default function RootLayout() {
  return (
    <div id="root__layout">
      <Header />
      <Outlet />
    </div>
  )
}
