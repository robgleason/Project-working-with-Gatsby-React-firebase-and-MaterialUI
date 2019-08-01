import React from "react"
import { Link } from "gatsby"
import Button from '@material-ui/core/Button';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Buttons from "../components/Button"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to my Experimental Gatsby site.</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      
      
    </div>
    <div>
     
    <Buttons />
    </div>
    
  </Layout>
)

export default IndexPage
