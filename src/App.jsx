import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home"
import Journal from "./pages/Journal";
import RootLayout from "./components/root/RootLayout";

import {
  createBrowserRouter, createRoutesFromElements, Route,
  RouterProvider,
} from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Erorr from "./pages/Erorr";


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route element={<RootLayout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
      <Route path="/journal" element={<Journal/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/*" element={<Erorr/>}/>
      </Route>
    </>
  ))

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
