import Navbar from "./components/navbar/Navbar";
import Auth from "./routes/auth/Auth";
import Login from "./routes/auth/login/Login";
import Register from "./routes/auth/register/Register";
import Home from "./routes/home/Home";
import { Routes, Route } from "react-router-dom";
import Product from "./routes/product/Product";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Route>
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
