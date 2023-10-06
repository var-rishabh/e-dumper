import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import img1 from "../assets/images/rewards/1.jpg"
import img2 from "../assets/images/rewards/2.jpg"
import img3 from "../assets/images/rewards/3.jpg"
import img4 from "../assets/images/rewards/4.jpg"
import img5 from "../assets/images/rewards/5.jpg"
import img6 from "../assets/images/rewards/6.jpg"
import img7 from "../assets/images/rewards/7.jpg"
import img8 from "../assets/images/rewards/8.jpg"
import img9 from "../assets/images/rewards/9.jpg"
import img10 from "../assets/images/rewards/10.jpg"
import img11 from "../assets/images/rewards/11.jpg"
import img12 from "../assets/images/rewards/12.jpeg"

const Edumpers = () => {
    const [size, setSize] = useState("Small Electronics");
    const [item, setItem] = useState("Smartphone");
    const [weight, setWeight] = useState(0);
    const [points, setPoints] = useState(0);

    const calculatePoints = () => {
        if (size === "Small Electronics") {
            setPoints(1 * weight);
        } else if (size === "Medium Electronics") {
            setPoints(2 * weight);
        } else if (size === "Large Electronics") {
            setPoints(3 * weight);
        }
    }

    return (
        <>
            <Navbar />

            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Redeem Your Code</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Choose the type of your disposal to check the points.</p>
                    </div>
                </div>
            </section >

            <section className="text-gray-600 flex justify-center w-auto mb-5 body-font">
                <div className="flex flex-row w-1/3 justify-around items-start">
                    <div className="mr-20">
                        <div className="flex justify-start flex-col items-start">
                            <span className="mr-3">Electronics Size</span>
                            <div className="relative">
                                <select onChange={(e) => setSize(e.target.value)} className="w-64 mb-3 rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                    <option value="Small Electronics">Small Electronics</option>
                                    <option value="Medium Electronics">Medium Electronics</option>
                                    <option value="Large Electronics">Large Electronics</option>
                                </select>
                                <span className="absolute right-0 -top-3 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col items-start">
                            <span className="mr-3">Item</span>
                            <div className="relative">
                                <select onChange={(e) => setItem(e.target.value)} className="w-64 mb-3 rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                    <option value="Smartphone">Smartphone</option>
                                    <option value="Charger">Charger</option>
                                    <option value="Cables">Cables</option>
                                    <option value="Earphones">Earphones</option>
                                    <option value="Digital Camera">Digital Camera</option>
                                    <option value="Gaming Console">Gaming Console</option>
                                    <option value="DVD Player">DVD Player</option>
                                    <option value="Tablets">Tablets</option>
                                    <option value="Laptops">Laptops</option>
                                    <option value="Refrigerators">Refrigerators</option>
                                    <option value="Desktop Computer">Desktop Computer</option>
                                    <option value="Printer">Printer</option>
                                    <option value="Washing Machine">Washing Machine</option>
                                    <option value="Dishwasher">Dishwasher</option>
                                    <option value="Microwave">Microwave</option>
                                    <option value="Home Theatre">Home Theatre</option>
                                </select>
                                <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-start items-start flex-col">
                            <span className="mr-3">Number of Items</span>
                            <input onChange={(e) => setWeight(e.target.value)} type="text" value={weight} className="w-64 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" data-ms-editor="true" />
                        </div>
                        <div className="mt-5">
                            <a onClick={calculatePoints} className="w-64 flex justify-center mx-auto text-white bg-green-500 border-0 py-2 focus:outline-none hover:bg-green-600 rounded text-lg">Calculate Points</a>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-64 mr-20 mx-auto">
                        <div className="flex flex-wrap">
                            <div className="relative">
                                <label className="leading-7 text-md text-gray-600">Enter Coupon Code to verify.</label>
                                <input type="text" placeholder="xxx-xxx" id="name" name="name" className="w-full mt-3 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="mt-5 w-64">
                                <a className="flex mx-auto justify-center text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Submit</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-auto">
                        <div className="flex w-60 flex-col rounded-lg border border-gray-100 px-4 py-4 text-center">
                            <dt className="order-last text-lg font-medium text-gray-500">
                                Total Points
                            </dt>
                            <dd className="text-4xl font-extrabold text-green-600 md:text-5xl">{points}</dd>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/6 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={img1} />
                            </a>
                            <div className="mt-4">
                                <div className="flex flex-row items-center justify-between">
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Certificate</h2>
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font">1 Points</h3>
                                </div>
                                <a href="/" className="mt-2 py-2 flex rounded-lg justify-center bg-green-500 font-semibold text-white hover:bg-green-600">
                                    Reedem
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={img2} />
                            </a>
                            <div className="mt-4">
                                <div className="flex flex-row items-center justify-between">
                                    <h2 className="text-gray-900 title-font text-lg font-medium">T-Shirt</h2>
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font">3 Points</h3>
                                </div>
                                <a href="/" className="mt-2 py-2 flex rounded-lg justify-center bg-green-500 font-semibold text-white hover:bg-green-600">
                                    Reedem
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={img3} />
                            </a>
                            <div className="mt-4">
                                <div className="flex flex-row items-center justify-between">
                                    <h2 className="text-gray-900 title-font text-lg font-medium">T-Shirt</h2>
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font">3 Points</h3>
                                </div>
                                <a href="/" className="mt-2 py-2 flex rounded-lg justify-center bg-green-500 font-semibold text-white hover:bg-green-600">
                                    Reedem
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={img4} />
                            </a>
                            <div className="mt-4">
                                <div className="flex flex-row items-center justify-between">
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Poster</h2>
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font">4 Points</h3>
                                </div>
                                <a href="/" className="mt-2 py-2 flex rounded-lg justify-center bg-green-500 font-semibold text-white hover:bg-green-600">
                                    Reedem
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={img5} />
                            </a>
                            <div className="mt-4">
                                <div className="flex flex-row items-center justify-between">
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Metal Badge</h2>
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font">5 Points</h3>
                                </div>
                                <a href="/" className="mt-2 py-2 flex rounded-lg justify-center bg-green-500 font-semibold text-white hover:bg-green-600">
                                    Reedem
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={img6} />
                            </a>
                            <div className="mt-4">
                                <div className="flex flex-row items-center justify-between">
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Diary</h2>
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font">6 Points</h3>
                                </div>
                                <a href="/" className="mt-2 py-2 flex rounded-lg justify-center bg-green-500 font-semibold text-white hover:bg-green-600">
                                    Reedem
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 p-4 w-full mt-8">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={img7} />
                            </a>
                            <div className="mt-4">
                                <div className="flex flex-row items-center justify-between">
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Cap</h2>
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font">4 Points</h3>
                                </div>
                                <a href="/" className="mt-2 py-2 flex rounded-lg justify-center bg-green-500 font-semibold text-white hover:bg-green-600">
                                    Reedem
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 p-4 w-full mt-8">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={img8} />
                            </a>
                            <div className="mt-4">
                                <div className="flex flex-row items-center justify-between">
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Water Bottle</h2>
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font">9 Points</h3>
                                </div>
                                <a href="/" className="mt-2 py-2 flex rounded-lg justify-center bg-green-500 font-semibold text-white hover:bg-green-600">
                                    Reedem
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 p-4 w-full mt-8">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={img9} />
                            </a>
                            <div className="mt-4">
                                <div className="flex flex-row items-center justify-between">
                                    <h2 className="text-gray-900 title-font text-lg font-medium">T-Shirt</h2>
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font">8 Points</h3>
                                </div>
                                <a href="/" className="mt-2 py-2 flex rounded-lg justify-center bg-green-500 font-semibold text-white hover:bg-green-600">
                                    Reedem
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 p-4 w-full mt-8">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={img10} />
                            </a>
                            <div className="mt-4">
                                <div className="flex flex-row items-center justify-between">
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Hoodie</h2>
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font">12 Points</h3>
                                </div>
                                <a href="/" className="mt-2 py-2 flex rounded-lg justify-center bg-green-500 font-semibold text-white hover:bg-green-600">
                                    Reedem
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 p-4 w-full mt-8">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={img11} />
                            </a>
                            <div className="mt-4">
                                <div className="flex flex-row items-center justify-between">
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Cup</h2>
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font">10 Points</h3>
                                </div>
                                <a href="/" className="mt-2 py-2 flex rounded-lg justify-center bg-green-500 font-semibold text-white hover:bg-green-600">
                                    Reedem
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 p-4 w-full mt-8">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={img12} />
                            </a>
                            <div className="mt-4">
                                <div className="flex flex-row items-center justify-between">
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Dustbin</h2>
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font">15 Points</h3>
                                </div>
                                <a href="/" className="mt-2 py-2 flex rounded-lg justify-center bg-green-500 font-semibold text-white hover:bg-green-600">
                                    Reedem
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <Footer />
        </>
    )
};

export default Edumpers;
