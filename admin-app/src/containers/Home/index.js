import React from 'react';
import Layout from './../../components/Layout';
import { Jumbotron } from 'react-bootstrap';
/**
* @author
* @function Home
**/

const Home = (props) => {
  return(
    <Layout>
        <Jumbotron style={{margin: '5rem', background: 'white'}} className="text-center">
          <h1> Welcome to Admin Dashboard </h1>
          <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
        </Jumbotron>
    </Layout>
  )
}

export default Home;