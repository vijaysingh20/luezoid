import React from "react";

const Details = ({ selectedProduct }) => {
  return (
    <div className="details-container">
      {selectedProduct.map((item) => (
        <div className="product-div">
          <img
            src={item.bannerImage.url}
            className="product-image"
            alt="product image"
          />
          <h3 className="product-name">{item.name}</h3>
          <p className="product-id">{item.id}</p>
          <p className="category">{item.subCategory.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Details;
