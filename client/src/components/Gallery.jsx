import image1 from "../assets/images/test1.jpg"
import image2 from "../assets/images/test2.jpg"
import image3 from "../assets/images/test3.jpg"
import image4 from "../assets/images/test4.jpg"
import image5 from "../assets/images/test5.jpg"
import image6 from "../assets/images/test6.jpg"

const Gallery = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex w-full mb-5 ml-2 flex-wrap">
                        <h1 className="text-4xl font-medium title-font text-gray-900">Example of E-waste</h1>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src={image4} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src={image5} />
                            </div>
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src={image2} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src={image1} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src={image6} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src={image3} />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%)] -z-10 transform-gpu overflow-hidden blur-1xl "
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%)] aspect-[720/480] -translate-x-1/1 bg-gradient-to-tr from-[#50ffdf] to-[#228003] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[70rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </section>
        </>
    )
};

export default Gallery;
