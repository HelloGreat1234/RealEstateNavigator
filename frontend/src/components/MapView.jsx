import React, { useEffect } from 'react'
import { useState } from 'react';
import "mapbox-gl/dist/mapbox-gl.css"
import ReactMapGl from "react-map-gl"
import { Marker } from 'react-map-gl';
import { MdRoom } from 'react-icons/md';



const myToken  = "pk.eyJ1IjoiYXJjaGl0MTA4IiwiYSI6ImNseDNtZXl4ZDB2cGgyanF1eDZpNHQxbDkifQ.AZm4BVNOXDisTIL4I8iaFw";
const MapView = (props) => {
    const userLat = props.userLat;
    const userLong = props.userLong;
    const [newPlace, setNewPlace] = useState(null)

    const [viewPort, setViewPort] = useState({
        latitude: userLat,
        longitude: userLong,
        zoom: 8
    });
    console.log(newPlace);
    function handleClick(e){
        console.log(e.lngLat)
        const {lng, lat} = e.lngLat;
        setNewPlace(
            {
                lat: lat,
                long: lng
            }
        );
    }  

    
    function setMarker(){
        setNewPlace(
            {
                lat: userLat,
                long: userLong
            }
        );
    }

  return (
    <div style={{width: "100vh" , height : "100vh", zIndex: 999}}>
        <h1>Hello</h1>
        <ReactMapGl
        {...viewPort}
        mapboxApiAccessToken = {myToken}
        width="100%"
        height="100%"
        transitionDuration='200'
        mapStyle={"mapbox://styles/archit108/clx4v32rg00aw01qsddthbo54"}
        onViewportChange ={((viewPort) => setViewPort(viewPort))}
        onDblClick={handleClick}
        onLoad={setMarker}
        >
        {newPlace ? (
        <>
        <Marker
        // latitude={newPlace?.lat}
        // longitude={newPlace?.long}
        latitude={userLat}
        longitude={userLong}
        offsetLeft = {-3.5 * viewPort.zoom}
        offSetTop={-7 * viewPort.zoom}
        >

            <MdRoom style={{fontSize: 7*viewPort.zoom, color: 'tomato', cursor: 'pointer' }} />

        </Marker>
        </>) : null}

        </ReactMapGl>



    </div>
  )
}

export default MapView