import "./ProfileScreen.css";
import React from "react";

import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/pages/Message/Message";
import Loader from "../../components/pages/Loading/Loading";
import { getUserDetails, updateUserProfile } from "../../actions/user-actions";

function ProfileScreen() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch();
  // const location = useLocation();
  const navigate = useNavigate();

  const userDetails = useSelector(state => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  // const userUpdateProfile = useSelector(state => state.userUpdateProfile);
  // const { success } = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      navigate(`/login`)
    } else {
      // if (!user.name) {
      //   dispatch(getUserDetails("profile"))
      // } else {
      //   setName(user.name)
      //   setEmail(user.email)

      // }
    }
  }, [dispatch, navigate, userInfo])
 
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords Do Not Match")
    } else {
      // dispatch(updateUserProfile({ id: user._id, name, email, password }))
    }
  }

  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {/* {success && <Message variant="success">Profile Update</Message>} */}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}></Form.Control >
          </Form.Group>
          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}></Form.Control >
          </Form.Group>
          <Form.Group controlId='password'>
            <Form.Label>Password Address</Form.Label>
            <Form.Control
              type='password'
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}>
            </Form.Control >

          </Form.Group>
          <Form.Group controlId='confirmPassword'>
            <Form.Label>Confirm Password </Form.Label>
            <Form.Control
              type='password'
              placeholder=" Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}>
            </Form.Control >
          </Form.Group>
          <Button className="mt-3" type="submit" variant="primary">
            Update
          </Button>

        </Form>
      </Col>
      <Col md={9}>
        <h2>My Orders</h2>
      </Col>
    </Row>
  );
};

export default ProfileScreen;

