import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pay from "./pages/Pay";

const App = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/products" element={<ProductList/>}/>
            <Route path="/payment" element={<Pay/>}/>
        </Routes>
    )
}

export default App
