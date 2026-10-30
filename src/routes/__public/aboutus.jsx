import { createFileRoute } from '@tanstack/react-router'
import Aboutus from '../../components/pages/LandingPage/Aboutus'

export const Route = createFileRoute('/__public/aboutus')({
  component: Aboutus,
})
