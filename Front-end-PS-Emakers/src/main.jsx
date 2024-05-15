import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import TelaLogin from './telas/tela_login/TelaLogin.jsx';
import TelaRegistro from './telas/tela_registro/TelaRegistro.jsx';
import TelaErro from './telas/tela_erro/TelaErro.jsx';

/*const router = createBrowserRouter([
  {
    path: "/",
    element: <TelaLogin/>,
  },
  {
    path: "registro",
    element: <TelaRegistro/>,

  },
])*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <TelaErro/>,
    children:
    [
      {
        path: "/",
        element: <TelaLogin/>,
      },
      {
        path: "registro",
        element: <TelaRegistro/>,    
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
