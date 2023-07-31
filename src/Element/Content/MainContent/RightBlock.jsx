import React from "react";

const RightBlock = () => {
  return (
    <div className="text-white w-[42%] flex flex-col gap-6 table:w-full table:text-center table:items-center table:gap-8">
      <header className="text-[42px] font-bold table:text-5xl table:leading-[75px] mobile:text-3xl">
        Build The Community Your Fans Will Love
      </header>
      <p className="text-lg opacity-70 table:opacity-90 table:text-[31px] table:leading-10 mobile:text-lg">
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion
      </p>
      <button className="bg-white text-violet w-[200px] rounded-full py-3 shadow-2xl hover:bg-soft-magenta hover:text-white transition-colors ease-in-out table:w-[400px] table:py-5 table:text-2xl mobile:text-base mobile:w-[200px] mobile:py-3">
        Register
      </button>
    </div>
  );
};

export default RightBlock;
