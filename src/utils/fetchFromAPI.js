import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '54893a6f4cmshb8d813d8c24c70dp1ff1fcjsn348ef67774ae',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
  }
  