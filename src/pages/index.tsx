import React from "react";
import { PageProps, graphql } from "gatsby";
import Layout from "../components/layout";

type Props = {
  fauna: {
    Products: {
      data: {
        title: string
      }
    }
  }
};

const IndexPage: React.FC<PageProps<Props>> = ({ data }) => (
  <Layout>
    <ul>
      {data.fauna.Products.data.map((product, index) => (
        <li key={index}>{product.title}</li>
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
      }
    }
  }
}
`

export default IndexPage;
