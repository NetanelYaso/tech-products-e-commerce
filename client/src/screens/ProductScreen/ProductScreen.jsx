import "./ProductScreen.css";
import  { useState, useEffect }from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from "react-bootstrap"
import Raiting from "../../components/pages/Raiting/Raiting";
import axios from "axios";


function ProductScreen() {
  const { id } = useParams();
  // const product = products.find((product) => String(product._id) === id)
  const [product,setProduct] = useState({})

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/byId/${id}`)
      setProduct( data);
    }
    fetchProduct()
  }, [])

  return (
    <>
      <Link className="btn btn-light my-3" to="/"> Go Back</Link>
      <Row>
        <Col md={6}>
          {/* <Image src={product.image} alt={product.name} fluid /> */}
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Raiting value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroupItem>
            <ListGroupItem>
              Price: ${product.price}
            </ListGroupItem>
            <ListGroupItem>
              Description: {product.description}
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
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>
                    Status:
                  </Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button className="btn-block" type="button" disabled={product.countInStock === 0}>
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
