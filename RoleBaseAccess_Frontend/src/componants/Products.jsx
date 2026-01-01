import React, { useEffect, useState } from "react";
import Service from "../service/Service";
import { useNavigate } from "react-router-dom";

function Products() {

      // Show Products
  const [products, setProducts] = useState([]);
  useEffect(()=>{
            Service.showProduct().then((res) => {
                  setProducts(res.data);
            }).catch((err) => {
                  console.log(err);
            });
  },[]);

  // DELETE product
  const handleDelete = (id) => {
      Service.deleteProduct(id).then(()=>setProducts(products.filter((p) => p.id !== id)))
      .catch((e)=>console.log(e));
    
  };

  let navigate = useNavigate();

  // UPDATE product (dummy)
  const handleUpdate = (id) => {
    navigate(`/updateProd/${id}`);
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Products</h3>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card shadow h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />

              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <h6 className="text-success">₹ {product.price}</h6>
                <p className="card-text">{product.description}</p>
              </div>

              <div className="card-footer d-flex justify-content-between">
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => handleUpdate(product.id)}
                >
                  Update
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
