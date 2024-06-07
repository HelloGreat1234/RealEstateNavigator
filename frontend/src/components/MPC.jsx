// src/Map.js
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import mapboxSdk from '@mapbox/mapbox-sdk';

mapboxgl.accessToken = 'pk.eyJ1IjoiYXJjaGl0MTA4IiwiYSI6ImNseDNtZXl4ZDB2cGgyanF1eDZpNHQxbDkifQ.AZm4BVNOXDisTIL4I8iaFw';

const MPC = () => {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        const mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
        mapboxClient.geocoding
            .forwardGeocode({
                query: 'Wellington, New Zealand',
                autocomplete: false,
                limit: 1
            })
            .send()
            .then((response) => {
                if (
                    !response ||
                    !response.body ||
                    !response.body.features ||
                    !response.body.features.length
                ) {
                    console.error('Invalid response:', response);
                    return;
                }
                const feature = response.body.features[0];

                const map = new mapboxgl.Map({
                    container: mapContainerRef.current,
                    style: 'mapbox://styles/mapbox/streets-v12',
                    center: feature.center,
                    zoom: 10
                });

                new mapboxgl.Marker().setLngLat(feature.center).addTo(map);
            });
    }, []);

    return (
        <div
            ref={mapContainerRef}
            style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                width: '100%'
            }}
        />
    );
};

export default MPC;
