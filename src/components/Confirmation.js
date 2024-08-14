import React from 'react';
import { Box, Button, Typography } from '@mui/material';

function Confirmation({ formData, prevStep, handleSubmit }) {
  return (
    <Box mt={3}>
      <Typography variant="h6">Review Your Information</Typography>
      <Box mt={2}>
        <Typography><strong>Name:</strong> {formData.name}</Typography>
        <Typography><strong>Email:</strong> {formData.email}</Typography>
        <Typography><strong>Phone:</strong> {formData.phone}</Typography>
        <Typography><strong>Address Line 1:</strong> {formData.address1}</Typography>
        <Typography><strong>Address Line 2:</strong> {formData.address2}</Typography>
        <Typography><strong>City:</strong> {formData.city}</Typography>
        <Typography><strong>State:</strong> {formData.state}</Typography>
        <Typography><strong>Zip Code:</strong> {formData.zip}</Typography>
      </Box>
      <Box mt={3} display="flex" justifyContent="space-between">
        <Button variant="contained" color="secondary" onClick={prevStep}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default Confirmation;
