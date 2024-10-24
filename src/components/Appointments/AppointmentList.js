import React, { useEffect, useState } from 'react';
import appointmentService from '../services/appointmentService';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await appointmentService.getAppointments();
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };
    fetchAppointments();
  }, []);

  const handleCancel = async (appointmentId) => {
    try {
      await appointmentService.cancelAppointment(appointmentId);
      setAppointments(appointments.filter(appt => appt.id !== appointmentId));
    } catch (error) {
      console.error('Error cancelling appointment:', error);
    }
  };

  return (
    <div>
      <h2>Your Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.date} - {appointment.time} ({appointment.serviceType})
            <button onClick={() => handleCancel(appointment.id)}>Cancel</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
