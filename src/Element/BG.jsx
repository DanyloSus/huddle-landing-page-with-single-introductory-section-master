import React from "react";

const BG = () => {
  return (
    <div className="h-screen absolute top-0 left-0 z-0 w-screen object-cover">
      <img
        src="./bg-desktop.svg"
        alt="bg desktop"
        className="h-screen absolute top-0 left-0 z-0 w-screen object-cover table:hidden"
      />
      <img
        src="./bg-mobile.svg"
        alt="bg mobile"
        className=" absolute top-0 left-0 z-0 w-screen object-cover table:block hidden"
      />
    </div>
  );
};

export default BG;
