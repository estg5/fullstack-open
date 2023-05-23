import axios from "axios";

const url = "http://localhost:3001/persons";
function getAll() {
  return axios.get(url).then((resp) => resp.data);
}

function savePerson(person) {
  return axios.post(url, person).then((resp) => resp.data);
}

export default { getAll, savePerson };
