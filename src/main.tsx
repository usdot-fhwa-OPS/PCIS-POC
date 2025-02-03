import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { StrictMode } from 'react'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

import App from './App.tsx'
import Auth from './components/authenticator/authenticator.tsx'
import './index.css'




// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <Auth>
        <RouterProvider router={router} />
      </Auth>
    </StrictMode>,
  )
}
