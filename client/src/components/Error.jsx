import Navbar from "./Navbar";
import Footer from "./Footer";

const Error = () => {
    return (
        <>
            <Navbar />
            <section className="text-gray-600 body-font mt-36">
                <div className="container py-8 px-4 mx-auto max-h-screen-xl max-w-screen-xl lg:py-16">
                    <div className="flex -mx-4">
                        <div className="w-full px-4">
                            <div className="mx-auto max-w-[400px] text-center">
                                <h2 className="mb-2 text-[50px] font-bold leading-none text-green-400 sm:text-[80px] md:text-[100px]">
                                    404
                                </h2>
                                <h4 className="mb-3 text-[22px] font-semibold leading-tight text-green-400">
                                    Oops! This page is not found.
                                </h4>
                                <p className="mb-8 text-lg text-green-400">
                                    The page you are looking for it maybe deleted
                                </p>
                                <a
                                    href="/"
                                    className="inline-block px-8 py-3 text-base font-semibold text-center text-green-400 transition border border-green-400 rounded-lg hover:bg-green-400 hover:text-primary"
                                >
                                    Go to Home
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 left-0 flex items-center justify-between w-full h-full space-x-5 -z-10 md:space-x-8 lg:space-x-14">
                    <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]" />
                    <div className="flex w-1/3 h-full">
                        <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]" />
                        <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]" />
                    </div>
                    <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]" />
                </div>
            </section>
        </>
    );
};

export default Error;
