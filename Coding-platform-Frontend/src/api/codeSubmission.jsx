export const submitCode = async (submissionData) => {
    try {
      const response = await fetch('http://localhost:5000/api/code/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });
      if (!response.ok) {
        throw new Error('Code submission failed');
      }
      return await response.json();
    } catch (error) {
      console.error('Error submitting code:', error);
      throw error;
    }
};