import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51Ii9OHI80xSDeMnMuZXkgvfGhbcGRMyLfgMyLgSJwNPGs9RzQjIKx5aVqmdte1zV6B4galsUNm6SgFZARaIfRrqm00Fu9RiKHt';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    }).then(response => {
      alert('Payment successful');
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert('There was an issue with your payment. Please ensure you use the provided credit card!');
    });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Inc.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/en/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
