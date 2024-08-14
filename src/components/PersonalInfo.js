import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function PersonalInfo({ nextStep, handleChange, formData }) {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.phone) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'Phone number must be 10 digits';
    }
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
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.name}
        onChange={handleChange('name')}
        error={!!errors.name}
        helperText={errors.name}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.email}
        onChange={handleChange('email')}
        error={!!errors.email}
        helperText={errors.email}
      />
      <TextField
        label="Phone"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.phone}
        onChange={handleChange('phone')}
        error={!!errors.phone}
        helperText={errors.phone}
      />
      <Box mt={3}>
        <Button variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default PersonalInfo;
