// src/App.js
import React, { useState } from 'react';
import LocationSelector from './components/LocationSelector';
import BookingForm from './components/BookingForm';
import BookingSummary from './components/BookingSummary';
import { Container, Typography, Box } from '@mui/material';

const App = () => {
  const [selectedLocation, setSelectedLocation] = useState('Hyderabad');
  const [bookingDetails, setBookingDetails] = useState(null);

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          OYE Booking Clone - Hyderabad
        </Typography>

        {/* Location Selector */}
        <LocationSelector 
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />

        {/* Booking Form */}
        <BookingForm 
          location={selectedLocation} 
          setBookingDetails={setBookingDetails} 
        />

        {/* Booking Summary */}
        <BookingSummary bookingDetails={bookingDetails} />
      </Box>
    </Container>
  );
};

export default App;
