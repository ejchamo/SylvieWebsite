const editAbout = async (id, data) => {
  try {
    const response = await fetch(`/api/v1/about/${id}`, {
      method: "PATCH",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`;
      const error = new Error(errorMessage);
      throw error;
    }
  } catch (error) {
    console.error(`Error in fetch: ${error.message}`);
  }
};

export default editAbout;
