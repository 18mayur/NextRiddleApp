"use client";
import Link from "next/link";
import "./WelcomeCard.css";
import "./NewRiddleCard.css";
import { useState, useEffect } from "react";
import Loader2 from "./Loader2";
import cross from "../../public/Images/cross.svg";
import check from "../../public/Images/check.svg";
import hint from "../../public/Images/hints.png";
import hint2 from "../../public/Images/hints2.png";
import Image from "next/image";

const NewRiddleCard = ({ category }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [riddles, setRiddles] = useState([]);
  const [counter, setCounter] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [hintCount, setHintCount] = useState(0);
  const [hint, setHint] = useState("");
  const [showAns ,setShowAns]=useState(false);
  useEffect(() => {
    console.log(category);
    const fetchRiddle = async (category) => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://riddles-api-eight.vercel.app/${category}/10`
        );
        const data = await res.json();
        setRiddles(data.riddlesArray);
        // console.log(data.riddlesArray[0]);
      } catch (err) {
        console.error("Failed to fetch riddle:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRiddle(category);
  }, [category]);
  // console.log(riddles);
  // console.log(riddles[counter].riddle);
  const handleNextRiddle = () => {
    if (counter < riddles.length - 1) {
      // setCounter(counter + 1);
      setIsLoading(true);
      setTimeout(() => {
        setCounter((prev) => prev + 1);
        setIsLoading(false);
        setShowAns(false);
        setHint("");
        setHintCount(0);
      }, 1000);
    } else {
      setGameOver(true);
    }
  };

  const generateHint = (answer, hintLevel) => {
    if (hintLevel >= 3) return answer;
    const revealCount = hintLevel === 1 ? 2 : 4;
    const indices = [];
    while (indices.length < revealCount) {
      const idx = Math.floor(Math.random() * answer.length);
      if (!indices.includes(idx) && answer[idx] !== " ") {
        indices.push(idx);
      }
    }
    return answer
      .split("")
      .map((char, i) => {
        if (i === 0 || indices.includes(i)) return char;
        return char === " " ? " " : "_";
      })
      .join("");
  };
  const handleHint = () => {
    const currentAnswer = riddles?.[counter]?.answer || "";
    const newHintCount = hintCount + 1;
    setHintCount(newHintCount);

    const newHint = generateHint(currentAnswer, newHintCount);
    setHint(newHint);
  };

  const handleGiveup =()=>{
    setShowAns(true);
  }
  return (
    <>
      <div className="box !absolute w-full ">
        <div className="container2 flex justify-center items-center !w-full">
          <div className="clock flex flex-col items-center ">
            <div className="Que-div flex justify-between items-center ">
              {showAns? <h3 className="!text-[2rem] font-semibold">{riddles?.[counter]?.answer}</h3>:<h3 className="!text-[2rem] font-semibold">Quetion</h3>}
              <span className="pr-3 text-xl">{counter + 1}/10</span>
            </div>
            {gameOver ? (
              <div className="text-3xl font-bold text-red-500 mt-4">
                🎉 Game Over!
              </div>
            ) : isLoading ? (
              <div className="flex items-center justify-center mb-3 text-black text-lg font-semibold">
                <Loader2 />
              </div>
            ) : (
              <div className="px-6 pt-5 text-left w-full">
                <p className="text-[1.125rem] text-amber-100">
                  {riddles?.[counter]?.riddle || "No riddle available"}
                </p>
                {/* {showAnswer && (
                <p className="text-green-400 mt-2">
                  Answer: {riddles?.[counter]?.answer || "Not available"}
                </p>
              )} */}
              </div>
            )}

            <div className="input-div w-full flex flex-col items-start gap-3 px-6 ">
              <input
                placeholder="Enter the Answer"
                type="text"
                name="text"
                className="input !mb-0"
              />
              <div className="flex justify-center w-full gap-4 items-center mt-4">
                <button onClick={handleGiveup} className="bg-red-500 text-white px-4 py-2 rounded  !flex gap-1 items-center ">
                  <Image src={cross} width={24} height={24} />{" "}
                  <span>Give up</span>
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded  !flex gap-1 items-center ">
                  <Image src={check} width={28} height={28} />{" "}
                  <span>check</span>
                </button>

                <button
                  onClick={handleNextRiddle}
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Next
                </button>
              </div>
              <div className="hint flex gap-1 mt-4 mb-2.5 items-center text-xl text-amber-50 cursor-pointer ">
                <Image src={hint2} width={30} height={30} />
                <span onClick={handleHint} disabled={hintCount >= 3}>
                  {" "}
                  Give me hint
                </span>
                {hint && <p className="text-lime-400 text-xl ml-2 ">{hint}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewRiddleCard;
