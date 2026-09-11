import React, { useState } from "react";

const Aboutuspage = () => {
  const [inputval, setInputval] = useState(undefined);

  const Buttonaction = () => {
    alert("HELLO");
    console.log("bye bye");
  };
  const Nameprint = (name) => {
    console.log(`my name is ${name}`);
  };
  const handleevent = (event) => {
    console.log("event", event);
  };
  const handleinputevent = (event) => {
    console.log("event", event.target.value);
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <div>Aboutuspage</div>
        <div className="  flex gap-6">
          <button
            onClick={() => console.log("bye bye bye")}
            className="bg-amber-950 rounded text-white hover:bg-amber-300 "
          >
            click here
          </button>
          <button
            onClick={
              () => Nameprint("prakash") //Nameprint('prakash') this is automatically run
            }
            className="bg-amber-950 rounded text-white hover:bg-amber-300 "
          >
            name
          </button>
          <input
            type="text"
            className="border rounded-md shadow-2xl p-1"
            placeholder="enter some text"
            onChange={(e) => handleinputevent(e)}
          />

          <button
            onClick={(e) => handleevent(e)}
            className="bg-amber-950 rounded text-white hover:bg-amber-300 "
          >
            console event
          </button>
          <button
            onClick={
              () => console.log("namaskar") //{Buttonaction}
            }
            className="bg-amber-950 rounded text-white hover:bg-amber-300 "
          >
            prevent default
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aboutuspage;

// handleclick
// handleclick()
