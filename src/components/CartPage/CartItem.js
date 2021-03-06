import React from "react";
import { Link } from "react-router-dom";

import {
  FaTrash,
  FaChevronCircleUp,
  FaChevronCircleDown
} from "react-icons/fa";
export default function CartItem({
  cartItem,
  increment,
  decrement,
  removeItem,
  setSingleProduct
}) {
  const { id, title, price, count, total, image } = cartItem;

  return (
    <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center">
      {/* image */}

      <div className="col-10 mx-auto col-lg-2 pb-2">
        <img src={image} width="60" className="img-fluid" alt="product" />
      </div>
      {/*end of image */}
      {/* title */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none"> </span>
      
        <Link
          to={`/products/${id}`}
          onClick={() => setSingleProduct(id)}

        >  {title}</Link>
      </div>
      {/*end of title */}
      {/* price */}

      {/*end of price */}
      {/* count controls */}

      {/* end count controls */}
      {/* remove item */}
      <div className="col-10 mx-auto col-lg-2 ">
        <FaTrash
          className="text-danger cart-icon"
          onClick={() => removeItem(id)}
        />
      </div>
      {/*end of remove */}
      {/* item total */}

      {/* end item total */}
    </div>
  );
}
