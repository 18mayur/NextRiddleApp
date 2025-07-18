import React from "react";
import RiddleCard from "@/components/RiddleCard";
import RiddleCard2 from "@/components/RiddleCard2";
const riddles = () => {
  return (
    <>
    <div className="container flex justify-center mt-[3rem]">
        {/* <RiddleCard/> */}
        <RiddleCard2/>
      </div>
    </>
  );
};

export default riddles;
