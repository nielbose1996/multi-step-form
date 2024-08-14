import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function AddressInfo({ nextStep, prevStep, handleChange, formData }) {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.address1) errors.address1 = 'Address Line 1 is required';
    if (!formData.city) errors.city = 'City is required';
    if (!formData.state) errors.state = 'State is required';
    if (!formData.zip) errors.zip = 'Zip Code is required';
    return errors;
  };

  const handleNext = () => {
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      nextStep();
    } else {
      setErrors(errors);
    }
  };

  return (
    <Box mt={3}>
      <TextField
        label="Address Line 1"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.address1}
        onChange={handleChange('address1')}
        error={!!errors.address1}
        helperText={errors.address1}
      />
      <TextField
        label="Address Line 2"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.address2}
        onChange={handleChange('address2')}
      />
      <TextField
        label="City"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.city}
        onChange={handleChange('city')}
        error={!!errors.city}
        helperText={errors.city}
      />
      <TextField
        label="State"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.state}
        onChange={handleChange('state')}
        error={!!errors.state}
        helperText={errors.state}
      />
      <TextField
        label="Zip Code"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.zip}
        onChange={handleChange('zip')}
        error={!!errors.zip}
        helperText={errors.zip}
      />
      <Box mt={3} display="flex" justifyContent="space-between">
        <Button variant="contained" color="secondary" onClick={prevStep}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default AddressInfo;
