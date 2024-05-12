import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";
import Home from "./components/pages/Home"
import Journal from "./components/pages/Journal";
import Shop from "./components/pages/Shop";
import RootLayout from "./components/root/RootLayout";

import {
  createBrowserRouter, createRoutesFromElements, Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contacts" element={<Contacts/>}/>
    <Route path="/journal" element={<Journal/>}/>
  </Route>
))

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
