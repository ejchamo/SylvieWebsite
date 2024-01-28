const getImage = async (title) => {
  try {
    const response = await fetch(`api/v1/images/image/${title}`);
    if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`;
      const error = new Error(errorMessage);
      throw error;
    }
    const image = await response.json();
    return image;
  } catch (error) {
    console.error(`Error in fetch: ${error.message}`);
  }
};

export default getImage;
