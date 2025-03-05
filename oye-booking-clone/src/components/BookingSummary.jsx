// src/components/BookingSummary.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const BookingSummary = ({ bookingDetails }) => {
  if (!bookingDetails) {
    return null;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Booking Summary</Typography>
        <Typography>Date: {bookingDetails.date}</Typography>
        <Typography>Time: {bookingDetails.time}</Typography>
        <Typography>Location: {bookingDetails.location}</Typography>
      </CardContent>
    </Card>
  );
};

export default BookingSummary;
