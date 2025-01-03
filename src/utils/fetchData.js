export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY, // Use environment variable for API key
  },
};

export const fetchData = async (url, options) => {
  try {
    // eslint-disable-next-line no-console
    console.log('Request URL:', url);
    // eslint-disable-next-line no-console
    console.log('Options:', options);

    const res = await fetch(url, options);

    if (!res.ok) {
      // Provide more details on the error
      const errorText = await res.text(); // Get response text for more details
      throw new Error(`Error fetching data: ${res.status} ${res.statusText} - ${errorText}`);
    }

    const data = await res.json();

    // Check if the data is an array and return it
    if (Array.isArray(data)) {
      return data;
    }

    // For non-array responses, return the data
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error in fetchData:', error.message);
    return []; // Return an empty array on error to avoid breaking the application
  }
};
