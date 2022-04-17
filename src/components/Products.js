import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { NavLink } from "react-router-dom";

const Products = ({ data, setSelectedProduct, setCartItems, cartItems }) => {
  const handleImageClick = (index) => {
    const filteredItem = data.filter((item, id) => id == index);
    setSelectedProduct(filteredItem);
    console.log(data);
  };

  const handleBtnClick = (index) => {
    const filteredItem = data.filter((item, id) => index == id);
    setCartItems([...cartItems, ...filteredItem]);
  };

  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 12;
  const endOffset = pageNumber * itemsPerPage;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const displayProducts = data
    .slice(endOffset, endOffset + itemsPerPage)
    .map((item, index) => {
      return (
        <div className="product-div" key={index}>
          <NavLink to="/details">
            <img
              src={item.bannerImage.url}
              className="product-image"
              alt="product image"
              onClick={() => handleImageClick(index)}
            />
          </NavLink>

          <h3 className="product-name">{item.name}</h3>
          <p className="product-id">{item.id}</p>
          <p className="category">{item.subCategory.name}</p>
          <button className="to-cart" onClick={() => handleBtnClick(index)}>
            +
          </button>
        </div>
      );
    });

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="products">{displayProducts}</div>
      <ReactPaginate
        breakLabel="..."
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={totalPages}
        onPageChange={handlePageChange}
        containerClassName={"pagination-container"}
        previousLinkClassName={"previous-btn"}
        nextLinkClassName={"next-btn"}
        activeClassName={"active-pagination"}
        disabledClassName={"disabled-pagination"}
      />
    </>
  );
};

export default Products;
