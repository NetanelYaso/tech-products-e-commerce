import "./CartScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/pages/Message";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import { Row, Col, ListGroup, Image, Form, Button, Card, ListGroupItem } from "react-bootstrap";
import { addToCart, reamoveFromCart } from "../../actions/cart-actions";

function CartScreen() {
  const { id } = useParams();
  console.log(id);
  const location = useLocation();
  const navigate = useNavigate();
  const productId = id;

  const quantity = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, quantity))
    }
  }, [dispatch, productId, quantity])

  const removeFromCartHandler = (id) => {
    dispatch(reamoveFromCart(id))
  }

  const checkoutHandler = () => {
    navigate("/shipping")
  }

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ?
          <Message>
            Your Cart iS Empty
            <Link to="/">Go Back</Link>
          </Message> : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroupItem key={item.product.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} ait={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>
                      ${item.price}
                    </Col>
                    <Col md={2}>
                      <select
                        as='select'
                        value={item.quantity}
                        onChange={(error) => dispatch(addToCart(item.product, Number(error.target.value)))}>
                        {
                          [...Array(item.countInStock).keys()].map(count => (
                            <option key={count + 1} value={count + 1}>{count + 1}</option>
                          ))
                        }
                      </select>
                    </Col>
                    <Col md={2}>
                      <Button type="button" variant="light" onClick={() => removeFromCartHandler(item.product)}>
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          )
        }
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h2>Subtotal ({cartItems.reduce((accumulater, item) => accumulater + item.quantity, 0)})
                items
              </h2>
              ${cartItems
                .reduce((accumulater, item) => accumulater + item.quantity * item.price, 0)
                .toFixed(2)}
            </ListGroupItem>
            <ListGroupItem>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}>
                Proceed To Checkout
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>

    </Row>
  );
};

export default CartScreen;
