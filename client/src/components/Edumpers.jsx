import React from "react";
import Navbar from "./Navbar";
import data from "./data";

const getEdumpers = async () => {
    return data;
}

import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => {
    const [isShown, setIsShown] = React.useState(false);
    return (
        <div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}
            style={{
                position: "relative",
            }}>
            <img width="40" height="40" src="https://img.icons8.com/fluency/48/recycle-bin.png" alt="recycle-bin" />
            <div
                style={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.2)",
                    position: "absolute",
                    top: "-60px",
                    left: "-60px",
                    display: isShown ? "inline-block" : "none",
                    text: "center",
                    padding: "8px",
                    width: "150px",
                    fontSize: "15px",
                    zIndex: "9999",
                }}>
                {text}
            </div>
        </div>
    )
};

const Edumpers = () => {
    const [edumpers, setEdumpers] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [location, setLocation] = React.useState({});
    const [nearestEdumpers, setNearestEdumpers] = React.useState(false);
    React.useEffect(() => {
        getEdumpers().then((data) => {
            setEdumpers(data);
            setLoading(false);
        });
        // get location
        navigator.geolocation.getCurrentPosition(function (position) {
            setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });
        });
        return () => {
            setEdumpers([]);
            setLoading(true);
            setLocation({});
        };


    }, []);
    const [defaultProps, setDefaultProps] = React.useState({
        center: {
            lat: 28.7041,
            lng: 77.1025
        },
        zoom: 5
    });

    const deg2rad = (deg) => {
        return deg * (Math.PI / 180);
    }

    const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2 - lat1); // deg2rad below
        var dLon = deg2rad(lon2 - lon1);
        var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) *
            Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        // Distance in km
        return R * c;
    };

    const getNearestEdumpers = async () => {
        setNearestEdumpers(true);
        // ALL THE LOCATION IN 100 KM RADIUS
        const nearLocation = edumpers.filter((edumper) => {
            const distance = getDistanceFromLatLonInKm(
                location.latitude,
                location.longitude,
                edumper.latitude,
                edumper.longitude
            );
            return distance <= 100;
        });

        setEdumpers(nearLocation);

        setDefaultProps({
            center: {
                lat: location.latitude,
                lng: location.longitude
            },
            zoom: 8
        });
    };

    return (
        <>
            <Navbar />

            <section className="bg-white-900 text-black">
                <div className="mx-auto max-w-screen-xl mt-10" >
                    <div className="mx-auto max-w-3xl text-center">
                        <h1
                            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                        >
                            Find Your Nearest E-Dumper!
                        </h1>

                        <a
                            className="mt-5 mb-5 cursor-pointer inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                            onClick={getNearestEdumpers}
                        >
                            <span className="text-sm font-medium"> Click Here </span>
                            <svg
                                className="h-5 w-5 rtl:rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                    </div>

                    <div style={{ height: '70vh', width: '100%', alignItems: "center" }}>
                        <GoogleMapReact
                            mapContainerClassName="rounded-xl"
                            bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_API_KEY }}
                            center={defaultProps.center}
                            zoom={defaultProps.zoom}
                        >
                            {edumpers?.map((edumper) => (
                                <AnyReactComponent
                                    lat={edumper.latitude}
                                    lng={edumper.longitude}
                                    text={edumper.name}
                                    key={edumper.id}
                                />
                            ))}
                        </GoogleMapReact>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Edumpers;
