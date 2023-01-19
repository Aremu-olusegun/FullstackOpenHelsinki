import axios from "axios";
const baseUrl = "http://localhost:3500/persons";

const getAll = () => {
  console.log("get all data");
  return axios.get(baseUrl);
};

const deletePerson = (id) => {
  console.log("delete data");
  return axios.delete(`${baseUrl}/${id}`);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

let all = {
  getAll,
  deletePerson,
  update
};

export default all;
