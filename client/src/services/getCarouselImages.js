const getCarouselImages = async () => {
  try {
    const response = await fetch("api/v1/images/carousel");
    if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`;
      const error = new Error(errorMessage);
      throw error;
    }
    const images = await response.json();
    return images;
  } catch (error) {
    console.error(`Error in fetch: ${error.message}`);
  }
};
export default getCarouselImages;
