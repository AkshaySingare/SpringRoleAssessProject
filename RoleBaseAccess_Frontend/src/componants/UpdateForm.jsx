import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Service from "../service/Service";

function UpdateForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Product state (without image)
  const [product, setProduct] = useState({
    id: 0,
    name: "",
    price: "",
    description: "",
  });

  // State to hold selected file
  const [imageFile, setImageFile] = useState(null);

  // Fetch product by ID
  useEffect(() => {
    Service.productById(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  // Handle input change (text fields)
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  // Handle file change
  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // Update product
  const handleUpdate = (e) => {
    e.preventDefault();

    const formData = new FormData();
    // Convert product object to JSON blob
    formData.append(
      "product",
      new Blob([JSON.stringify(product)], { type: "application/json" })
    );

    // Append image file if selected
    if (imageFile) {
      formData.append("image", imageFile);
    }

    Service.updateProduct(formData)
      .then(() => {
        alert("Product Updated Successfully");
        navigate("/products");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h4 className="text-center mb-4">Update Product</h4>

              <form onSubmit={handleUpdate}>
                <div className="mb-3">
                  <label className="form-label">Product Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Price</label>
                  <input
                    type="number"
                    className="form-control"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Image</label>
                  <input
                    type="file"
                    className="form-control"
                    name="image"
                    onChange={handleFileChange}
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Update Product
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateForm;
