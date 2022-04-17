import React from "react";

const Cart = ({ cartItems, setCartItems }) => {
  const handleClick = (index) => {
    const updatedCartItems = cartItems.filter((item, id) => {
      return id !== index;
    });

    setCartItems(updatedCartItems);
    console.log(totalPrice);
  };
  let totalPrice = 0;
  cartItems.forEach((item) => (totalPrice += item.price));

  return (
    <div className="cart-container">
      <div className="heading">
        <h1>Shopping List</h1>
        <h4>Price</h4>
      </div>
      {cartItems.map((item, index) => (
        <div className="cart-item">
          <div className="item-details">
            <img
              src={item.bannerImage.url}
              className="cart-product-image"
              alt="product image"
            />
            <div className="about">
              <h3 className="product-name">{item.name}</h3>
              <button className="delete-btn" onClick={() => handleClick(index)}>
                <i class="fas fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
          <p className="product-price">{item.price}</p>
        </div>
      ))}
      <div className="total-price">
        <h4>Total Price</h4>
        <h4>{totalPrice}</h4>
      </div>
    </div>
  );
};

export default Cart;
