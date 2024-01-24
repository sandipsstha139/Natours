/* eslint-disable */
import { login } from './login';

// DOM Elements
const loginForm = document.querySelector('.form--login');

if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    await login(email, password);
  });
}
