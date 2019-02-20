import axios from "axios";

export default (query) => {
  const BING_KEY = "b02b4ae8062c493cad00a59fdfe0c48e";
  const endpoint = 'https://api.cognitive.microsoft.com/bing/v7.0/search';
  // if options, add them to the end of queryurl
  // const options = {};
  const queryUrl = `${endpoint}?q=${encodeURIComponent(query)}`;
  
  // &${options}`;

  const searchRequest = axios.create({
    baseURL: queryUrl,
    headers: {
      'Ocp-Apim-Subscription-Key': BING_KEY,
      "Accept": "application/json"
    }
  });

  return searchRequest.get();
};