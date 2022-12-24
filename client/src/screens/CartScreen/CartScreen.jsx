import "./CartScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/pages/Message";
import { Link, useParams } from "react-router-dom";
import { Row, Col, ListGroup, Image, Form, Button, Card } from "react-bootstrap";
import { addToCart } from "../../actions/cart-actions";
function CartScreen({ location, history }) {
  const { id } = useParams();
  const productId = id;
  console.log(id);
  // const quantity = location.search ? location.search.split("=")[1] : 1

  // console.log(quantity);
  return (
    <div className="cart-screen">
      <h1>CartScreen</h1>
    </div>
  );
};

export default CartScreen;
