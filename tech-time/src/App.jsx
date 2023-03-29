import React from "react";
import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import RootLayouts from "./layouts/RootLayouts";





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayouts />}>
      <Route index element={<Home/>} />   
    </Route>
  )
);



function App() {

  return <RouterProvider router={router} />;
}

export default App
