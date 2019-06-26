import axios from "axios";
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

export default (query) => {
  const BING_KEY = "ebb6e51fc4324eb49a6d29b86c4d9062";
  const endpoint = "https://api.cognitive.microsoft.com/bing/v7.0/search";
  // if options, add them to the end of queryurl
  // const options = {};
  const queryUrl = `${endpoint}?q=${encodeURIComponent(query)}`;
  
  // &${options}`;

  const searchRequest = axios.create({
    baseURL: queryUrl,
    headers: {
      "Ocp-Apim-Subscription-Key": BING_KEY,
      "Accept": "application/json"
    },
    cancelToken: source.token
  });

  return searchRequest.get().catch((thrown) => {
    if (axios.isCancel(thrown)) {
      console.log('Request canceled', thrown.message);
    } else {
      // handle error
      console.log('Error');
    }
  });
};

// TODO: .catch((thrown) => {
// Configure ^^^ cancel request when user attempts several searches in a row.
// Resolution: Should proceed just with the last one.