import React from 'react'
import ReactDOM from 'react-dom/client'
import AluraFixApp from './AluraFixApp'
import { NuevoVideo } from './components/video/NuevoVideo'
import { Categoria } from './components/categoria/Categoria'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    MIRA ABAJO
    <AluraFixApp/>
    <NuevoVideo/>
    <Categoria/>

  </React.StrictMode>,
)
