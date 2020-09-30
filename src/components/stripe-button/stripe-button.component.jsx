import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_29oY4jE3M4nSDwMfDghG8kqm00ptq1WO8U";

  const onToken = (token) => {
    alert("Payment successfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
