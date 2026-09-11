import React from "react";

const CartDesign = () => {
  const cartdetails = {
    name: " Optimus prime",
    originName: "orion pax",
    imgSrc: "./prime.jpg",
    position: "Leader of Autobot",
    enemy: "Megatron and the Decepticons",
    weapons: "Ion blaster(rifle) and orange Energon Axe",
    moralView: "`Freedom is the right of all sentient beings`",
    color: {
      name: "primary red and cobalt blue, anchored by metallic silver/gray accents and glowing cyan-blue eyes",
      plattes: {
        p1: "#D11A2A",
        p2: "#1F456E",
        p3: "#A9ACB6",
        p4: "#00E5FF",
        p5: "#FFB300",
      },
    },
    buttonText:'watch on youtube',
  };

  return (
    <div className="flex items-center justify-center  text-black  text-xl bg-slates-400 shadow-2xl min-h-screen">
      <article className="w-130 rounded-2xl bg-cyan-200 p-4 font-bold shadow-2xl">
        <div className="w-full flex justify-center">

        <img src={cartdetails.imgSrc} alt="OPTIMUS PRIME" className="w-4/5"/>
        </div>
        <div>
          <br />
          <h3 className="flex justify-center text-red-900 ">
            {cartdetails.name}
          </h3>
          <p>
            <br />
            My name is {cartdetails.originName} .Title: {cartdetails.name}
            <br />
            <br />I am the {cartdetails.position}. I carry the weight of my word
            as {cartdetails.moralView}
            <br />I fought against {cartdetails.enemy} with my beloved weapons
            THE {cartdetails.weapons}
            {/* <br /> Anybody who are against my words should run away in my one
            blink if you see the color {cartdetails.color.name} <br />
            Especially in this {cartdetails.color.plattes.p1},
            {cartdetails.color.plattes.p2},{cartdetails.color.plattes.p3},
            {cartdetails.color.plattes.p4},{cartdetails.color.plattes.p5} */}
          </p>
        </div>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          className=" rounded-lg mt-5 block  bg-red-600 p-3 text-center text-white transition hover:bg-red-700 w-50 mx-auto "
        >
         {cartdetails.buttonText} click
        </a>
      </article>
    </div>
  );
};

export default CartDesign;
