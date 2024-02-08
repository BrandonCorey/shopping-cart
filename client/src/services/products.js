import axios from "axios";

const BASE_URL = "/api";

async function getAll() {
  const products = await axios.get(BASE_URL + "/products");
  return products.data;
}

async function update(id, body) {
  const updated = await axios.put(BASE_URL + "/products/" + id, body);
  return updated.data;
}

async function create(body) {
  const created = await axios.post(BASE_URL + "/products", body);
  return created.data;
}

async function remove(id) {
  const deleted = await axios.delete(BASE_URL + "/products/" + id);
  return deleted.data;
}

export default { getAll, update, create, remove };
