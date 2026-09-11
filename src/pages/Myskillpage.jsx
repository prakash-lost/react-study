import React, { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";

// usestate() syntax
// const[value,setValue]=useState(initalValue)

const Myskillpage = () => {
  const [num, setNum] = useState(0);
  const mySkill = [];
  const [skillstatus, setSkillstatus] = useState(false);
  const [showstatus, setShowstatus] = useState(false);
  //setNum is a method
  const [text, setText] = useState("");


  // syntax of useEffect
  // useEffect(()=>{}function,[]dependencyarray)

  useEffect(()=>{console.log('useEffect')},[num])


  const onminus = () => {
    setNum(num - 1);
  };
  const onplus = () => {
    setNum(num + 1);
  };
  console.log("great");
  console.log(num);
  console.log("hell nah");
  // const count = 0;
  // let b = 0;
  // const onminus=()=>{
  //   console.log(b--)
  // }

  // console.log('we are developer')
  // const onplus=()=>{
  //   console.log(b++)
  // }

  // usestate
  const handletxt = (val) => {
    setText("the text is" + val);
  };
  return (
    <div>
      <div className="flex justify-center gap-3 mt-4">
        <input type="number" className="bg-cyan-100 rounded-md" />
        <p>{num}</p>
        <button
          onClick={onplus}
          className="px-4 py-1.5 bg-blue-500 shadow-2xl rounded-md"
        >
          +
        </button>
        <button
          onClick={onminus}
          className="px-4 py-1.5 bg-blue-500 shadow-2xl rounded-md"
        >
          -
        </button>
      </div>
      <div>
        <input
          type="text"
          className="border rounded-md shadow-2xl p-1"
          placeholder="enter some text"
          onChange={(e) => handletxt(e.target.value)}
        />
        <p>{text}</p>
      </div>
      {/* another */}
      <div className="flex gap-3 justify-center">
        <div>
          <button
            className="px-4 py-1.5 bg-blue-500 shadow-2xl rounded-md flex items-center gap-1 hover:font-medium cursor-pointer"
            onClick={() => setSkillstatus(!skillstatus)}
          >
            <span>{skillstatus ? "hide skill" : "show skill"}</span>
            <FaLocationArrow />
          </button>
          {skillstatus && (
            <div>
              {mySkill.length == 0 ? (
                "dont have skills"
              ) : (
                <div>
                  {mySkill.length > 0 &&
                    mySkill.map((val, index) => {
                      return (
                        <div>
                          <h2>skills are </h2>
                          <div key={index} className="text-sm">
                            {index + 1}.{val}
                          </div>
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* another */}
      <div className="border-2 border-amber-300 m-10">
        <div className="flex justify-center gap-9">
          {showstatus ? (
            <div className="items-center">
              <h1>education</h1>
              <p>Tribhuvan university</p>
              <p>Bsc.Csit 2022-2026</p>
            </div>
          ) : (
            <div className="items-center">
              <h1>certificate</h1>
              <p>w3 developer</p>
              <p>React 2026</p>
            </div>
          )}

          <button
            className="px-4 py-1.5 bg-blue-500 shadow-2xl rounded-md flex items-center gap-1 hover:font-medium cursor-pointer h-6 w-25 justify-center "
            onClick={() => setShowstatus(!showstatus)}
          >
            {showstatus ? "certificate" : "education"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Myskillpage;
