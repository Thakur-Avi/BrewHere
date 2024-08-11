export const fetchToken = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/token');
      if (!response.ok) {
        throw new Error('Failed to fetch token');
      }
      const data = await response.json();
      return data.token;
    } catch (error) {
      console.error('Error fetching token:', error);
      throw error;
    }
};
  