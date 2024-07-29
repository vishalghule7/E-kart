/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
    return (
        <div>
            <section className="text-gray-600 mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' >Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' >What our <span className=' text-pink-500'>customers</span> are saying</h2>

                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://imgv3.fotor.com/images/gallery/3D-male-character-portrait-made-by-Fotor-AI-face-generator.jpg" />
                                <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, molestiae laudantium quae ipsam suscipit ipsum illum error sunt? Excepturi perspiciatis repudiandae ut architecto provident. Veniam hic accusamus esse, debitis nemo vitae..</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Samarth raj</h2>
                                <p className="text-gray-500">Teacher</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-5-300x300.jpg" />
                                <p className="leading-relaxed">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, cupiditate! Distinctio eveniet quasi repellat consequuntur? Necessitatibus, reprehenderit. Placeat ullam autem maxime vel odit dolorum ratione eum! Possimus, quia!.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Mina sharma</h2>
                                <p className="text-gray-500">Doctor</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://free-ai.photo/media/400/3009/one-person-face-outdoors-caucasian-ethnicity-males-portrait-men-F100006456.jpg" />
                                <p className="leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam ipsam nihil, numquam ipsum repudiandae quod id  asperiores  quos possimus itaque. Dicta illo soluta  asperiores  molestiae ipsa asperiores quis error?.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Raj Mohan</h2>
                                <p className="text-gray-500">Develpoer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial