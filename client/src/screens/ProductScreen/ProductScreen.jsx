import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { Form, Link, useParams,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from "react-bootstrap"
import Raiting from "../../components/pages/Raiting/Raiting";
import { listProductsDetails } from "../../actions/products-actions";
import { render } from "react-dom";

function ProductScreen() {
  const { id } = useParams();
  let history = useNavigate();
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.productDetalis);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductsDetails(id));
  }, [dispatch, id])

  const addToCartHandler = () => {
    history(`/cart/${id}?quantity=${quantity}`)
  }


  const ProductCountInStock = () => {
    return product?.product?.countInStock;
  }
  const temp = ProductCountInStock()
  console.log("ssss", temp);


  return (
    <>
      <Link className="btn btn-light my-3" to="/"> Go Back</Link>
      <Row>
        <Col md={6}>
          <Image src={product?.product?.image} alt={product?.product?.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{product?.product?.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Raiting value={product?.product?.rating} text={`${product?.product?.numReviews} reviews`} />
            </ListGroupItem>
            <ListGroupItem>
              Price: ${product?.product?.price}
            </ListGroupItem>
            <ListGroupItem>
              Description: {product?.product?.description}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>
                    Price:
                  </Col>
                  <Col>
                    <strong>${product?.product?.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>
                    Status:
                  </Col>
                  <Col>
                    {product?.product?.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                  </Col>
                </Row>
              </ListGroupItem>
              {
                temp > 0 ?
                  (
                    <ListGroupItem>
                      <Row>
                        <Col>Quantity:</Col>
                        <Col>
                          <select
                            as='select'
                            value={quantity}
                            onChange={(error) => setQuantity(error.target.value)}>
                            {
                              [...Array(temp).keys()].map(count => (
                                <option key={count + 1} value={count + 1}>{count + 1}</option>
                              ))
                            }
                          </select>
                        </Col>
                      </Row>
                    </ListGroupItem>
                  ) : "quantity not found"
              }
              <ListGroupItem>
                <Button
                  onClick={addToCartHandler}
                  className="btn-block"
                  type="button"
                  disabled={console.log(product?.product?.countInStock) === 0}>
                  Add To Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default ProductScreen;
