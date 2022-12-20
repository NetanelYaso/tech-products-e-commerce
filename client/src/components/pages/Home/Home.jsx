import "./Home.css";
import { Row, Col } from "react-bootstrap"
import { products } from "../../../products";
import Product from "../Product/Product";
function Home() {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product,key) => 
          <Col key={key} sm={12} md={6} lg={4} xl={3}>
            <Product  product={product} />
          </Col>
        )}
      </Row>
    </>
  );
};

export default Home;
