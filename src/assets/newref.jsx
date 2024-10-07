
const newref = () => {
  const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Smartphone", price: 699 },
    { id: 3, name: "Headphones", price: 199 },
    { id: 4, name: "Keyboard", price: 49 },
    { id: 5, name: "Mouse", price: 29 }
  ];
  

  return (
    <div>
      
      <div>
      <h1>Product List</h1>
      <ul>
       
        {products.map(product=>(
          <li key={product.id} >{product.name}</li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default newref