import React from "react";
import { ProductConsumer } from "../../context";
import CartItem from "./CartItem";
export default function CartList() {
  return (
    <div className="container-fluid">
      {/* row */}
      <div className="row">
        <div className="col">
          <ProductConsumer>
            {value => {
              const { cart, increment, decrement, removeItem, setSingleProduct } = value;
              if (cart.length === 0) {
                return (<>

                  <h1 style={{ fontSize: "16px" }} className="text-title text-center my-4">
                    OOPS looks like List is Empty !!
                  </h1></>
                );
              }
              return (
                <>
                  {cart.map(item => (
                    <CartItem
                      key={item.id}
                      cartItem={item}
                      increment={increment}
                      decrement={decrement}
                      removeItem={removeItem}
                      setSingleProduct={setSingleProduct}
                    />
                  ))}
                </>
              );
            }}
          </ProductConsumer>
        </div>
      </div>
    </div>
  );
}
