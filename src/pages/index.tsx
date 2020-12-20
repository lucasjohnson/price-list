import React from "react";
import { PageProps, graphql } from "gatsby";
import Layout from "../components/layout";
import "./index.css";

type Props = {
  fauna: {
    allProducts: {
      data: {
        title: string
        quantity: float
        price: float
        bio: boolean
        _id: string
      }
    }
  }
};

const IndexPage: React.FC<PageProps<Props>> = ({ data }) => {
  const {data: products} = data.fauna.allProducts;

  return (
    <Layout>
      <section>
        <header className="header">
          <span className="column">Product</span>
          <span className="column">Bio</span>
          <span className="column">Price</span>
          <span className="column">Quantity</span>
        </header>
        <ul className="product-items">
          {products.map((product) => (
            <li className="product-item" key={product._id}>
              <span className="column">{product.title}</span>
              <span className="column">{product.bio ? 'x' : '-'}</span>
              <span className="column">{product.price.toString()}</span>
              <span className="column">{product.quantity.toString()}</span>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export const query = graphql`
{
  fauna {
    allProducts {
      data {
        title
        quantity
        price
        bio
        _id
      }
    }
  }
}
`

export default IndexPage;
