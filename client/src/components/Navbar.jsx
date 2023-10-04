import logo from "/logo.svg";
import profilePhoto from "../assets/images/profile.jpg"
import { useState } from "react";

const Navbar = () => {
    const [colorChange, setColorchange] = useState("");

    const changeNavbarColor = () => {
        if (window.scrollY >= 1) {
            setColorchange("bg-white shadow-md");
        }
        else {
            setColorchange("");
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <header className={"sticky top-0 z-50 text-gray-600 body-font test-nav " + colorChange}>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={logo} alt="logo" />
                    <span className="ml-3 text-xl">Green Guardian</span>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
                    <a href="/" className="mr-5 hover:text-green-600">Home</a>
                    <a href="/about" className="mr-5 hover:text-green-600">About</a>
                    <a href="/edumpers" className="mr-5 hover:text-green-600">E-Dumpers</a>
                    <a href="/blogs" className="mr-5 hover:text-green-600">Blogs</a>
                    <a href="/points" className="mr-5 hover:text-green-600">Points</a>
                </nav>
                {/* <button className="inline-flex items-center bg-gray-100 border-0 py-2 px-5 focus:outline-none hover:bg-green-300 rounded text-base mt-4 md:mt-0">
                    Login
                </button> */}
                <img className="w-10 h-10 rounded-full" src={profilePhoto} alt="Rounded avatar" />
            </div>
        </header>
    );
};

export default Navbar;
