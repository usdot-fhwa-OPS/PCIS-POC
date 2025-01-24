import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import Auth from './components/authenticator/authenticator.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth>
      <App />
    </Auth>
  </StrictMode>,
)

