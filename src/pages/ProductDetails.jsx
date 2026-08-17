import { useEffect, useState } from "react";
import {
  Link,
  Outlet,
  useParams,
} from "react-router-dom";

import { useCart } from "../context/CartContext.jsx";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Product not found");
        }

        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="page">
      <Link to="/products">
        ← Back to Products
      </Link>

      <div className="details">
        <img
          src={product.image}
          alt={product.title}
        />

        <div>
          <h1>{product.title}</h1>

          <h2>${product.price}</h2>

          <p>{product.description}</p>

          <p>Category: {product.category}</p>

          <p>
            Rating: {product.rating.rate} ⭐
          </p>

          <button
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="tabs">
        <Link to="overview">Overview</Link>
        <Link to="reviews">Reviews</Link>
        <Link to="specifications">
          Specifications
        </Link>
      </div>

      <Outlet />
    </div>
  );
}

export default ProductDetails;