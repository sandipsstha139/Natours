/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/users/login',
      data: {
        email,
        password
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully!');
      // Redirect to the home page after 1.5 seconds
      setTimeout(() => {
        location.href = '/';
      }, 1500);
    }
  } catch (err) {
    // Check if there is a response and a message in the error object
    const errorMessage = err.response && err.response.data.message ? err.response.data.message : 'Something went wrong!';
    showAlert('error', errorMessage);
  }
};
