import "./ShippingScreen.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../../components/featurs/FormContainer/FormContainer";
import CheckoutSteps from "../../components/pages/CheckoutSteps/CheckoutSteps";
import { saveShippingAddress } from "../../actions/cart-actions";

function ShippingScreen() {
  const cart = useSelector(state => state.cart)
  const { shippingAddress } = cart;
  console.log(shippingAddress);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, country }))
    navigate("/payment")
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}></Form.Control >
        </Form.Group>

        <Form.Group controlId='city'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}></Form.Control >
        </Form.Group>

        <Form.Group controlId='postalCode'>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type='text'
            placeholder="Enter Postal Code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}></Form.Control >
        </Form.Group>

        <Form.Group controlId='country'>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type='text'
            placeholder="Enter Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}></Form.Control >
        </Form.Group>
        <Button className="mt-3" type="submit" variant="primary">
          Contiue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
