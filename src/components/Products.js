import React, { useEffect, useState } from "react";
import { List, Card, Image, Typography, Rate } from "antd";
import Header from "./Header";
import getAllProducts from "../APIs/getAllProducts";
import getProductsByCategory from "../APIs/getProductsByCategory";
import AddToCartButton from "./AddToCartButton";
import { useParams } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);
  const param = useParams();
  useEffect(() => {
    (param?.categoryId!=="Home"
      ? getProductsByCategory(param.categoryId)
      : getAllProducts()
    ).then((data) => setProducts(data));
    console.log(param);
  }, [param]);

  return (
    <div>
      <Header/>
      <List
        grid={{ column: 3 }}
        renderItem={(product, index) => {
          return (
            <Card
              className="m-4"
              title={product.title}
              key={index}
              cover={
                <Image
                  style={{ height: 200, objectFit: "scale-down" }}
                  src={product.image}
                ></Image>
              }
              actions={[
                <Rate allowHalf disabled value={product.rating.rate}></Rate>,
                <AddToCartButton item={product} />,
              ]}
            >
              <Card.Meta
                title={
                  <Typography.Paragraph>${product.price}</Typography.Paragraph>
                }
                description={
                  <Typography.Paragraph
                    ellipsis={{ rows: 3, expandable: true, symbol: "more" }}
                  >
                    {product.description}
                  </Typography.Paragraph>
                }
              ></Card.Meta>
            </Card>
          );
        }}
        dataSource={products}
      ></List>
    </div>
  );
};

export default Products;
