// src/components/BookingForm.js
import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';

const BookingForm = ({ location, setBookingDetails }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  
  useEffect(() => {
    // Log the selected location (Hyderabad) or the default if location changes.
    console.log('Selected Location:', location);
  }, [location]);

  const handleSubmit = () => {
    setBookingDetails({ date, time, location });
  };

  return (
    <Box>
      <TextField
        label="Date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Time"
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleSubmit}>
        Book Now
      </Button>
    </Box>
  );
};

export default BookingForm;
