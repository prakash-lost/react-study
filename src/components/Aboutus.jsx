import React from "react";

const Aboutus = ({ myinformation, myhobby }) => {
  console.log(myinformation);
  console.log(myhobby);

  return (
    <div className="bg-cyan-200">
      <h1 className="font-semibold text-center p-3">Aboutus</h1>
      <p>
        Hello, my name is {myinformation.fullName} . I am a passionate and
        hardworking learner. I enjoy learning new technologies and developing my
        skills. I am interested in web development and creating modern websites.
        my goal are
        <ul>
          {myinformation.goal.map((arr) => {
            return <li>{arr}</li>;
          })}
        </ul>
        My hobby is
        <ul>
          {myhobby.map((val) => {
            return <li>{val}</li>;
          })}
        </ul>
      </p>
    </div>
  );
};

export default Aboutus;
