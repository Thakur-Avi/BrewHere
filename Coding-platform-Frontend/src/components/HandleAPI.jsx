import React, { useEffect } from 'react';
import { fetchToken } from '../api/auth';

const Handle = () => {
  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await fetchToken();
        localStorage.setItem('authToken', token);
      } catch (error) {
        console.error('Failed to get token', error);
      }
    };
    getToken();
  }, []);

  return null;
};

export default Handle;
