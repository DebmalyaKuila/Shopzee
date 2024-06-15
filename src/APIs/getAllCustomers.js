const GetAllCustomers=()=>{
    return  fetch('http://dummyjson.com/users')
              .then(res=>res.json())
          
  }
  export default GetAllCustomers