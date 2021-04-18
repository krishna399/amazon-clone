/* Axios is similar to fetch library. The advantage is 
 * axios has a better way to use base url
*/

import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost:5001/clone-76023/us-central1/api", //This is the api url(aka cloud function url)
});

export default instance;