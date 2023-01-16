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

let all = {
  getAll,
  deletePerson,
};

export default all;
