const deleteExperience = async (id) => {
  try {
    const response = await fetch(`/api/v1/experiences/${id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
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

export default deleteExperience;
