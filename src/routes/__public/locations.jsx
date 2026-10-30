import { createFileRoute } from '@tanstack/react-router'
import Locations from '../../components/pages/LandingPage/Locations'

export const Route = createFileRoute('/__public/locations')({
  component: Locations,
})

