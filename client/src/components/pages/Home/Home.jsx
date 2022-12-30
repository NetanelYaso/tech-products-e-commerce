import "./Home.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Carousel, Image } from "react-bootstrap"
import Product from "../Product/Product";
import { listProducts } from "../../../actions/products-actions";
import Loading from "../Loading/Loading";
import Message from "../Message/Message";

function Home() {

  const dispatch = useDispatch();

  const productList = useSelector(state => state.productList);
  console.log(productList);
  const { loading, error, products } = productList
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      <div className="Carousel">
        <Row>
          <Col md={6}>
            <Carousel fade >
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src="https://p.turbosquid.com/ts-thumb/IB/zqUnWX/G0/apple_watch_7_set_00/jpg/1632830328/1200x1200/fit_q99/af9b88dbdb2aa3066dbe6833b0d2b3469c718bd2/apple_watch_7_set_00.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src="https://p.turbosquid.com/ts-thumb/aD/Fi6QUv/ibgNx4ED/sony_playstation_5_collection_00/jpg/1601328936/1200x1200/fit_q99/1b07e9cc4e8aab1151a0a5bd8cfc2459d6f133e5/sony_playstation_5_collection_00.jpg"
                  alt="Second slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src="https://p.turbosquid.com/ts-thumb/pz/VhotB3/kkoCRHVe/oculus_quest_2_set_00/jpg/1605645713/1200x1200/fit_q99/d097ec93748dd605812149a0bd0da2f9f1182e12/oculus_quest_2_set_00.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={3}>
            <Image className="p-2 w-100" fluid src="https://images.pexels.com/photos/1350419/pexels-photo-1350419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Image className="p-2 w-100" fluid src="https://64.media.tumblr.com/3b62e71ef618fff36381ca39e8c68392/tumblr_mqeo0dTJAU1spo3yuo1_500.gif" />
            <Image className="p-2 w-100" fluid src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </Col>
          <Col md={3}>
            <Image className="p-2 w-100" fluid src="https://images.pexels.com/photos/1422220/pexels-photo-1422220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Image className="p-2 w-100" fluid src="https://qph.cf2.quoracdn.net/main-qimg-4e9467f024454dfa2b0a0e61074aebd1" />
            <Image className="p-2 w-100" fluid src="https://images.pexels.com/photos/3761260/pexels-photo-3761260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </Col>
        </Row>
      </div>

      <div className="mt-3">
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
      </div>


    </>
  );
};

export default Home;
