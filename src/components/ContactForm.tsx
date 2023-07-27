import React, { useState } from 'react';
import axios from 'axios';

const Form: React.FC = () => {
  const [selectedEmail, setSelectedEmail] = useState('');
  const [formData, setFormData] = useState({
    // Add other form fields here as needed
    name: '',
    email: '',
    telephone: '',
    message: '',
  });

  const emailOptions = [

  { value: 'gm@mtcouncil.com', label: 'General Manager' },
    { value: 'president@mtcouncil.com', label: 'Board of Directors' },
    { value: 'officeco@mtcouncil.com', label: 'Office Coordinator' },
    { value: 'pfm@mtcouncil.com', label: 'Parks and Facility Manager (Maintenance)' },
    { value: 'daycare@mtcouncil.com', label: 'Daycare Supervisor' },
    { value: 'facilityco@mtcouncil.com', label: 'Facilities Coordinator (Rentals)' },
    { value: 'rec@mtcouncil.com', label: 'Recreation & Events Coordinator' }
];


  const handleEmailChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEmail(event.target.value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Make API request to send form data to the backend
      await axios.post('/api/sendEmail', {
        ...formData,
        selectedEmail,
      });

      // Optionally, show a success message or redirect the user to a "thank you" page.
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle errors here (e.g., display an error message to the user)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='text-left'>
        <label className="teritary font-2 md:text-2xl text-lg pr-2 mb-1" htmlFor="selectedEmail">Select Directory:</label>
        <select id="selectedEmail" name="selectedEmail" value={selectedEmail} onChange={handleEmailChange}>
         {/* directory options with email as the value, each value defined above ^ in a const */}
         <option value="">-- Select Directory --</option>
          {emailOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="teritary font-2 md:text-2xl text-lg text-left mb-3 mt-3">
        <label htmlFor="name" className='pr-3'>Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
      </div>
      <div className="teritary font-2 md:text-2xl text-lg text-left mb-3 mt-3">
        <label htmlFor="message" className='pr-3'>Message:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
