import React from "react";
import Navbar from "./Navbar";
import data from "./data";

const getEdumpers = async () => {
    return data;
}

import GoogleMapReact from 'google-map-react';
const AnyReactComponent = (props) => {
    const [isShown, setIsShown] = React.useState(false);
    const { text } = props;

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
        var R = 6371;
        var dLat = deg2rad(lat2 - lat1);
        var dLon = deg2rad(lon2 - lon1);
        var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) *
            Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    };

    const getNearestEdumpers = async () => {
        setNearestEdumpers(true);
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
                    <div className="mx-auto max-w-1xl text-left">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                            Find your nearest Edumpers
                        </h1>
                        <div className="relative text-green-400 rounded py-3 text-md leading-6">
                            Make sure your location is on.
                        </div>
                    </div>
                    <a
                        className="mb-4 cursor-pointer inline-flex items-left gap-2 rounded border border-indigo-600 bg-indigo-600 px-5 py-2 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
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

                    <div style={{ height: '60vh', width: '100%' }}>
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
