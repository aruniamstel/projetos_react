import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import Routes from "./routes.tsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import viteLogo from '/vite.svg'
import './App.css'
import Home from './assets/pages/Home.tsx'
import Simular from './assets/pages/Simular.tsx'
import { MeuProvider } from './assets/pages/MeuContexto.tsx';





function App() {
  

 // const val = input.val.replace(/\D/g, ''); // Remove caracteres não numéricos
  //input.val = Number(valor).toLocaleString('pt-BR'); // Formata com separadores

  return (
   <div>
    <MeuProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/simular" element={<Simular />} />

      </Routes>
    </BrowserRouter>
    </MeuProvider>
   
   </div>
  )
}

export default App
