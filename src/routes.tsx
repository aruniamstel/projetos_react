import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./assets/pages/Home";
import Simular from "./assets/pages/Simular.tsx";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route Component = { Home }  path="/" />
           <Route Component = { Simular }  path="/simular" />
       </BrowserRouter>
   )
}

export default Routes;