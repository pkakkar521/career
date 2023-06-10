import React ,{useEffect, useState} from "react";
import './UpdateProduct.css';
import { useParams,useNavigate } from "react-router-dom";
const UpdateProduct=()=>{
    const [name,setname]=useState('');
    const [price,setprice]=useState('');
    const [category,setcategory]=useState('');
    const [company,setcompany] = useState('');
   const params=useParams();
   const navigate=useNavigate();
   useEffect(()=>{
    
    getproductdetails();
   },[])
   const getproductdetails=async()=>{
   console.warn(params);
   let result=await fetch(`https://pkakkar521.github.io/Dashboard1/product/${params.id}`);
   let res=await result.json();
   setname(res.name);
   setprice(res.price);
   setcategory(res.category);
   setcompany(res.company);
   }
    const addproduct =async()=>{
      let result=await fetch(`https://pkakkar521.github.io/Dashboard1/product/${params.id}`,{
        method:"Put",
        body:JSON.stringify({name,price,category,company}),
        headers:{
            "Content-Type":"application/json"
        }
      });
      let re=await result.json();
      console.warn(re);
      navigate('/');
    }
    return(
    <div className="product">
        <h1>Update Product</h1>
        <div className="kk">
        <input type="text" placeholder="enter the name of product" className="input" value={name} onChange={(e)=>{setname(e.target.value)}} />
        
        <input type="text" placeholder="enter the price of product" className="input" value={price} onChange={(e)=>{setprice(e.target.value)}} />
        
        <input type="text" placeholder="enter the category of product" className="input" value={category} onChange={(e)=>{setcategory(e.target.value)}} />
        
        <input type="text" placeholder="enter the company of product" className="input" value={company} onChange={(e)=>{setcompany(e.target.value)}} />
        
        </div>
       
        <button className="button" onClick={addproduct}><h3>Update Product</h3></button>
    </div>
    )
}
export default UpdateProduct;