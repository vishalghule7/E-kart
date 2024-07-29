import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../../../public/logo.png'
import { useSelector } from "react-redux";

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('users'));

    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear('users');
        navigate("/login")
    }  

    const cartItems = useSelector((state)=> state.cart);


    const navList = (
        <ul className="flex space-x-3 text-gray-100 font-medium text-md px-5 ">
            <li>
                <Link to={'/'}>Home</Link>
            </li>

            <li>
                <Link to={'/allproduct'}>All Product</Link>
            </li>

            {!user ? <li>
                <Link to={'/signup'}>Signup</Link>
            </li> : ""}

            {!user ? <li>
                <Link to={'/login'}>Login</Link>
            </li> : ""}

            {user?.role === "user" && <li>
                <Link to={'/user-dashboard'}>{user.name}</Link>
            </li>}

            {user?.role === "admin" && <li>
                <Link to={'/admin-dashboard'}>{user.name}</Link>
            </li>}

            {user && 
            <li 
                className=" cursor-pointer" 
                onClick={logout}> logout
            </li>}
            

            {/* Cart */}
            <li>
                <Link to={'/cart'}>
                    Cart<ShoppingCartIcon sx={{ height: '1.2rem' }} /> ({cartItems.length})
                </Link>
            </li>
        </ul>
    )
    return (
        <nav className="bg-pink-600 z-20 sticky top-0">
            {/* main  */}
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
                {/* left  */}
                <div className="left py-3 lg:py-0">
                    <Link to={'/'}>
                    <div className="flex items-center justify-center">
                        <img src={logo} alt="E-Kart" className="w-6 h-6 mr-1" />
                    
                        <h2 className=" font-extrabold text-white font-sans text-center">
                            E-Kart
                        </h2>
                    </div>
                    
                    </Link>
                </div>

                {/* right  */}
                <div className="right flex justify-center mb-4 lg:mb-0">
                    {navList}
                </div>

                {/* Search Bar  */}
                <SearchBar />
            </div>
        </nav>
    );
}

export default Navbar;