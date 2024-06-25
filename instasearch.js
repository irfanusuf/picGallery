document.addEventListener("DOMContentLoaded", () => {
  async function instaSearch(query) {
    const url = `https://instagram-scraper-api2.p.rapidapi.com/v1/search_hashtags?search_query= ${query}`;

    // const url = 'https://instagram-scraper-api2.p.rapidapi.com/v1/search_hashtags?search_query=mrbeast';
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "79bd850338msh2791f9644fac656p197751jsnac6970a86c03",
        "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  instaSearch("instagram");
});
