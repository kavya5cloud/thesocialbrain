import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.12),_transparent_45%),radial-gradient(circle_at_bottom_left,_rgba(147,51,234,0.12),_transparent_40%)]" />
      <div className="relative z-10 flex min-h-screen flex-col md:flex-row">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Topbar />
          <main className="flex-1 p-4 md:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
