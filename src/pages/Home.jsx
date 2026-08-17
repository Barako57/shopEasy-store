import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">
      <h1>Welcome to ShopEasy</h1>

      <p>
        Find quality products at great prices.
      </p>

      <Link to="/products">
        Shop Now
      </Link>
    </div>
  );
}

export default Home;