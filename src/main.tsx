import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './assets/pages/Home.tsx'
import './index.css'
import App from './App.tsx'
import ReactDOM from "react-dom/client";

/*createRoot(document.getElementById('root')!).render(
  //<StrictMode>
    <Home />
  //</StrictMode>,
)*/

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);