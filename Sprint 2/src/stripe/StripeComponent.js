import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import styled from "styled-components";
import { Ring } from 'react-awesome-spinners'
import axios from 'axios'
import { useParams } from "react-router";
import { useHistory } from 'react-router-dom'


const stripePromise = loadStripe("pk_test_51IuQhODxWwRTK4xqKq3dsJrdOgRnstQkNGaHFiyi4X8iLSDh0k0f5eKYHT872LpZpfUrIvqEmpphwr9z96HOSn2p00A9czMr24");

const H1Styled = styled.h1`
    text-align: start;
    font-size: 20px;
    color: gray;
    margin: 12px 0 ;
`

export const FormGroup = styled.div`
  text-align: center;
	color: palevioletred;
  padding: 40px;
  display: block;
	max-width: 400px;
  background: whitesmoke;
	margin: 50px auto;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid red;
  color: red;
  padding: 0.25em 1em;
  width: 200px;
  margin: 30px 0 0 0;
  :hover {
    background: green;
    border: 2px solid yellowgreen;
    color: white;
  }
`


const CheckoutForm = () => {
  const {total} = useParams();
  let history = useHistory();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setloading] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    })
    setloading(true)

    if (!error) {
      console.log(paymentMethod.id);
      try {
        const id = paymentMethod.id;
        const { data } = await axios.post('http://localhost:3001/api/checkout/', {
          id,
          amount: total
        })
      } catch (error) {
        console.log(error);
      }
      setloading(false);
      history.push("/");
    }
  }
  return (

    <FormGroup>
      <form onSubmit={handleSubmit}>
      <H1Styled>Datos de la tarjeta</H1Styled>
        <CardElement />
        <Button disabled={!stripe}>
          {loading ? (
            <Ring/>
          ): "Comprar" }
        </Button>
      </form>
    </FormGroup>

  )
}

export default function StripeComponent() {

  return (
    <Elements stripe={stripePromise}>
      
      <CheckoutForm />
    </Elements>
  )
}