import React, { useState, useEffect } from 'react';
import { updatePayment } from '../../../state/payment/Action';
import { Alert, AlertTitle, Grid } from '@mui/material';
import OrderTracker from '../Order/OrderTracker';
import AddressCard from '../AddressCard/AddressCard';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderById } from '../../../state/Order/Action';

const PaymentSuccess = () => {
  const [paymentId, setPaymentId] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const { orderId } = useParams();

  const dispatch = useDispatch();
  const { order } = useSelector(store => store);
  console.log(order,"order after")

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);
    setPaymentId(urlParam.get('razorpay_payment_id'));
    setPaymentStatus(urlParam.get('razorpay_payment_link_status'));
  }, []);

  useEffect(() => {
    if (paymentId) {
      const data = { orderId, paymentId };
      dispatch(getOrderById(orderId));
      dispatch(updatePayment(data));
    }
  }, [orderId, paymentId, dispatch]);

  return (
    <div className='px-2 lg:px-36'>
      <div className='flex flex-col justify-center items-center'>
        <Alert variant='filled' severity='success' sx={{ mb: 6, width: 'fit-content' }}>
          <AlertTitle>Payment Success</AlertTitle>
          Congratulations! Your order has been placed.
        </Alert>
      </div>

      <OrderTracker activeStep={1} />

      <Grid container className='space-y-5 py-5 pt-20'>
        {order.order?.orderItems.map((item, index) => (
          <Grid
            container
            item
            key={index}
            className='space-x-1'
            sx={{ alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Grid item xs={6}>
              <div className='flex items-center'>
                <img
                  src={item.product?.imageUrl}
                  alt={item.product?.title}
                  className='w-[5rem] h-[5rem] object-cover object-top'
                />
                <div className='ml-5 space-y-2'>
                  <p>{item.product?.title}</p>
                  <div className='opacity-50 text-xs font-semibold space-x-1'>
                    <span>Size: {item.size}</span>
                  </div>
                  <p>Seller: {item.product?.brand}</p>
                  <p>{item.price}</p>
                </div>
              </div>
            </Grid>

            <Grid item>
              <AddressCard address={order.order?.shippingAddress} />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PaymentSuccess;
