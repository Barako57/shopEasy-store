import { useState } from "react";

function Checkout() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name || !address || !phone) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    alert("Order placed successfully!");
  }

  return (
    <div className="form-page">
      <h1>Checkout</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
        />

        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(event) =>
            setAddress(event.target.value)
          }
        />

        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(event) =>
            setPhone(event.target.value)
          }
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;
