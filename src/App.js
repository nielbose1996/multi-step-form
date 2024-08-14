import React, { useState } from 'react';
import { Container, Paper, Box, Tab, Tabs } from '@mui/material';
import PersonalInfo from './components/PersonalInfo';
import AddressInfo from './components/AddressInfo';
import Confirmation from './components/Confirmation';

function App() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
    localStorage.setItem('formData', JSON.stringify({ ...formData, [input]: e.target.value }));
  };

  const handleSubmit = () => {
    alert('Form submitted successfully!');
    localStorage.removeItem('formData');
  };

  const retrieveFormData = () => {
    const storedData = JSON.parse(localStorage.getItem('formData'));
    if (storedData) {
      setFormData(storedData);
    }
  };

  React.useEffect(() => {
    retrieveFormData();
  }, []);

  const handleTabChange = (event, newValue) => {
    setStep(newValue);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <PersonalInfo nextStep={() => setStep(step + 1)} handleChange={handleChange} formData={formData} />;
      case 1:
        return (
          <AddressInfo
            nextStep={() => setStep(step + 1)}
            prevStep={() => setStep(step - 1)}
            handleChange={handleChange}
            formData={formData}
          />
        );
      case 2:
        return (
          <Confirmation formData={formData} prevStep={() => setStep(step - 1)} handleSubmit={handleSubmit} />
        );
      default:
        return <div>Not Found</div>;
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3}>
        <Box p={3}>
          <Tabs
            value={step}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="form tabs"
          >
            <Tab label="Personal Info" disabled={step > 0} />
            <Tab label="Address Info" disabled={step < 1 || step > 1} />
            <Tab label="Confirmation" disabled={step < 2} />
          </Tabs>
          {renderStepContent(step)}
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
