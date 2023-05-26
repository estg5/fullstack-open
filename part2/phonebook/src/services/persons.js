import axios from "axios";

const url = "api/persons";
function getAll() {
  return axios.get(url).then((resp) => resp.data);
}

function savePerson(person) {
  return axios.post(url, person).then((resp) => resp.data);
}

function deletePerson(id) {
  return axios.delete(`${url}/${id}`).then((resp) => resp.data);
}

function updatePerson(id, person) {
  return axios.put(`${url}/${id}`, person).then((resp) => resp.data);
}

export default { getAll, savePerson, deletePerson, updatePerson };
