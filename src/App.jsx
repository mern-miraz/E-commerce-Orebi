import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home"
import Journal from "./pages/Journal";
import Shop from "./pages/Shop";
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
