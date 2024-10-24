import React, { useState } from 'react';
import appointmentService from '../Appointments/AppointmentServices';
const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    serviceType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call API to save appointment
    try {
      const response = await appointmentService.createAppointment(formData);
      if (response.status === 200) {
        alert('Appointment booked successfully');
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      />
      <select
        name="serviceType"
        value={formData.serviceType}
        onChange={handleChange}
        required
      >
        <option value="" disabled>Select Service</option>
        <option value="consultation">Consultation</option>
        <option value="follow-up">Follow-up</option>
      </select>
      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default AppointmentForm;
