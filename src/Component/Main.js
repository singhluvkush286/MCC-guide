import React, { useState, useEffect } from 'react';

import MapboxDirectionsComponent from './MapboxDirectionsComponent';


const Main = () => {
    const initialPlaces = [
        { name: "International Guest House", coordinates: [80.1234, 12.3456] },
        { name: "Commerce Block", coordinates: [80.1196482, 12.9225965] },
        { name: "Martin Hall", coordinates: [80.118857, 12.9200416] },
        { name: "Margret Hall", coordinates: [80.1194167, 12.9203111] },
        { name: "Barnes Hall", coordinates: [80.119031, 12.9202077] },
        { name: "Student Centre", coordinates: [80.1227692, 12.9201743] },
        { name: "IBC", coordinates: [80.1189707, 12.918309] },
        { name: "Pavilion", coordinates: [80.1168207, 12.9192925] },
        { name: "Heber Chapel", coordinates: [80.1230878, 12.9197962] }
    
      ];
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [showMap, setShowMap] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(true);

  useEffect(() => {
    setShowMap(true); // Show the default map when the component mounts
  }, []);

  function handleOriginChange(event) {
    setOrigin(event.target.value);
  }

  function handleDestinationChange(event) {
    setDestination(event.target.value);
  }

  const handleSearch = () => {
    setShowSearchBox(false);
  
    // Find the selected origin and destination objects based on their names
    const selectedOrigin = initialPlaces.find(place => place.name === origin);
    const selectedDestination = initialPlaces.find(place => place.name === destination);
  
    // Pass the coordinates of the selected origin and destination to the MapboxDirections component
    setOrigin(selectedOrigin.coordinates);
    setDestination(selectedDestination.coordinates);
  };
  

  return (
    <main>
      {showSearchBox && (
        <div className="search-box">
          <input
            type="text"
            list="originOptions"
            placeholder="Enter origin"
            onChange={handleOriginChange}
          />
          <datalist id="originOptions">
            {initialPlaces.map((place, index) => (
              <option key={index} value={place.name} />
            ))}
          </datalist>
          <input
            type="text"
            list="destinationOptions"
            placeholder="Enter destination"
            onChange={handleDestinationChange}
          />
          <datalist id="destinationOptions">
            {initialPlaces.map((place, index) => (
              <option key={index} value={place.name} />
            ))}
          </datalist>
          <button onClick={handleSearch}>Find</button>
        </div>
      )}

      {!showSearchBox && origin && destination && (
        <div className="map-container">
          <MapboxDirectionsComponent
            origin={origin}
            destination={destination}
          />
        </div>
      )}
    </main>
  );
};

export default Main;
