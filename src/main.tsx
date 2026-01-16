import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { CookiesProvider } from 'react-cookie'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <CookiesProvider>
            <GoogleOAuthProvider clientId="513838793862-gfa9g1snl74coi736ggti5nd9uglh66k.apps.googleusercontent.com">
                <App />
            </GoogleOAuthProvider>
        </CookiesProvider>
    </StrictMode>,
)
