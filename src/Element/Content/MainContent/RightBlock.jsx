import React from "react";

const RightBlock = () => {
  return (
    <div className="text-white w-[42%] flex flex-col gap-6">
      <header className="text-[42px] font-bold">
        Build The Community Your Fans Will Love
      </header>
      <p className="text-lg opacity-70">
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion
      </p>
      <button className="bg-white text-violet w-[200px] rounded-full py-3 shadow-2xl hover:bg-soft-magenta hover:text-white transition-colors ease-in-out">
        Register
      </button>
    </div>
  );
};

export default RightBlock;
