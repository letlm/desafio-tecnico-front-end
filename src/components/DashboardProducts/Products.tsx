import { ContextProducts, ProductImg } from "./styles";

interface IProducts {
  title: string;
  description: string;
  img: string;
  more: string;
  price: string;
}

function Products({ title, description, img, more, price }: IProducts) {
  return (
    <ContextProducts>
      <span className="title">{title}</span>
      <div className="img">
        <ProductImg imgUrl={img} />
      </div>
      <div className="text">
        <span className="description">{description}</span>
        <span className="price">{price}</span>
      </div>
      <button>{more}</button>
    </ContextProducts>
  );
}

export default Products;
