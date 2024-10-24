import axios from 'axios';

const appointmentService = {
  createAppointment: (appointmentData) => {
    return axios.post('/api/appointments', appointmentData);
  },
  getAppointments: () => {
    return axios.get('/api/appointments');
  },
  cancelAppointment: (appointmentId) => {
    return axios.delete(`/api/appointments/${appointmentId}`);
  },
};

export default appointmentService;
