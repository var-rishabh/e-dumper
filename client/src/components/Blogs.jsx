import Navbar from "./Navbar";
import Footer from "./Footer";
import about from "../assets/images/about2.jpg"

const Blogs = () => {
    return (
        <>
            <Navbar />

            <section className="bg-white">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12 mb-8">
                        <h1 className="text-gray-900 text-3xl md:text-5xl font-extrabold mb-5">Reduce Laptops Carbon Footprint Through IT Asset Disposal?</h1>
                        <p className="text-lg font-normal text-gray-500">Laptops and computers have become a necessity in the digital age. On the other hand, laptop production, utilization, and disposal contribute to carbon emissions and environmental degradation.
                            To address this issue, IT asset disposal is one efficient approach to reduce the carbon footprint of computers. In this blog, we will look at various practical strategies to lower the carbon footprint of laptop computers.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div className="h-full bg-gray-50 border border-gray-200 rounded-lg">
                            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={about} alt="blog" />
                            <div className="p-8 md:p-12">
                                <h2 className="text-gray-900 text-3xl font-extrabold mb-2">Best react libraries around the web</h2>
                                <p className="text-lg font-normal text-gray-500 mb-4">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
                            </div>
                        </div>
                        <div className="h-full bg-gray-50 border border-gray-200 rounded-lg">
                            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={about} alt="blog" />
                            <div className="p-8 md:p-12">
                                <h2 className="text-gray-900 text-3xl font-extrabold mb-2">Best react libraries around the web</h2>
                                <p className="text-lg font-normal text-gray-500 mb-4">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
                            </div>
                        </div>
                        <div className="h-full bg-gray-50 border border-gray-200 rounded-lg">
                            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={about} alt="blog" />
                            <div className="p-8 md:p-12">
                                <h2 className="text-gray-900 text-3xl font-extrabold mb-2">Best react libraries around the web</h2>
                                <p className="text-lg font-normal text-gray-500 mb-4">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="h-full bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12">
                            <h2 className="text-gray-900 text-3xl font-extrabold mb-2">Best react libraries around the web</h2>
                            <p className="text-lg font-normal text-gray-500 mb-4">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
                        </div>
                        <div className="h-full bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12">
                            <h2 className="text-gray-900 text-3xl font-extrabold mb-2">Best react libraries around the web</h2>
                            <p className="text-lg font-normal text-gray-500 mb-4">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
};

export default Blogs;