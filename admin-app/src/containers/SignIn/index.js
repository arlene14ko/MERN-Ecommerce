import React, { useState, useEffect } from 'react';
import Layout from './../../components/Layout';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import Input from './../../components/UI/Input';
import { login } from '../../actions';
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from '../../actions';

/**
* @author
* @function Signin
**/

const Signin = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = useSelector(state => state.auth)

  const dispatch = useDispatch();

  useEffect(() => {
    if(!auth.authenticate){
      dispatch(isUserLoggedIn());
    }
  }, []);

  const userLogin = (e) => {

    e.preventDefault();

    const user = {
      email, password
    }

    dispatch(login(user));
  }

  if(auth.authenticate){
    return <Redirect to={'/'} />
  }

  return(
    <Layout>
      <Container>
        <Row style={{marginTop: '50px'}}>
          <Col md={{span: 6, offset: 3}}>
            <Form onSubmit={userLogin}>
              <Input
                label="Email Address"
                placeholder="Email Address"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              /> 
              <Input
                label="Password"
                placeholder="Password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              /> 
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <Form.Text className="text-muted">
                Don't have an account yet? <Link to="/signup">Sign Up here.</Link>
              </Form.Text>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Signin;