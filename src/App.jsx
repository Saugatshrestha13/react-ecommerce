import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pay from "./pages/Pay";
import Cart from "./pages/Cart";
import Estimation from "./pages/Estimation";

const App = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/products" element={<ProductList/>}/>
            <Route path="/payment" element={<Pay/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/estimation" element={<Estimation/>}/>
        </Routes>
    )
}

export default App
