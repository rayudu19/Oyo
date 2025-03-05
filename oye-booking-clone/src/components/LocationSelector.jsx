// src/components/LocationSelector.js
import React from 'react';
import { TextField, MenuItem } from '@mui/material';

const LocationSelector = ({ selectedLocation, setSelectedLocation }) => {
  const locations = ['Hyderabad', 'Bangalore', 'Mumbai', 'Delhi'];

  return (
    <div>
      <TextField
        select
        label="Location"
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}
        fullWidth
        margin="normal"
      >
        {locations.map((location) => (
          <MenuItem key={location} value={location}>
            {location}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default LocationSelector;
