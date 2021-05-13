import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = (token) => {
  console.log(token);
  alert('Payment Successful');
};

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51Ii9OHI80xSDeMnMuZXkgvfGhbcGRMyLfgMyLgSJwNPGs9RzQjIKx5aVqmdte1zV6B4galsUNm6SgFZARaIfRrqm00Fu9RiKHt';

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