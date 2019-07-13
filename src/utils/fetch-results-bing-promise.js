import axios from "axios";
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

export default (query) => {
  const BING_KEY = "6251fd46d658473888b5917088ea5332";
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
      console.log('Request canceled:', thrown.message);
    } else {
      console.error('There was an error trying to fetch data');
    }
  });
};

// TODO: .catch((thrown) => {
// Configure ^^^ cancel request when user attempts several searches in a row.
// Resolution: Should proceed just with the last one.

// This util returns a promise, handled by search-engine-form onSubmit