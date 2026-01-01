import axios from "axios";

let url = "http://localhost:8080";

const Service = {

  login: (data) => axios.post(`${url}/login`, data),
  signUp: (data) => axios.post(`${url}/signup`, data),
  showProduct: () => axios.get(`${url}/user/showProduct`),
  deleteProduct: (id) => axios.delete(`${url}/deleteProduct/${id}`),
  productById: (id) => axios.get(`${url}/productById/${id}`),

  // Update product with FormData (multipart)
  updateProduct: (product) =>
    axios.put(`${url}/updateProduct`, product, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  // Add product with FormData (multipart)
  addProduct: (product) =>
    axios.post(`${url}/addProduct`, product, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
};

export default Service;
