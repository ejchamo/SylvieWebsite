const getAbout = async () => {
  try {
    const response = await fetch("/api/v1/about");
    const data = await response.json();
    return data.about[0];
  } catch (error) {
    console.error(`Error in fetch: ${error.message}`);
  }
};

export default getAbout;
