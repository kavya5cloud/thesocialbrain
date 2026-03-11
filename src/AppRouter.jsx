"use client"

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import AppLayout from "./layout/AppLayout"
import Dashboard from "./pages/Dashboard"
import Generator from "./pages/Generator"
import Brain from "./pages/Brain"
import Analytics from "./pages/Analytics"
import Scheduler from "./pages/Scheduler"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/generator" element={<Generator />} />
          <Route path="/brain" element={<Brain />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/scheduler" element={<Scheduler />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
