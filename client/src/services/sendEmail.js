const sendEmail = async (emaildetails) => {
  try {
    const response = await fetch("/api/v1/email", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(emaildetails),
    });
    if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`;
      const error = new Error(errorMessage);
      throw error;
    }
    const body = await response.json();
    return body;
  } catch (err) {
    if (err instanceof Error) {
      console.error(`Error in fetch: ${err.message}`);
    }
  }
};

export default sendEmail;
