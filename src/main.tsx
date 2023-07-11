import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import { SysLogo } from './components/Icons.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <nav className='flex justify-between items-center px-5 py-2 mb-2 space-x-6'>
      <SysLogo className='w-48 h-14'/>
      <span className='text-3xl truncate'>{import.meta.env.VITE_PROJECT_NAME || ''}</span>
    </nav>
    <main className='px-2'>
      <section className='max-w-7xl mx-auto rounded-lg bg-neutral-200 text-black p-1'>
        <App />
      </section>
    </main>
  </React.StrictMode>,
)
