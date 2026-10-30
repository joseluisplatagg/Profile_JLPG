import { createFileRoute, Outlet } from '@tanstack/react-router'
import MainLayout from '../components/layouts/MainLayout'
import Home from '../components/pages/LandingPage/Home'

export const Route = createFileRoute('/__public')({
  component: MainLayout,
})