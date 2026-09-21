import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Editproduct from "../components/Editproduct";
import Deleteproduct from "../components/Deleteproduct";

const Detailspage = () => {
  // const navigate=useNavigate()
  const { id: productid } = useParams();
  const [num, setNum] = useState(1);
  console.log(productid);

  const [product, setProduct] = useState(null);

  const [clicked, setClicked] = useState(false);
  const [dodelete, setDodelete] = useState(false);

  const listProduct = async () => {
    try {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${productid}`,
      );
      console.log(data);
      setProduct(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    listProduct();
  }, [productid]);

  return (
    <div className="flex justify-center">
      <div className="bg-slate-700 text-white flex  gap-20 justify-center items-center  min-w-screen  p-6 rounded-2xl m-8 hover:bg-slate-800 shadow-2xl hover:shadow-blue-900  ">
        <div className="flex flex-col  gap-6 ">
          {/* <FaEdit /> */}
          <button className="hover:bg-red-600" onClick={() => setClicked(true)}>
            <FaEdit />
          </button>

          <button className="hover:bg-red-600">
            <MdDelete onClick={() => setDodelete(true)} />
          </button>
        </div>

        <div>
          <div className="p-2 flex justify-center text-white">
            <img
              className="p-5 h-62 w-48 "
              src={product?.image}
              alt={product?.title}
            />
          </div>
        </div>
        <div>
          <div className="flex mt-8 truncate"> Title: {product?.title}</div>
          <div>Price: {product?.price}</div>
          <div>Category: {product?.category}</div>
          <div>
            Rating: count:{product?.rating?.count} rate:{product?.rating?.rate}
          </div>
          <div className="flex gap-3 mt-6">
            <button
              onClick={() => setNum(num + 1)}
              className="h-6  w-8 bg-blue-600 text-white"
            >
              +
            </button>
            <p>{num}</p>

            <button
              onClick={num > 0 ? () => setNum(num - 1) : () => setNum(0)}
              className="h-6  w-8  bg-blue-600 text-white"
            >
              -
            </button>
            <button className="  h-10 hover:cursor-pointer  text-center border-2 bg-blue-900 text-white rounded-2xl">
              Add to cart
            </button>
          </div>
          <div className="flex justify-center mt-6">
            <button className="  hover:cursor-pointer p-2 border-2 bg-red-900 text-white rounded-2xl">
              Buy now{" "}
            </button>
          </div>
          {clicked && (
            <Editproduct
              product={product}
              listProduct={listProduct}
              onClose={() => setClicked(false)}
            />
          )}
          {dodelete && (
            <Deleteproduct
              product={product}
              setDodelete={setDodelete}
              onClose={() => setDodelete(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Detailspage;
