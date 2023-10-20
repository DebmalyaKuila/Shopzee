 const getProductsByCategory =(category)=>{

return fetch(`https://fakestoreapi.com/products/category/${category}`)
.then(res=>res.json())

 }

 export default getProductsByCategory