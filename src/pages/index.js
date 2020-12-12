import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const IndexPage = ({ data }) => (

  <Layout>
    {console.log(data)}
    <ul>
      {data.fauna.Products.data.map(product => (
        <li>{product.title}</li>
      ))}
    </ul>
  </Layout>
);

export const query = graphql`
{
  fauna {
    Products {
      data {
        title
        _id
      }
    }
  }
}
`

export default IndexPage;
