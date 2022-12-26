import "./ShippingScreen.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../../components/featurs/FormContainer/FormContainer";


function ShippingScreen() {
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [country, setCountry] = useState("")

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("submit");
  }

  return (
    <FormContainer>
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
          <Form.Label>Posta lCode</Form.Label>
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
      </Form>
      <Button type="submit" variant="primary">
        Contiue
      </Button>
    </FormContainer>
  );
};

export default ShippingScreen;
