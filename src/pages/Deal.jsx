import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-hook-form";
import {Link, useNavigate} from 'react-router'
import Formsell from "../components/AddProductFrom";
import AddProductForm from "../components/AddProductFrom";


const Deal = () => {
  const [product, setProduct] = useState([]);
  const [clicked,setClicked]=useState(false)

  const navigate=useNavigate()

  // const listProduct=async()=>{
  //     try{
  //         const response=await fetch("https://fakestoreapi.com/products")
  //         // console.log(response.json());
  //         const data= await response.json()
  //         console.log(data)
  //     }catch(err){
  //         console.log(err)
  //     }
  // }
  const listProduct = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      console.log(data);
      setProduct(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    listProduct();
  }, []);

  return (
    <>
      {/* <Link to={'addproduct'}> */}
      <div className="flex justify-end m-10 "><button onClick={()=>setClicked(true)} className="bg-blue-500 h-10 p-3 rounded-xl items-center">Add a Product</button></div>
      {/* </Link> */}
    <div className="flex flex-wrap gap-3 justify-evenly">
      {product.length > 0 &&
        product.map((val) => (
          <div className="flex justify-center"  >
            <div className="bg-slate-700 text-white flex-col justify-center items-center  w-80 p-6 rounded-2xl mt-4 hover:bg-slate-800 shadow-2xl hover:shadow-blue-900 " onClick={()=>navigate(`/detailspage/${val.id}`)}
              >
              <div className="p-2 flex justify-center">
                <img className="p-5 h-62 w-48" src={val.image} />
              </div>

              <div className="flex mt-8 truncate"> Title: {val.title}</div>
              <div>Price: {val.price}</div>
              <div>Category: {val.category}</div>
              <div>
                Rating: count:{val.rating.count} rate:{val.rating.rate}
              </div>
              
              <div className="flex justify-center mt-6">
                <button className="  hover:cursor-pointer p-2 border-2 bg-red-900 text-white rounded-2xl">
                  Please kindeu naa{" "}
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
    {clicked && <AddProductForm onClose={() => setClicked(false)} listProduct={listProduct} />}
    
        </>
  );
};

export default Deal;
