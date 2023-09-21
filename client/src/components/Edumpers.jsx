// import React from "react";

// import Navbar from "./Navbar";
// import Footer from "./Footer";

// import data from "../data";

// import "./Map.css"

// // import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


// const Edumpers = () => {

//     const { isLoaded } = useJsApiLoader({
//         id: 'google-map-script',
//         googleMapsApiKey: "AIzaSyAT4dxI0StYMW2LckMNthtlmCoWypl4pXI"
//     })

//     const center = {
//         lat: -3.745,
//         lng: -38.523
//     };

//     const [map, setMap] = React.useState(null)

//     const onLoad = React.useCallback(function callback(map) {
//         // This is just an example of getting and using the map instance!!! don't just blindly copy!

//         data.map((d) => {
//             const bounds = new window.google.maps.LatLngBounds({ lat: d.latitude, lng: d.longitude });
//             map.fitBounds(bounds);
//         });


//         setMap(map)
//     }, [])

//     const onUnmount = React.useCallback(function callback(map) {
//         setMap(null)
//     }, [])


//     return (
//         <>
//             <Navbar />

//             <div className="App">
//                 {!isLoaded ? (
//                     <h1>Loading...</h1>
//                 ) : (
//                     // <GoogleMap
//                     //     mapContainerClassName="map-container"
//                     //     center={center}
//                     //     zoom={5}
//                     // >
//                     //     {/* <Marker position={{ lat: 18.52043, lng: 73.856743 }} /> */}
//                     //     {markers.map((marker, index) => (
//                     //         <Marker key={index} position={marker} />
//                     //     ))
//                     //     }
//                     // </GoogleMap>
//                     <GoogleMap
//                         mapContainerStyle="map-container"
//                         center={center}
//                         zoom={10}
//                         onLoad={onLoad}
//                         onUnmount={onUnmount}
//                     >
//                         { /* Child components, such as markers, info windows, etc. */}
//                     </GoogleMap>
//                 )}
//             </div>

//             <Footer />
//         </>
//     )
// };

// export default Edumpers;