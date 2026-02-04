import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/global.scss'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { CookiesProvider } from 'react-cookie'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <CookiesProvider>
            <GoogleOAuthProvider clientId="650062736141-pb64o0ubh8ejek13gogejjb9t5r6sdf0.apps.googleusercontent.com">
                <App />
            </GoogleOAuthProvider>
        </CookiesProvider>
    </StrictMode>,
)
