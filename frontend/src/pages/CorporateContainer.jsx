import { Link } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
// import 'swiper/swiper.css';
const CorporateContainer = () => {

    return (
        <div className="mt-3 bg-red-300">
            <div className="relative flex flex-col items-center sm:flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
                    <path fill="#ffffff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,154.7C672,149,768,139,864,138.7C960,139,1056,149,1152,154.7C1248,160,1344,160,1392,160L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>
                <img
                    src="https://res.cloudinary.com/glovoapp/image/fetch/f_svg,c_lpad,q_auto:low,h_80,w_117,b_transparent/https://glovoapp.com/images/corporate-container/together.svg"
                    width="117"
                    height="80"
                    role="presentation"
                    data-test-id="corporate-icon"
                    loading="lazy"
                    // className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/8"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    data-v-4a724e07=""
                />
            </div>
            {/* <h1 className="text-center mb-6 text-4xl font-bold">Let’s do it together</h1> */}
            <h1 className="text-center mt-4 sm:mt-0 mb-6 text-sm sm:text-md md:text-lg lg:text-4xl font-bold">
                Let’s do it together
            </h1>
            <div className="grid grid-cols-1 gap-3 mt-8 sm:grid-cols-3 lg:mt-8 lg:gap-x-8">
                <div className="transition-all duration-200 rounded-xl ">
                    <div className="py-10 px-9 text-center">
                        <img
                            className='mx-auto'
                            alt="Build from scratch or select prebuilt tailwind templates"
                            src="https://res.cloudinary.com/glovoapp/image/fetch/q_30,f_auto,c_lpad,dpr_1.0,h_220,w_254,b_transparent/https://glovoapp.com/images/corporate-container/rider-image.png"
                        />
                        <h3 className="mt-8 text-lg font-semibold">
                            Become a Delivey
                        </h3>
                        <p className="mt-4 text-base text-gray-900 text-md">
                            Enjoy flexibility, freedom and competitive <br />
                            earnings by delivering through AlloMedia.
                        </p>
                        <div className='mt-12'>
                            <Link to='/delivery'>
                                <button type="button" href="" className='text-center bg-emerald-600 h-12 w-40 rounded-full' data-v-8e2cabee="">
                                    <span className="font-bold text-slate-100" data-v-8e2cabee="">
                                        Register here
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="transition-all duration-200 rounded-xl ">
                    <div className="py-10 px-9 text-center">
                        <img
                            className='mx-auto'
                            alt="Build from scratch or select prebuilt tailwind templates"
                            src="https://res.cloudinary.com/glovoapp/image/fetch/q_30,f_auto,c_lpad,dpr_1.0,h_220,w_254,b_transparent/https://glovoapp.com/images/corporate-container/rider-image.png"
                        />
                        <h3 className="mt-8 text-lg font-semibold">
                            Become a partner
                        </h3>
                        <p className="mt-4 text-base text-gray-900">
                            Grow with Glovo! Our technology and user <br />
                            base can help you boost sales and unlock new <br />
                            opportunities!
                            {/* Grow with Glovo! Our technology and user
                            base can help you boost sales and unlock
                            new opportunities! */}
                        </p>
                        <div className='mt-6'>
                            <button type="button" href="" className='text-center bg-emerald-600 h-12 w-40 rounded-full' data-v-8e2cabee="">
                                <span className="font-bold text-slate-100" data-v-8e2cabee="">
                                    Register here
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="transition-all duration-200 rounded-xl ">
                    <div className="py-10 px-9 text-center">
                        <img
                            className='mx-auto'
                            alt="Build from scratch or select prebuilt tailwind templates"
                            src="https://res.cloudinary.com/glovoapp/image/fetch/q_30,f_auto,c_lpad,dpr_1.0,h_220,w_254,b_transparent/https://glovoapp.com/images/corporate-container/rider-image.png"
                        />
                        <h3 className="mt-8 text-lg font-semibold">
                            Careers
                        </h3>
                        <p className="mt-4 text-base text-gray-900">
                            Ready for an exciting new challenge? If you’re <br />
                            ambitious, humble, and love working with <br />
                            others, then we want to hear from you!<br />

                        </p>
                        <div className='mt-6'>
                            <button type="button" href="" className='text-center bg-emerald-600 h-12 w-40 rounded-full' data-v-8e2cabee="">
                                <span className="font-bold text-slate-100" data-v-8e2cabee="">
                                    Register here
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
                <path fill="#ffffff" fillOpacity="1" d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,122.7C672,128,768,160,864,176C960,192,1056,192,1152,186.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
                <path fill="#ffffff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,154.7C672,149,768,139,864,138.7C960,139,1056,149,1152,154.7C1248,160,1344,160,1392,160L1440,160L1440,280L1392,280C1344,280,1248,280,1152,280C1056,280,960,280,864,280C768,280,672,280,576,280C480,280,384,280,288,280C192,280,96,280,48,280L0,280Z"></path>
            </svg>
        </div>
    );
}

export default CorporateContainer