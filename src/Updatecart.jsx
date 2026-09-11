import React from "react";


const Updatecart = ({cartdetails}) => {
  return (
    <div className="flex items-center justify-center  text-black  text-xl bg-slates-400 shadow-2xl  ">
      {cartdetails.map((item) => (
        <article
          className={`w-130 rounded-2xl ${item.bgcolor} p-4 font-bold shadow-2xl m-3`}
        >
          <div className="w-full flex justify-center">
            <img src={item.imgSrc} alt="OPTIMUS PRIME" className="w-4/5" />
          </div>
          <div>
            <br />
            <h3 className="text-center text-red-900 font-bold">{item.name}</h3>
            <p>
              <br />
              My name is {item.originName} .Title: {item.name}
              <br />
              <br />I am the {item.position}. I carry the weight of my word as{" "}
              {item.moralView}
              <br />I fought against {item.enemy} with my beloved weapons THE{" "}
              {item.weapons}
            </p>
          </div>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={` rounded-lg mt-5 block  ${item.bgbuttom} p-3 text-center text-white transition  w-50 mx-auto `}
          >
            {item.buttonText}
          </a>
        </article>
      ))}
    </div>
  );
};

export default Updatecart;
