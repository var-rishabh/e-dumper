import Navbar from "./Navbar";
import Footer from "./Footer";

import about1 from "../assets/images/hero2.png"
import about2 from "../assets/images/about4.jpg"

const About = () => {
    return (
        <>
            <Navbar />

            <section className="container px-20 py-10 mx-auto flex flex-wrap overflow-hidden">
                <div className="flex flex-wrap items-center justify-between -mx-4">
                    <div className="drop-shadow-xl w-full px-4 lg:w-6/12">
                        <div className="flex items-center -mx-3 sm:-mx-4">
                            <div className="w-full px-3 sm:px-4 xl:w-1/1">
                                <div className="py-3">
                                    <img
                                        src={about1}
                                        className="w-full rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 xl:w-5/12">
                        <span className="block mb-5 text-3xl font-semibold text-primary">
                            About Us
                        </span>
                        <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl">
                            Make our customers happy by giving services.
                        </h2>
                        <p className="text-xl text-body-color">
                            A Vision, passion and commitment to give greener footprints to the environment by promoting responsible e-waste management and educating individuals on the importance of e-waste disposal. <br />
                            Here we are dedicated to create a sustainable future for our planet. <br /><br />
                            Join us in taking a step towards a cleaner, safer environment by responsibly disposing of your e-waste. Use E-Waste Dumper Locator to find the nearest recycling center and contribute to a greener future.
                        </p>
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font">
                <div className="container px-20 py-24 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="xl:w-1/2 md:w-1/2 p-4 hover:drop-shadow-2xl">
                            <div className="border border-gray-200 p-8 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Our Anecdote</h2>
                                <p className="leading-relaxed text-base">
                                    At Green Guardian, our journey began with a passion for environmental conservation and a deep apprehension for the escalating problem of electronic waste. <br />
                                    In collaboration with the Ministry of Environment, our platform was born out of the desire to bridge the gap between e-waste generation and responsible disposal.
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/2 md:w-1/2 p-4 hover:drop-shadow-2xl">
                            <div className="border border-gray-200 p-8 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                                    </svg>
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Our Mission</h2>
                                <p className="leading-relaxed text-base">
                                    Our mission is clear, to raise awareness about the hazards of improper e-waste disposal, facilitate easy access to recycling facilities, and reward individuals for making Eco-conscious choices. <br />
                                    Through innovative solutions and educational resources, we aim to empower you to make a positive change.
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/2 md:w-1/2 p-4 hover:drop-shadow-2xl">
                            <div className="border border-gray-200 p-8 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Our Vision</h2>
                                <p className="leading-relaxed text-base">
                                    Green Guardian dream of a future where every e-device is recycled responsibly, reducing the burden on our environment and conserving precious natural resources. <br />
                                    Together, we can turn the tide on e-waste and leave a legacy of environmental stewardship for generations to come.< br />
                                    Remember, every small action counts in preserving our planet for generations to come. Start today!
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/2 md:w-1/2 p-4 hover:drop-shadow-2xl">
                            <div className="border border-gray-200 p-8 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                                    </svg>
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">What Sets Us Apart</h2>
                                <p className="leading-relaxed text-base">
                                    Expertise: Our team comprises experts in environmental science, technology, and sustainable practices, ensuring that our content and services are accurate and reliable. <br />
                                    Community Engagement: We believe that collective action is the key to success. We actively engage with our community to foster a sense of responsibility and inspire change.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap w-full">
                        <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <circle cx="12" cy="5" r="3"></circle>
                                        <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
                                    <p className="leading-relaxed">Search for Nearest E-Waste Disposal Center from the website by entering your location on the map.</p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2</h2>
                                    <p className="leading-relaxed"> Browse and select the recycling center that is most convenient for you. </p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 3</h2>
                                    <p className="leading-relaxed">Visit the chosen recycling center and responsibly dispose of your e-waste items. Ensure you follow guidelines provided by the recycling center.</p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 4</h2>
                                    <p className="leading-relaxed">Receive Points Based on Recycled Metals</p>
                                </div>
                            </div>
                            <div className="flex relative">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">FINISH</h2>
                                    <p className="leading-relaxed">Redeem Points for Valuable Items and get your certificate to contribute to a sustainable environment </p>
                                </div>
                            </div>
                        </div>
                        <img className="drop-shadow-2xl lg:w-3/5 md:w-1/2 object-cover object-center rounded-full md:mt-0 mt-12" src={about2} alt="step" />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
};

export default About;