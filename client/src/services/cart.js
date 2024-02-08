import axios from "axios";

const BASE_URL = "/api";

async function add(id) {
  const productId = id;
  const product = await axios.post(BASE_URL + "/add-to-cart", { productId });
  return product.data;
}

async function getAll() {
  const item = await axios.get(BASE_URL + "/cart");
  return item.data;
}

async function checkout() {
  const result = await axios.post(BASE_URL + "/checkout");
  return result.data;
}

export default {
  add,
  getAll,
  checkout,
};
