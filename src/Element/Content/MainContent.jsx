import React from "react";
import LeftBlock from "./MainContent/LeftBlock";
import RightBlock from "./MainContent/RightBlock";

const MainContent = () => {
  return (
    <div className="flex w-full justify-between items-center">
      <LeftBlock />
      <RightBlock />
    </div>
  );
};

export default MainContent;
