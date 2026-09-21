// rafce
import React from "react";
// import Navbar from "./components/Navbar";
// import Body from "./components/Body";
// import Footer from "./components/footer";
// import CartDesign from "./CartDesign";
// // import Daicart from "./daicart";
import Updatecart from "./Updatecart";
import Aboutus from "./components/Aboutus";
import Myskills from "./components/Myskills";

const App = () => {
  const myinfo = {
    fullName: "prakash shrestha",
    address: "ratnanagar,chitwan",
    goal: ["learning , improving , building creative projects"],
  };
  const hobby = ["playing footbal", "fb scrolling"];
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Body/> */}
      <Aboutus myinformation={myinfo} myhobby={hobby} />
      {/* <CartDesign /> */}
      {/* <Daicart/> */}
      <Myskills />
      {/* <Updatecart/> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
