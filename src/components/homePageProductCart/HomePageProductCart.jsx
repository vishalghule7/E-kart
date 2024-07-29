import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import Loader from "../laoder/Loader";



const HomePageProductCard = () => {
    const navigate = useNavigate();
    const context = useContext(myContext);
    const {loading,getAllProduct}= context;
    return (
        <div className="mt-10">
            <div className="">
                <h1 className=" text-center mb-5 text-2xl font-semibold">Bestselling Products</h1>
            </div>

            <section className="text-gray-600 ">
                <div className="flex justify-center">
                {loading && <Loader/>}
                </div>
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {getAllProduct.slice(0,8).map((item, index) => {
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
                                                <button className=" bg-pink-500 hover:bg-pink-700 hover:scale-105 transition-all duration-100 ease-linear w-full text-white py-[4px] rounded-lg font-bold">
                                                    Add To Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePageProductCard;