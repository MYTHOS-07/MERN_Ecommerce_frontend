import React, { useState } from "react";
import Modal from "../Modal";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import config from "@/config/config";
import { confirmPayment, payVaiStripe } from "@/api/orders";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


const CheckoutForm = ({ id, totalPrice }) => {
  const [show, setShow] = useState();

  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  async function initPaymentViaStripe() {
    try {
      const data = await payVaiStripe(id);

      const clientSecret = data.client_secret;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result && result.paymentIntent?.status == "succeeded") {
        await confirmPayment(id, "Completed")
          .then(() => {
            toast.success("Order update Successful");

            setShow(false);

            router.push(`?status=${ORDER_STATUS_CONFIRMED}`);
          })
          .catch(() => {
            toast.error("Order update failed");
          });
      }
    } catch (error) {
      console.log(error);
    }
  }

  // test

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="bg-blue-700 hover:bg-blue-900 text-white rounded-md px-4 py-2 cursor-pointer"
      >
        Pay via Stripe
      </button>
      <Modal
        show={show}
        totalPrice={totalPrice}
        setShow={setShow}
        title="Card Payment"
        onConfirm={initPaymentViaStripe}
      >
        <CardElement />
      </Modal>
    </>
  );
};

const PayViaStripe = ({ id, totalPrice }) => {
  const stripePromise = loadStripe(config.stripeKey);

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm id={id} totalPrice={totalPrice} />
    </Elements>
  );
};

export default PayViaStripe;
