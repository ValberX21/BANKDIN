import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainRoutes from './routes.tsx'

const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&family=Bebas+Neue&family=Exo+2:ital,wght@0,100..900;1,100..900&family=Inter:wght@100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Orbitron:wght@400..900&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <MainRoutes />
)
