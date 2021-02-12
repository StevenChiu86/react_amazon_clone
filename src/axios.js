import axios from "axios";

const instance = axios.create({
  baseURL:"https://us-central1-challenge-e6dfb.cloudfunctions.net/api" 
  //"http://localhost:5001/challenge-e6dfb/us-central1/api", //The API (cloud function URL) URL
});
export default instance;
