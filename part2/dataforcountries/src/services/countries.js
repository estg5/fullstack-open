import axios from "axios";

const urlAll = "https://studies.cs.helsinki.fi/restcountries/api/all";
function getAll() {
  return axios.get(urlAll).then((resp) => resp.data);
}

export default { getAll };
