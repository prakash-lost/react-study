import React from 'react'
import Updatecart from '../Updatecart'


const cartdetails = [
  {
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
    buttonText: "watch on youtube",
    bgcolor: "bg-yellow-400",
    bgbuttom: "bg-red-900 hover:bg-red-300",
  },
  {
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
    buttonText: "watch on youtube",
    bgcolor: "bg-pink-400",
    bgbuttom: "bg-yellow-900 hover:bg-yellow-300",
  },
  {
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
    buttonText: "watch on youtube",
    bgcolor: "bg-green-400",
    bgbuttom: "bg-blue-900 hover:bg-blue-300",
  },
];

const Myskills = () => {
  return (
    <div className='bg-amber-300 p-4'>
        <h1 className='font-semibold text-center'>My skills</h1>
        <Updatecart 
        cartdetails={cartdetails} />
        {/* {skillsdetails.map((val)=>{
            return(
                {val}
            )

        })} */}
    </div>
  )
}

export default Myskills