import "./Home.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap"
import Product from "../Product/Product";
import { listProducts } from "../../../actions/products-actions";
import Loading from "../Loading/Loading";
import Message from "../Message/Message";

function Home() {

  const dispatch = useDispatch();

  const productList = useSelector(state => state.productList);

  const { loading, error, products } = productList
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
  
// const products = []
  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loading />
      )
        : error ? (
          <Message variant="danger">{error}</Message>
        )
          : <Row>
            {products.map((product, key) =>
              <Col key={key} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            )}
          </Row>
      }

    </>
  );
};

export default Home;
