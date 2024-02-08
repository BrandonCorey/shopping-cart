import axios from "axios";

const BASE_URL = "/api";

async function add(id) {
  const productId = id;
  const added = await axios.post(BASE_URL + "/add-to-cart", { productId });
  return added.data;
}

async function getAll() {
  const cart = await axios.get(BASE_URL + "/cart");
  return cart.data;
}

export default {
  add,
  getAll,
};
