import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'devicon/devicon.min.css';
import { 
  createRouter, 
  RouterProvider,
} from '@tanstack/react-router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
// Importa el árbol de rutas generado automáticamente
import { routeTree } from './routeTree.gen'

const queryClient = new QueryClient()

AOS.init({
  duration: 1200,
  easing: 'ease-out-cubic',
  once: true,
})

// Crea la instancia del router
const router = createRouter({ routeTree, context: {
    auth: { isAuthenticated: false } // Esto lo sincronizas con tu hook o contexto de React v19
  }, })


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* El QueryClientProvider debe envolver al RouterProvider */}
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
