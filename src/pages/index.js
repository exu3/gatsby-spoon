import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello,</h1>
      <h2>I'm a human, a cool one, living on Earth.</h2>
      <p>Need a boring person to relate to? <Link to="/contact">Holler at me!</Link></p>
    </Layout>
  )
}

export default IndexPage