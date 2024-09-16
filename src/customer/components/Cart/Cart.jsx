import React,{useEffect} from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../state/Cart/Action";

const Cart = () => {

  const navigate = useNavigate();
  const {cart} = useSelector(store=>store)
  const dispatch = useDispatch();

  const handleCheckOut = () => {
    navigate("/chechout?step=2");
  };

  useEffect(()=>{
    dispatch(getCart());
  },[cart.updateCartItem,cart.deleteCartItem])


const deliveryCharge = cart.cart?.totalDiscountedPrice < 500 ? 40 : 0;
const finalTotalAmount = cart.cart?.totalDiscountedPrice + deliveryCharge;

  return (
    <div className="mt-10">
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {cart.cart?.cartItems.map((item) => (
            <CartItem item={item}/>
          ))}
        </div>
        <div className="px-7  sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4 text-center ">Price Details</p>
            <hr />
            <div className="space-y-3  font-semibold mb-10 pl-3 pr-3">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>{cart.cart?.totalPrice}</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span className="text-green-600">{cart.cart?.discount}</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charge</span>
                <span className="text-green-600">{deliveryCharge > 0 ? `${deliveryCharge}` : "Free"}</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Total Amount</span>
                <span>{finalTotalAmount}</span>
              </div>
            </div>
            <Button
              onClick={handleCheckOut}
              variant="contained"
              className="w-full mt-5"
              sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}
            >
              Check Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
