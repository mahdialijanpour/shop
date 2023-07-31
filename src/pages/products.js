import Button from "@/components/Button";
import Product from "@/components/product";
import { useState } from "react";

function Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Apple",
      price: 2000,
    },
    {
      id: 2,
      name: "Banana",
      price: 2500
    },
    {
      id: 3,
      name: "Cherry",
      price: 3400
    },
    {
      id: 4,
      name: "Potato",
      price: 1700
    }
  ]);
  const [addProducts, setAddProducts] = useState([])

  const onProductClick = (product) => {
    const newProducts = [...products]
    newProducts.push(product)
    
    setProducts(newProducts);
  }

  console.log(addProducts)

  return (
    <div>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {products.map(product => {
          const { price, id, name } = product;

          
          return (
            <div style={{ border: "1px solid", margin: "5px", padding: "5px 10px" }} key={id}>
              <div>
                {name}
              </div>
              <div>
                {price}
              </div>
              <div>
                <Button name="Delete" click={() => { onProductClick(product) }} />
              </div>
            </div>
          )
        })}
      </div>
      <div>
          {addProducts.map((item , index) => {
             const num = index+1
            return (
                <div>{` ${num} -Name= ${item.name}'' Price= ${item.price}`}</div>
            )
          })}
      </div>
    </div>

  );
}

export default Products;