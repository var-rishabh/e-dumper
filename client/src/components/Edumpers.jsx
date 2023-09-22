import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
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
            <img src="https://static.vecteezy.com/system/resources/previews/000/630/479/original/vector-trash-can-icon-symbol-illustration.jpg" alt="edumper" width="25px" height="25px" />
            <div
                style={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                    boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.2)",
                    position: "absolute",
                    top: "-60px",
                    left: "-60px",
                    display: isShown ? "inline-block" : "none",
                    text: "center",
                    padding: "5px",
                    fontSize: "12px",
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
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });
        });
        console.log(location);
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
            console.log(distance);
            return distance <= 100;
        });
        console.log(nearLocation);

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
            <div style={{ height: '80vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyAT4dxI0StYMW2LckMNthtlmCoWypl4pXI" }}
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

                <div className="container">
                    <button className="btn btn-primary" style={{ marginTop: "10px" }}
                    onClick={getNearestEdumpers}
                    >Get Nearest Edumpers</button>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Edumpers;