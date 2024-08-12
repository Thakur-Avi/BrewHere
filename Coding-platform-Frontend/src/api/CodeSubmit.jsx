const CodeSubmit = async (subdata) => {
    try {
    //   console.log(code, input, userid);
    console.log(subdata);
    const uid = subdata.uniqueid;
    const code = subdata.value1;
    const input = subdata.input;
      const submissionData={
          userId:{uid},
          language:"cpp",
          code:{code},
          inputs:{input},
          questionID:null
      }
      console.log(submissionData);
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

export default CodeSubmit;