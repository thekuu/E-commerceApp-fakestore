import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [products, setProducts] = React.useState([]);
  const [cart, setCart] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [showPaymentPage, setShowPaymentPage] = React.useState(false); // State to toggle payment page

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCart(
      cart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleProceedToCheckout = () => {
    setShowPaymentPage(true); // Show payment page
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    alert("Payment Successful! Thank you for your purchase.");
    setShowPaymentPage(false); // Hide payment page after submission
    setCart([]); // Clear the cart
  };

  const handleGoBack = () => {
    setShowPaymentPage(false); // Hide payment page and go back to main content
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="navbar-title">Homi E-Commerce Store</h1>
        <div className="cart-icon">
          <span role="img" aria-label="cart">
            🛒
          </span>
          <span className="cart-count">{cart.length}</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container">
        {showPaymentPage ? (
          // Payment Page
          <div className="payment-page">
            <h1 className="payment-title">Payment Details</h1>
            <form onSubmit={handlePaymentSubmit} className="payment-form">
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input
                  type="text"
                  id="expiryDate"
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" placeholder="123" required />
              </div>
              <div className="form-group">
                <label htmlFor="name">Cardholder Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="button-group">
                <button
                  type="button"
                  className="go-back-button"
                  onClick={handleGoBack}
                >
                  Go Back
                </button>
                <button type="submit" className="submit-button">
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        ) : (
          // Product Listing and Shopping Cart
          <>
            <h1 className="title">Welcome to Homi E-Commerce Store</h1>
            {loading ? (
              <div className="loading-spinner">
                <div className="spinner"></div>
              </div>
            ) : (
              <>
                <div className="product-list">
                  {products.map((product) => (
                    <div key={product.id} className="product-card">
                      <div className="product-image-container">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="product-image"
                        />
                      </div>
                      <h3 className="product-title">{product.title}</h3>
                      <p className="product-price">{product.price * 150} ETB</p>
                      <button
                        className="add-to-cart-button"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>

                {/* Shopping Cart */}
                <div className="cart">
                  <h2 className="cart-title">Shopping Cart</h2>
                  {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                      <h3 className="cart-item-title">{item.title}</h3>
                      <p className="cart-item-price">{item.price * 150} ETB</p>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value))
                        }
                        min="1"
                        className="quantity-input"
                      />
                      <button
                        className="remove-button"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <h3 className="total-price">
                    Total: {totalPrice.toFixed(2) * 150} ETB
                  </h3>
                  <button
                    className="checkout-button"
                    onClick={handleProceedToCheckout}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2023 Homi E-Commerce Store. All rights reserved.</p>
        <div className="social-links">
          <a
            href="https://github.com/thekuu"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/zekaryasgeremew"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          {/*<a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
      </a>*/}
        </div>
      </footer>
    </div>
  );
}
