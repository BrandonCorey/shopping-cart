import axios from "axios";

const BASE_URL = "/api";

async function getAll() {
  const products = await axios.get(BASE_URL + "/products");
  return products.data;
}

async function update(id, body) {
  const product = await axios.put(BASE_URL + "/products/" + id, body);
  return product.data;
}

async function create(body) {
  const product = await axios.post(BASE_URL + "/products", body);
  return product.data;
}

async function remove(id) {
  const result = await axios.delete(BASE_URL + "/products/" + id);
  return result.data;
}

export default { getAll, update, create, remove };
