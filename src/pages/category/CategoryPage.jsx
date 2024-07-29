import React, { useContext, useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import { useNavigate, useParams } from 'react-router-dom'
import myContext from '../../context/myContext';
import Loader from '../../components/laoder/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../../redux/cartSlice';
import toast from 'react-hot-toast';

const CategoryPage = () => {
    const {categoryname}= useParams();
    
    const context = useContext(myContext);
    const {getAllProduct, loading}= context;

    const navigate = useNavigate();

    const filterProduct = getAllProduct.filter((obj) => obj.category.includes(categoryname.toLocaleLowerCase()));
    // console.log(filterProduct)
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addCart = (item) => {
        // console.log(item)
        dispatch(addToCart(item));
        toast.success("Add to cart")
    }

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Delete cart")
    }

    // console.log(cartItems)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])

  return (
    <Layout>
        <div className=' mt-10'>
            <div className="">
                        <h1 className=" text-center mb-5 text-2xl font-semibold first-letter:uppercase">{categoryname}</h1>
            </div>

            {loading ?
                <div className=' flex justify-center mt-16'>
                    <Loader/>
                </div>

                :
                <section className="text-gray-600 ">

                
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex justify-center flex-wrap -m-4">
                        {filterProduct.length > 0 ? 

                        <>
                             {filterProduct.map((item, index) => {
                            const {id, title, price,productImageUrl } = item;
                            return (
                                <div key={index} className="p-4 w-full md:w-1/4">
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-lg cursor-pointer">
                                            <img
                                                onClick={()=> navigate(`/productinfo/${id}`)}
                                                className="lg:h-80 object-contain hover:scale-105 transition-all duration-100 ease-linear h-96 w-full"
                                                src={productImageUrl}
                                                alt="img"
                                            />
                                        <div className="flex flex-col p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                                                E-kart
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                ₹{price}
                                            </h1>

                                            <div className="flex justify-center ">
                                            {cartItems?.some((p)=> p.id === item.id) 
                                                  ?
                                                  <button onClick={()=> deleteCart(item)} className=" bg-pink-500 hover:bg-pink-700 hover:scale-105 transition-all duration-100 ease-linear w-full text-white py-[4px] rounded-lg font-bold">
                                                    Remove From Cart
                                                  </button>

                                                  :
                                                  <button onClick={() => addCart(item)} className=" bg-pink-500 hover:bg-pink-700 hover:scale-105 transition-all duration-100 ease-linear w-full text-white py-[4px] rounded-lg font-bold">
                                                    Add To Cart
                                                </button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        </>

                        :
                        <div>
                            <div className="flex  justify-center">
                                <img className=" mb-2" src="https://cdn-icons-png.flaticon.com/128/2748/2748614.png" alt="" />
                             </div>
                             <h1 className=" text-black text-xl">No {categoryname} product found</h1>
                        </div>   

                    }
                        
                    </div>
                </div>
            </section>
            }
        
        </div>
    </Layout>
  )
}

export default CategoryPage