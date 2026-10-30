import { createFileRoute } from '@tanstack/react-router'
import Services from '../../components/pages/LandingPage/Services'

export const Route = createFileRoute('/__public/services')({
  component: Services,
})
