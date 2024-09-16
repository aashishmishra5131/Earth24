import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../state/Order/Action";
import { useLocation } from "react-router";

const OrderSummery = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { order } = useSelector((store) => store);
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");

  const deliveryCharge = order.order?.totalDiscountedPrice < 500 ? 40 : 0;

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);

  const handlecheckout = () =>{
    dispatch(getOrderById(orderId));
  }

  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard address={order.order?.shippingAddress} />
      </div>
      <div className="mt-10">
        <div className="lg:grid grid-cols-3  relative">
          <div className="col-span-2">
            {order.order?.orderItems.map((item) => (
              <CartItem item={item} />
            ))}
          </div>
          <div className="px-7  sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border pl-3 pr-3">
              <p className="uppercase font-bold opacity-60 pb-4">
                Price Details
              </p>
              <hr />
              <div className="space-y-3  font-semibold mb-10">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>{order.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Discount</span>
                  <span className="text-green-600">
                    {order.order?.discounte}
                  </span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Delivery Charge</span>
                  <span
                    className={deliveryCharge === 0 ? "text-green-600" : ""}
                  >
                    {deliveryCharge === 0 ? "free" : `₹${deliveryCharge}`}
                  </span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Total Amount</span>
                  <span>
                    {order.order?.totalDiscountedPrice + deliveryCharge}
                  </span>
                </div>
              </div>
              <Button
                variant="contained"
                className="w-full mt-5"
                sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}
                onClick={handlecheckout}
              >
                Check Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummery;
