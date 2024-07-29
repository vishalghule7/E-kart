import {BrowserRouter as Router,Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/noPage/NoPage";
import ProductInfo from "./pages/productinfo/ProductInfo";
import ScrollTop from "./components/scrolltop/ScrollTop";
import CartPages from "./pages/cart/CartPages";
import AllProduct from "./pages/allproduct/AllProduct";
import Signup from "./pages/registeration/Signup";
import Login from "./pages/registeration/Login";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProductPage from "./pages/admin/AddProductPage";
import UpdateProductPage from './pages/admin/UpdateProductPage'
import MyState from "./context/myState";
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";

const App = () => {
  return (
    <MyState>
      <Router>
        <ScrollTop/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/*" element={<NoPage/>} />
          <Route path="/productinfo" element={<ProductInfo/>} />
          <Route path="/cart" element={<CartPages/>} />
          <Route path="/allproduct" element={<AllProduct/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />

          <Route path="/user-dashboard" element={
                <ProtectedRouteForUser>
                  <UserDashboard/>
                </ProtectedRouteForUser>
          } />

          <Route path="/admin-dashboard" element={
                <ProtectedRouteForAdmin>
                 <AdminDashboard/>
                </ProtectedRouteForAdmin>
          } />

          <Route path="/addproduct" element={
                <ProtectedRouteForAdmin>
                  <AddProductPage/>
                </ProtectedRouteForAdmin>
          } />

          <Route path="/updateproduct" element={
                <ProtectedRouteForAdmin>
                  <UpdateProductPage/>
                </ProtectedRouteForAdmin>
          } />
        </Routes>
          <Toaster/>
      </Router>
    </MyState>
  )
}

export default App;