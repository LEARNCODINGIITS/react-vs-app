import { useState,useEffect } from "react";
import { deleteProduct, products } from "../services/ProductsService"
import { useNavigate } from "react-router-dom";
 

const ProductList = () => {
    const[products1,setProduct1]=useState([]);
const navigate=useNavigate();
useEffect(
    ()=>{
      getAllProducts()
    }
    ,[]);

    const getAllProducts=()=>{
      products().then((response)=>{
        console.log(response.data)
        setProduct1(response.data)
    }).catch((error)=>console.log(error));
    }

    const addProduct=()=>{
      navigate('/addProduct')
    };

    const updateProduct=(id)=>{
      navigate(`/editProduct/${id}`);
    }

    const removeProduct=(id)=>{
         deleteProduct(id).then((response)=>{ 
          getAllProducts()
          console.log(response.data)
         }).catch((error)=>console.log(error));
    }

  return (
    <div>
      <button className="btn btn-primary mb-2" onClick={addProduct}>ADD PRODUCT</button>
      
<table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">PID</th>
      <th scope="col">PNAME</th>
      <th scope="col">PRICE</th>
      <th scope="col">ACTIONS</th>
    </tr>
  </thead>
  <tbody>
   
    {
        products1.map(product=>
                <tr key={product.pid}>
                    <td>{product.pid}</td>
                    <td>{product.pname}</td>
                    <td>{product.price}</td>
                    <td>
                          <button className="btn btn-info" onClick={()=>updateProduct(product.pid)}>UPDATE</button>
                          <button className="btn btn-danger" onClick={()=>removeProduct(product.pid)} style={{marginLeft:'3px'}}>DELETE</button>
                          
                    </td>
                </tr>

        )
    }
    
  </tbody>
</table>

    </div>
  )
}

export default ProductList